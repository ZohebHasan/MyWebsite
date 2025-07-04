import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';

const NavigationButtons: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ButtonsContainer>
      {["Projects", "About", "Contact"].map((label) => (
        <ButtonContainer key={label}>
          <StyledLink $isDarkMode={isDarkMode}>{label}</StyledLink>
        </ButtonContainer>
      ))}
    </ButtonsContainer>
  );
};

export default NavigationButtons;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  /* background-color: blue; */
  width: 100%;
  /* flex: 1; */
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.p<{ $isDarkMode: boolean }>`
  cursor: pointer;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#bbbbbb' : '#555555')};
  font-size: 0.9rem;
  font-weight: 400;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.05);
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
  }

  &:active {
    transform: scale(0.95);
  }
`;