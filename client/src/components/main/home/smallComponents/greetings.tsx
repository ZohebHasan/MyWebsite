import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDarkMode } from '../../../../contexts/darkMode';

const GreetingText: React.FC = () => {
  const [greeting, setGreeting] = useState<string>('Greetings');
  const [opacity, setOpacity] = useState<number>(1);
  const { isDarkMode, isHighContrast, activeColor } = useDarkMode();

  useEffect(() => {
    let index = 0;
    const greetings: string[] = [
      'Hallo', 'Greetings', 'অভিবাদন', 'سلام', 'Hola', '你好', 'नमस्ते', '안녕하세요','Здравствуйте', 'こんにちは', 'Merhaba',
      'Oi', 
       'سلام',
      'Salut', 'Ciao', 'สวัสดี', 'Xin chào',  'Selamat',
    ];

    const updateGreeting = () => {
      setOpacity(0);
      setTimeout(() => {
        index = (index + 1) % greetings.length;
        setGreeting(greetings[index]);
        setOpacity(1);
      }, 1000);
    };

    const intervalId = setInterval(updateGreeting, 2200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <GreetingMessage
      $isDarkMode={isDarkMode}
      $isHighContrast={isHighContrast}
      $activeColor={activeColor}
      opacity={opacity}
    >
      {greeting}
    </GreetingMessage>
  );
};

export default GreetingText;

interface GreetingMessageProps {
  $isDarkMode: boolean;
  $isHighContrast: boolean;
  $activeColor: string;
  opacity: number;
}

const GreetingMessage = styled.h1<GreetingMessageProps>`
  flex: 0 0 auto;
  align-self: flex-start;
  font-size: 2.5rem;
  height: 4rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  font-weight: 300;
  @media (max-width: 1280px) {
    font-size: 2rem;
  }

  ${({ $isDarkMode, $isHighContrast, $activeColor }) => {
    if ($isHighContrast) {
      return css`
        color: yellow !important;
        background: none !important;
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
      `;
    }

    if ($activeColor !== 'default') {
      const colorMap: Record<string, string> = {
        protanopia: '#b58900',
        deuteranopia: '#268bd2',
        tritanopia: '#d08770',
      };
      return css`
        color: ${colorMap[$activeColor] || 'black'} !important;
        background: none !important;
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
      `;
    }

    return css`
      color: transparent;
      background: ${$isDarkMode
        ? 'linear-gradient(to right, #662D8C, #ED1E79)'
        : 'linear-gradient(to right, #662D8C, #ED1E79)'};
      -webkit-background-clip: text;
      background-clip: text;
    `;
  }}

  text-align: left;
  white-space: nowrap;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.5s ease-in-out, background-color 0.1s ease-in-out;
  position: relative;
  z-index: 5;
`;