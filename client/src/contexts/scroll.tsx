import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface ScrollContextType {
  showStickyButtons: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ showStickyButtons: false });

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showStickyButtons, setShowStickyButtons] = useState(false);
  const homeTopRef = useRef<number>(0);
  const rafId = useRef<number>(0);

  // Calculate home-top position with proper document-relative position
  const calculateHomeTop = useCallback(() => {
    const element = document.getElementById('home-top');
    if (!element) return 0;
    
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }, []);

  // Update position on resize and scroll
  const updatePositions = useCallback(() => {
    homeTopRef.current = calculateHomeTop();
  }, [calculateHomeTop]);

  // Efficient scroll handler
  const handleScroll = useCallback(() => {
    if (rafId.current) window.cancelAnimationFrame(rafId.current);
    
    rafId.current = window.requestAnimationFrame(() => {
      const shouldShow = window.scrollY > homeTopRef.current + 440;
      setShowStickyButtons(shouldShow);
    });
  }, []);

  useEffect(() => {
    // Initial measurement
    updatePositions();
    
    // Setup event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updatePositions);
    
    // Set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePositions);
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll, updatePositions]);

  return (
    <ScrollContext.Provider value={{ showStickyButtons }}>
      {children}
    </ScrollContext.Provider>
  );
};