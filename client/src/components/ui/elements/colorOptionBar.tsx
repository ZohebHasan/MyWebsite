import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';
import { useColorBlind} from '../../../contexts/colorBlind';
import Options from "./colorOptions"

const ColorBlindBar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { isColorBlindPannelOpen, addProtectedRef, removeProtectedRef } = useColorBlind();
    const { isDarkMode } = useDarkMode();
    const colorBlindBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = colorBlindBarRef as React.RefObject<HTMLElement>;
        if (ref.current) {
            addProtectedRef(ref);
        }

        return () => {
            if (ref.current) {
                removeProtectedRef(ref);
            }
        };
    }, [addProtectedRef, removeProtectedRef]);

    const handlePanelClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <StyledColorBlindBar
            ref={colorBlindBarRef}
            $isProfileBarOpen={isColorBlindPannelOpen}
            $isDarkMode={isDarkMode}
            onClick={handlePanelClick}
        >
            <LinksContainer $isProfileBarOpen={isColorBlindPannelOpen}>
                <Options />
            </LinksContainer>
        </StyledColorBlindBar>
    );
};

export default ColorBlindBar;

const StyledColorBlindBar = styled.div<{ $isProfileBarOpen?: boolean; $isDarkMode?: boolean }>`
  ${({ $isProfileBarOpen, $isDarkMode }) => `
    // padding-right: 1rem;
    // padding-left: 1rem;
    // height: ${$isProfileBarOpen ? '50%' : '0'};
    border-bottom-right-radius: ${$isProfileBarOpen ? '15px' : '50%'};
    border-bottom-left-radius: ${$isProfileBarOpen ? '15px' : '50%'};
    transform: scaleY(${$isProfileBarOpen ? '1' : '0'});
    opacity: ${$isProfileBarOpen ? '1' : '0'};
    background-color: ${$isDarkMode ? 'rgba(33, 33, 33, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  `}
  border-radius: 0.5rem;
  min-width: 10.5rem;
@media (max-width: 768px) {
    min-width: 7.3rem;
  }
  position: absolute;
  backdrop-filter: blur(3px);
  overflow-x: hidden;
  overflow-y: hidden;
  transition: height 0.5s ease-out, transform 0.3s ease-out, opacity 0.5s ease-in-out, border-radius 0.3s ease-out;
  display: flex;
  flex-direction: column;
  z-index: 4;
  transform-origin: top; /* 👈 changed from bottom to top */
  /* top: 50.5%;
  right: 24.5%; */
  top: 0%;
  left: 0%;
`;

const LinksContainer = styled.div<{ $isProfileBarOpen?: boolean }>`
  opacity: ${({ $isProfileBarOpen }) => $isProfileBarOpen ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  /* padding: 0.5rem; */
  /* gap: 0.5rem; */
`;