import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';

interface PageContainerProps {
  children?: React.ReactNode;
}

const Page: React.FC<PageContainerProps> = ({ children }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const viewer = viewerRef.current;
    const board = boardRef.current;
    if (!viewer || !board) return;


    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const maxTilt = isMobile ? 10 : 3;


    const easeDown = 0.08;
    const easeUp = 0.02;

    let animationId: number;
    let targetTiltX = 0,
      targetTiltY = 0;
    let currentTiltX = 0,
      currentTiltY = 0;


    const updateTiltMouse = (e: MouseEvent) => {
      const rect = viewer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      targetTiltY = percentX * maxTilt;
      targetTiltX = -percentY * maxTilt;
    };

    const resetTilt = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const gamma = event.gamma ?? 0; // Left-right
      const beta = event.beta ?? 0;   // Front-back

      const percentX = Math.max(-1, Math.min(1, gamma / 45));
      const percentY = Math.max(-1, Math.min(1, beta / 45));

      targetTiltY = percentX * maxTilt;
      targetTiltX = -percentY * maxTilt;
    };

    const requestIOSPermission = async () => {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation, true);
        }
      } catch (err) {
        console.warn('DeviceOrientation permission denied or failed', err);
      }
    };

    const setupListeners = () => {
      if (isMobile && typeof DeviceOrientationEvent !== 'undefined') {
        if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
          requestIOSPermission(); // iOS
        } else {
          window.addEventListener('deviceorientation', handleOrientation, true); // Android
        }
      } else {
        viewer.addEventListener('mousemove', updateTiltMouse, { passive: true });
        viewer.addEventListener('mouseleave', resetTilt);
      }
    };

    const removeListeners = () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      viewer.removeEventListener('mousemove', updateTiltMouse);
      viewer.removeEventListener('mouseleave', resetTilt);
    };

    const animate = () => {
      const deltaX = targetTiltX - currentTiltX;
      const deltaY = targetTiltY - currentTiltY;

      const easeX = deltaX > 0 ? easeDown : easeUp;
      const easeY = deltaY > 0 ? easeDown : easeUp;

      currentTiltX += deltaX * easeX;
      currentTiltY += deltaY * easeY;

      // Clamp to avoid accidental overflow
      const tiltX = Math.max(-maxTilt, Math.min(maxTilt, currentTiltX));
      const tiltY = Math.max(-maxTilt, Math.min(maxTilt, currentTiltY));

      board.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      animationId = requestAnimationFrame(animate);
    };

    setupListeners();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      removeListeners();
    };
  }, []);

  return (
    <Viewer ref={viewerRef}>
      <PageContainer ref={boardRef} $isDarkMode={isDarkMode}>
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
  box-shadow: ${({ $isDarkMode }) =>
    $isDarkMode ? 'none' : '0 2px 15px rgba(0, 0, 0, 0.2)'};
`;