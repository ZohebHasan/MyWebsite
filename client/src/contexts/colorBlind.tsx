import React, {
  useState,
  useRef,
  useEffect,
  RefObject,
  createContext,
  useContext,
  ReactNode,
} from 'react';

export type ColorMode = 'default' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface ColorBlindContextType {
  isColorBlindPannelOpen: boolean;
  toggleColorBlindPanel: () => void;
  addProtectedRef: (ref: RefObject<HTMLElement>) => void;
  removeProtectedRef: (ref: RefObject<HTMLElement>) => void;
  resetToDefault: () => void;
}

const ColorBlindContext = createContext<ColorBlindContextType | undefined>(undefined);

export const ColorBlindProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const protectedRefs = useRef<RefObject<HTMLElement>[]>([]);

  const toggleColorBlindPanel = () => setIsPanelOpen(prev => !prev);

  const addProtectedRef = (ref: RefObject<HTMLElement>) => {
    if (!protectedRefs.current.includes(ref)) {
      protectedRefs.current.push(ref);
    }
  };

  const removeProtectedRef = (ref: RefObject<HTMLElement>) => {
    protectedRefs.current = protectedRefs.current.filter(r => r !== ref);
  };

  const resetToDefault = () => {
    setIsPanelOpen(false);
    protectedRefs.current = [];
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isPanelOpen) {
        const isClickOutside = !protectedRefs.current.some(ref =>
          ref.current?.contains(event.target as Node)
        );
        if (isClickOutside) toggleColorBlindPanel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPanelOpen]);

  return (
    <ColorBlindContext.Provider
      value={{
        isColorBlindPannelOpen: isPanelOpen,
        toggleColorBlindPanel,
        addProtectedRef,
        removeProtectedRef,
        resetToDefault,
      }}
    >
      {children}
    </ColorBlindContext.Provider>
  );
};

export const useColorBlind = (): ColorBlindContextType => {
  const context = useContext(ColorBlindContext);
  if (!context) {
    throw new Error('useColorBlind must be used within a ColorBlindProvider');
  }
  return context;
};