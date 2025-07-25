import React from 'react';
import './App.css';
import ZohebHasan from '../main/zohebhasan';
import { DarkModeProvider } from '../contexts/darkMode';
import { SidebarProvider } from '../contexts/sidebar';
import { ScrollProvider } from '../contexts/scroll';
import { ColorBlindProvider } from '../contexts/colorBlind';
import { ReducedMotionProvider, useReducedMotion } from '../contexts/reducedMotionContext';
import { SendMessageProvider } from '../contexts/sendMessage';
import { createGlobalStyle } from 'styled-components';

const App: React.FC = () => {
  return (
    <ReducedMotionProvider>
      <ColorBlindProvider>
        <DarkModeProvider>
          <ScrollProvider>
            <SidebarProvider>
              <SendMessageProvider>


                <MainApp />
              </SendMessageProvider>
            </SidebarProvider>
          </ScrollProvider>
        </DarkModeProvider>
      </ ColorBlindProvider>
    </ReducedMotionProvider>
  );
};

const MainApp: React.FC = () => {
  const { isReducedMotion, isReadableFont } = useReducedMotion();

  return (
    <>
      <GlobalStyle
        $isReducedMotion={isReducedMotion}
        $isReadableFont={isReadableFont}
      />
      <ZohebHasan />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle<{
  $isReducedMotion: boolean;
  $isReadableFont: boolean;
}>`
  body {
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ $isReadableFont }) =>
    $isReadableFont
      ? "'Atkinson Hyperlegible', Arial, sans-serif"
      : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"};
    transition: ${({ $isReducedMotion }) =>
    $isReducedMotion ? 'none' : 'background-color 0.3s, color 0.3s'};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    transition: ${({ $isReducedMotion }) =>
    $isReducedMotion ? 'none !important' : 'all 0.3s ease'};
    animation: ${({ $isReducedMotion }) =>
    $isReducedMotion ? 'none !important' : 'initial'};
    scroll-behavior: ${({ $isReducedMotion }) =>
    $isReducedMotion ? 'auto' : 'smooth'};
  }

  a {
    color: ${({ theme }) => theme.otherColor};
  }

  ::selection {
    background: ${({ theme }) => theme.otherColor};
    color: ${({ theme }) => theme.bodyBackgroundColor};
  }

  button {
    border: 1px solid ${({ theme }) => theme.otherColor};
    color: ${({ theme }) => theme.textColor};
  }
`;