import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

export type ColorMode = 'default' | 'highContrast' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface AccessibilityState {
    mode: ColorMode;
    colorScheme: string | null;
}

interface AccessibilityContextType {
    activeMode: ColorMode | null;
    handleColorModeChange: (mode: ColorMode) => void;
    isDefault: boolean;
    isHighContrast: boolean;
    isProtanopia: boolean;
    isDeuteranopia: boolean;
    isTritanopia: boolean;
    isColorBlindPannelOpen: boolean;
    toggleColorBlindPanel: () => void;
    addProtectedRef: (ref: React.RefObject<HTMLElement>) => void;
    removeProtectedRef: (ref: React.RefObject<HTMLElement>) => void;
    schemes: AccessibilityState[];
    loading: boolean;
    error: string | null;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeMode, setActiveMode] = useState<ColorMode | null>('default');
    const [isColorBlindPannelOpen, setIsColorBlindPannelOpen] = useState<boolean>(false);
    const [schemes, setSchemes] = useState<AccessibilityState[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const protectedRefs = useRef<React.RefObject<HTMLElement>[]>([]);

    const isDefault = activeMode === 'default';
    const isHighContrast = activeMode === 'highContrast';
    const isProtanopia = activeMode === 'protanopia';
    const isDeuteranopia = activeMode === 'deuteranopia';
    const isTritanopia = activeMode === 'tritanopia';

    const handleColorModeChange = (mode: ColorMode) => {
        setActiveMode(mode);
        // setIsColorBlindPannelOpen(false);
    };

    const toggleColorBlindPanel = () => {
        setIsColorBlindPannelOpen(prev => !prev);
    };

    const addProtectedRef = (ref: React.RefObject<HTMLElement>) => {
        if (!protectedRefs.current.includes(ref)) {
            protectedRefs.current.push(ref);
        }
    };

    const removeProtectedRef = (ref: React.RefObject<HTMLElement>) => {
        protectedRefs.current = protectedRefs.current.filter(r => r !== ref);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isColorBlindPannelOpen) {
                const isClickOutsideProtectedRefs = !protectedRefs.current.some(ref => ref.current?.contains(event.target as Node));
                if (isClickOutsideProtectedRefs) {
                    toggleColorBlindPanel();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isColorBlindPannelOpen]);

    return (
        <AccessibilityContext.Provider value={{
            activeMode,
            handleColorModeChange,
            isDefault,
            isHighContrast,
            isProtanopia,
            isDeuteranopia,
            isTritanopia,
            isColorBlindPannelOpen,
            toggleColorBlindPanel,
            addProtectedRef,
            removeProtectedRef,
            schemes,
            loading,
            error,
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = (): AccessibilityContextType => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};
