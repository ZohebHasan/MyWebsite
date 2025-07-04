import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';
import { useSidebar } from '../../../contexts/sidebar';

const SidebarContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const { isSidebarOpen } = useSidebar();

  return (
    <StyledSideBar $isSidebarOpen={isSidebarOpen} $isDarkMode={isDarkMode}>
      <ElementsContainer $isSidebarOpen={isSidebarOpen}>
        {children}
      </ElementsContainer>
    </StyledSideBar>
  );
};

export default SidebarContainer;

const fadeOutAndMove = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;
const StyledSideBar = styled.div<{ $isSidebarOpen?: boolean; $isDarkMode?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100vh;
  width: 100vw;
  z-index: 1;

  backdrop-filter: blur(3px);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? 'rgba(48, 48, 48, 0.9)' : 'rgba(230, 230, 230, 0.833)'};

  opacity: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 1 : 0)};
  visibility: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'auto' : 'none')};

  transition: opacity 0.4s ease, visibility 0.4s ease;
`;

const ElementsContainer = styled.div<{ $isSidebarOpen?: boolean }>`
  opacity: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 1 : 0)};
  transition: opacity 0.4s ease 0.1s; // Delay for smoother feel
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
