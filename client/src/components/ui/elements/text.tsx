import React from 'react';
import styled, { css } from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';
import { useReducedMotion } from '../../../contexts/reducedMotionContext';

interface TextProps {
  variant?: 'transparent' | 'normal' | 'personal' | 'school' | 'professional' | 'gradient';
  size: string;
  fontWeight: string;
  children: React.ReactNode;
  hasUnderline?: boolean;
}

const Text: React.FC<TextProps> = ({ variant, size, children, fontWeight, hasUnderline }) => {
  const { isDarkMode, isHighContrast, activeColor } = useDarkMode();
  const { dialValue } = useReducedMotion();

  const numericSize = parseFloat(size.replace('rem', ''));
  const adjustedSize = `${(numericSize * (1 + dialValue)).toFixed(3)}rem`;

  return (
    <StyledText
      $variant={variant}
      $size={adjustedSize}
      $isDarkMode={isDarkMode}
      $isHighContrast={isHighContrast}
      $activeColor={activeColor}
      $fontWeight={fontWeight}
      $hasUnderline={hasUnderline}
    >
      {children}
    </StyledText>
  );
};

export default Text;

interface StyledTextProps {
  $variant?: TextProps['variant'];
  $size: string;
  $isDarkMode: boolean;
  $isHighContrast: boolean;
  $activeColor: string;
  $fontWeight: string;
  $hasUnderline?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
  display: inline;
  font-size: ${({ $size }) => $size};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-decoration: ${({ $hasUnderline }) => ($hasUnderline ? 'underline' : 'none')};

  @media (max-width: 1280px) {
    font-size: ${({ $size }) => `calc(${$size} * 0.65)`};
  }

  ${({ $variant, $isDarkMode, $isHighContrast, $activeColor }) => {
    if ($isHighContrast) {
      return css`
        color: yellow !important;
        background: none !important;
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
      `;
    }

    if ($activeColor !== 'default') {
      const overrideColor =
        $activeColor === 'protanopia'
          ? '#b58900'
          : $activeColor === 'deuteranopia'
          ? '#268bd2'
          : $activeColor === 'tritanopia'
          ? '#d08770'
          : $isDarkMode
          ? 'white'
          : 'black';

      return css`
        color: ${overrideColor} !important;
        background: none !important;
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
      `;
    }

    switch ($variant) {
      case 'transparent':
        return css`
          color: ${$isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'};
        `;
      case 'normal':
        return css`
          color: ${$isDarkMode ? 'white' : 'black'};
        `;
      case 'gradient':
        return css`
          color: transparent;
          background: ${$isDarkMode
            ? 'linear-gradient(to right, #3944a4, #e15782)'
            : 'linear-gradient(to right, #662D8C, #ED1E79)'};
          -webkit-background-clip: text;
          background-clip: text;
        `;
      case 'personal':
        return css`
          color: transparent;
          background: linear-gradient(to right, #662D8C, #ED1E79);
          -webkit-background-clip: text;
          background-clip: text;
        `;
      case 'professional':
        return css`
          color: transparent;
          background: linear-gradient(to right, #2E3192, #1BFFFF);
          -webkit-background-clip: text;
          background-clip: text;
        `;
      case 'school':
        return css`
          color: transparent;
          background: linear-gradient(to right, #EA8D8D, #A890FE);
          -webkit-background-clip: text;
          background-clip: text;
        `;
      default:
        return css``;
    }
  }}
`;

// ----------- ADD THIS: Span component for internal styling -----------

export const Span = styled.span<{
  $variant?: TextProps['variant'];
  $fontWeight?: string;
  $isDarkMode: boolean;
}>`
  font-weight: ${({ $fontWeight }) => $fontWeight || '400'};

  ${({ $variant, $isDarkMode }) => {
    switch ($variant) {
      case 'transparent':
        return `
          color: ${$isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'};
        `;
      case 'normal':
        return `
          color: ${$isDarkMode ? 'white' : 'black'};
        `;
      case 'personal':
        return `
          color: transparent;
          background: linear-gradient(to right, #662D8C, #ED1E79);
          -webkit-background-clip: text;
          background-clip: text;
        `;
      // Add more cases if needed
      default:
        return '';
    }
  }}
`;