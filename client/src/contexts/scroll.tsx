import React, { createContext, useContext, useState, useEffect, useRef, useCallback, RefObject } from 'react';

interface ScrollContextType {
  showStickyButtons: boolean;
  homeRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
  scrollTo: (ref: RefObject<HTMLDivElement | null>) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  showStickyButtons: false,
  homeRef: { current: null },
  projectsRef: { current: null },
  aboutRef: { current: null },
  contactRef: { current: null },
  scrollTo: () => { },
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showStickyButtons, setShowStickyButtons] = useState(false);
  const homeTopRef = useRef<number>(0);
  const rafId = useRef<number>(0);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateHomeTop = useCallback(() => {
    const element = document.getElementById('home-top');
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }, []);

  const updatePositions = useCallback(() => {
    homeTopRef.current = calculateHomeTop();
  }, [calculateHomeTop]);

  const handleScroll = useCallback(() => {
    if (rafId.current) window.cancelAnimationFrame(rafId.current);

    rafId.current = window.requestAnimationFrame(() => {
      const shouldShow = window.scrollY > homeTopRef.current + 388;
      setShowStickyButtons(shouldShow);
    });
  }, []);

  useEffect(() => {
    updatePositions();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updatePositions);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePositions);
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll, updatePositions]);

  return (
    <ScrollContext.Provider
      value={{
        showStickyButtons,
        homeRef,
        projectsRef,
        aboutRef,
        contactRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
