import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReducedMotionContextType {
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
  isReadableFont: boolean;
  toggleReadableFont: () => void;
  dialValue: number;
  setDialValue: (val: number) => void;
  increaseDial: () => void;
  decreaseDial: () => void;
  resetToDefault: () => void;
}

const ReducedMotionContext = createContext<ReducedMotionContextType | undefined>(undefined);

export const ReducedMotionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [dialValue, setDialValue] = useState<number>(0); // default = 0 (no change)

  const toggleReducedMotion = () => setIsReducedMotion(prev => !prev);
  const toggleReadableFont = () => setIsReadableFont(prev => !prev);

  const increaseDial = () => {
    setDialValue(prev => {
      const next = +(prev + 0.01).toFixed(3);
      return next > 0.1 ? 0.1 : next;
    });
  };

  const decreaseDial = () => {
    setDialValue(prev => {
      const next = +(prev - 0.01).toFixed(3);
      return next < -0.1 ? -0.1 : next;
    });
  };

  const resetToDefault = () => {
    setIsReducedMotion(false);
    setIsReadableFont(false);
    setDialValue(0);
  };

  return (
    <ReducedMotionContext.Provider
      value={{
        isReducedMotion,
        toggleReducedMotion,
        isReadableFont,
        toggleReadableFont,
        dialValue,
        setDialValue,
        increaseDial,
        decreaseDial,
        resetToDefault,
      }}
    >
      {children}
    </ReducedMotionContext.Provider>
  );
};

export const useReducedMotion = (): ReducedMotionContextType => {
  const context = useContext(ReducedMotionContext);
  if (!context) throw new Error('useReducedMotion must be used within ReducedMotionProvider');
  return context;
};