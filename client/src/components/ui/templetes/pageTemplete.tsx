import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../../contexts/darkMode';

interface PageContainerProps {
  children?: React.ReactNode;
}

const Page: React.FC<PageContainerProps> = ({ children }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const {isDarkMode} = useDarkMode();
  
  useEffect(() => {
    const viewer = viewerRef.current;
    const board = boardRef.current;
    if (!viewer || !board) return;
    
    // Lowered max tilt from 5deg → 3deg for subtler movement
    const maxTilt = 1; // degrees
    
    let bounds = viewer.getBoundingClientRect();
    let targetX = 0.5, targetY = 0.5;
    let currentX = 0.5, currentY = 0.5;
    // Reduced ease from 0.08 → 0.04 for a heavier, smoother response
    const ease = 0.04;
    let animationId: number;

    // Update bounds helper
    const updateBounds = () => {
      if (!viewer) return;
      bounds = viewer.getBoundingClientRect();
    };

    // Mouse movement handler (use passive listener to avoid blocking)
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX - bounds.left) / bounds.width;
      const ny = (e.clientY - bounds.top) / bounds.height;
      targetX = Math.min(Math.max(nx, 0), 1);
      targetY = Math.min(Math.max(ny, 0), 1);
    };

    // Reset position on mouse leave
    const handleMouseLeave = () => {
      targetX = 0.5;
      targetY = 0.5;
    };

    // Animation loop
    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      const pivotX = `${currentX * 100}%`;
      const pivotY = `${currentY * 100}%`;
      const tiltY = (currentX - 0.5) * 2 * maxTilt;
      const tiltX = (0.5 - currentY) * 2 * maxTilt;
      
      if (board) {
        board.style.transformOrigin = `${pivotX} ${pivotY}`;
        board.style.transform = 
          `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Set up event listeners
    viewer.addEventListener('mousemove', handleMouseMove, { passive: true });
    viewer.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateBounds);
    
    // Initial bounds update before starting animation
    updateBounds();
    animate();
    
    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationId);
      viewer.removeEventListener('mousemove', handleMouseMove);
      viewer.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  return (
    <Viewer ref={viewerRef}>
      <PageContainer ref={boardRef} $isDarkMode = {isDarkMode}>
        {children}
      </PageContainer>
    </Viewer>
  );
};

export default Page;

// Perspective container
const Viewer = styled.div`
  position: absolute;
  margin: 20px;
  width: calc(100vw - 40px);
  height: calc(100vh - 50px);
  perspective: 1200px;
`;

// Tiltable board
const PageContainer = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ $isDarkMode }) => ($isDarkMode ? '#1a1a1a' : '#fff')};
  border: 1px solid ${({ $isDarkMode }) => ($isDarkMode ? '#333' : '#e6d5e7')};
  cursor: default;
  will-change: transform, transform-origin;
  transform-origin: 50% 50%;
  transform: rotateX(0deg) rotateY(0deg);
  transition: background 0.2s ease-out, border 0.2s ease-out;

  /* No box-shadow in dark mode; subtle shadow in light mode */
  box-shadow: ${({ $isDarkMode }) =>
    $isDarkMode ? 'none' : '0 2px 15px rgba(0, 0, 0, 0.2)'};
`;


