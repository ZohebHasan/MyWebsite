import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import ZohebHasan from '../main/zohebhasan';
import { DarkModeProvider } from '../contexts/darkMode';
import { SidebarProvider } from '../contexts/sidebar';
import { ScrollProvider } from '../contexts/scroll';
import { AccessibilityProvider } from '../contexts/accessibility';






const App: React.FC = () => {
  return (
    <>
      <AccessibilityProvider>
        <DarkModeProvider>
          <ScrollProvider>
            <SidebarProvider>
              <GlobalStyle />
              <ZohebHasan />
            </SidebarProvider>
          </ScrollProvider>
        </DarkModeProvider>
      </AccessibilityProvider>
    </>
  );
};

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    color: ${(props) => props.theme.textColor};
    /* margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    transition: background-color 0.3s;
    /* align-items: center;
    justify-content: center;
    overflow: auto; */
    
  }
  /* p, a {
    margin: 0;
    padding: 0;
  } */
`;