import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import ZohebHasan from '../main/zohebhasan';
import { DarkModeProvider } from '../contexts/darkMode';





const App: React.FC = () => {
  return (
    <>
          <DarkModeProvider>
              <GlobalStyle />
              <ZohebHasan/>
          </DarkModeProvider>


    </>
  );
};

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    color: ${(props) => props.theme.textColor};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    transition: background-color 0.3s;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
  }
  p, a {
    margin: 0;
    padding: 0;
  }
`;