import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';

import CloseLight from '../../assets/closeColorblindLight.png';
import CloseDark from '../../assets/closeColorblindDark.png';
import OpenLight from '../../assets/openLight.png';
import OpenDark from '../../assets/openDark.png';

import AccessibilityListButton from './buttonLogo';
import { useAccessibility } from '../../../contexts/accessibility';

const AccessibilityDropDownButton: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const {
        isColorBlindPannelOpen,
        toggleColorBlindPanel,
        addProtectedRef,
        removeProtectedRef
    } = useAccessibility();

    const optionBtnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (optionBtnRef.current) {
            addProtectedRef(optionBtnRef as React.RefObject<HTMLElement>);
        }

        return () => {
            if (optionBtnRef.current) {
                removeProtectedRef(optionBtnRef as React.RefObject<HTMLElement>);
            }
        };
    }, [optionBtnRef, addProtectedRef, removeProtectedRef]);

    return (
        <AccessibilityButtonContainer
            $isDarkMode={isDarkMode}
            onClick={toggleColorBlindPanel}
            ref={optionBtnRef}
        >
            <ButtonWrapper>
                <AccessibilityListButton
                    darkModeLogo={CloseDark}
                    lightModeLogo={CloseLight}
                    activeDarkLogo={OpenDark}
                    activeLightLogo={OpenLight}
                    isActive={isColorBlindPannelOpen}
                    size={1.2}
                />
            </ButtonWrapper>
        </AccessibilityButtonContainer>
    );
};

export default AccessibilityDropDownButton;

const AccessibilityButtonContainer = styled.div<{ $isDarkMode: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
  
    border-radius: 0.5rem;
    margin: 0.2rem;
    position: relative;


    &:hover {
        color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
        background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#3b3b3b' : '#c3c3c3')};
        opacity: 0.7;
        transform: scale(1.05);
    }

    &:active {
        background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#919191' : '#595858')};
        transform: scale(1.0);
    }

    transition: transform 0.2s ease-in-out, color 0.3s, opacity 0.3s ease-in-out;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;