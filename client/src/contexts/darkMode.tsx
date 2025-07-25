import React, {
  useState,
  useRef,
  useEffect,
  RefObject,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export interface Theme {
  bodyBackgroundColor: string;
  textColor: string;
  otherColor: string;
}

const protanopiaTheme: Theme = {
  bodyBackgroundColor: '#fdf6e3',
  textColor: '#073642',
  otherColor: '#b58900',
};

const deuteranopiaTheme: Theme = {
  bodyBackgroundColor: '#f0f8ff',
  textColor: '#002b36',
  otherColor: '#268bd2',
};

const tritanopiaTheme: Theme = {
  bodyBackgroundColor: '#fff8dc',
  textColor: '#2e3440',
  otherColor: '#d08770',
};

const lightTheme: Theme = {
  bodyBackgroundColor: 'rgb(242, 237, 239)',
  textColor: 'black',
  otherColor: '#333',
};

const darkTheme: Theme = {
  bodyBackgroundColor: 'rgb(27, 24, 27)',
  textColor: 'white',
  otherColor: '#ddd',
};

const highContrastTheme: Theme = {
  bodyBackgroundColor: 'black',
  textColor: 'yellow',
  otherColor: '#FFD700',
};

type ColorScheme = 'system' | 'dark' | 'light';
export type ColorMode = 'default' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isDarkModePannelOpen: boolean;
  toggleDarkModePannel: () => void;
  addProtectedRef: (ref: RefObject<HTMLElement>) => void;
  removeProtectedRef: (ref: RefObject<HTMLElement>) => void;
  activeMode: ColorScheme;
  setActiveMode: (mode: ColorScheme) => void;
  isHighContrast: boolean;
  toggleContrast: () => void;
  activeColor: ColorMode;
  handleColorModeChange: (mode: ColorMode) => void;
  resetToDefault: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [activeMode, setActiveMode] = useState<ColorScheme>('system');
  const [activeColor, setActiveColor] = useState<ColorMode>('default');
  const [isDarkModePannelOpen, setDarkModePannelOpen] = useState<boolean>(false);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const protectedRefs = useRef<RefObject<HTMLElement>[]>([]);

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const isDarkMode = activeMode === 'dark' || (activeMode === 'system' && prefersDark);

  const toggleDarkMode = () => {
    setActiveMode(prev => {
      if (isHighContrast) return 'dark';
      if (activeColor !== 'default' && (prev === 'light' || prev === 'system')) return 'light';

      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'light';
      return prefersDark ? 'light' : 'dark';
    });
  };

  const toggleDarkModePannel = () => setDarkModePannelOpen(prev => !prev);

  const toggleContrast = () => {
    setIsHighContrast(prev => !prev);
    setActiveMode('dark');
    setActiveColor('default');
  };

  const handleColorModeChange = (mode: ColorMode) => {
    setActiveColor(mode);
    setActiveMode('light');
    setIsHighContrast(false);
  };

  const addProtectedRef = (ref: RefObject<HTMLElement>) => {
    if (!protectedRefs.current.includes(ref)) {
      protectedRefs.current.push(ref);
    }
  };

  const removeProtectedRef = (ref: RefObject<HTMLElement>) => {
    protectedRefs.current = protectedRefs.current.filter(r => r !== ref);
  };

  const resetToDefault = () => {
    setActiveMode('system');
    setActiveColor('default');
    setIsHighContrast(false);
    setDarkModePannelOpen(false);
    protectedRefs.current = [];
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDarkModePannelOpen) {
        const isClickOutsideProtectedRefs = !protectedRefs.current.some(ref =>
          ref.current?.contains(event.target as Node)
        );
        if (isClickOutsideProtectedRefs) toggleDarkModePannel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDarkModePannelOpen]);

  useEffect(() => {
    if (activeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => setActiveMode('system');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [activeMode]);

  const theme: DefaultTheme =
    isHighContrast
      ? highContrastTheme
      : activeColor === 'protanopia'
        ? protanopiaTheme
        : activeColor === 'deuteranopia'
          ? deuteranopiaTheme
          : activeColor === 'tritanopia'
            ? tritanopiaTheme
            : isDarkMode
              ? darkTheme
              : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <DarkModeContext.Provider
        value={{
          isDarkMode,
          toggleDarkMode,
          isDarkModePannelOpen,
          toggleDarkModePannel,
          addProtectedRef,
          removeProtectedRef,
          activeMode,
          setActiveMode,
          isHighContrast,
          toggleContrast,
          activeColor,
          handleColorModeChange,
          resetToDefault,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error('useDarkMode must be used within a DarkModeProvider');
  return context;
};