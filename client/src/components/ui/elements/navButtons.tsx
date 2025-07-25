import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';
import { useScroll } from '../../../contexts/scroll';

import Text from './text';

const NavigationButtons: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const { scrollTo, projectsRef, aboutRef, contactRef } = useScroll();

  const handleClick = (label: string) => {
    switch (label) {
      case 'Projects':
        scrollTo(projectsRef);
        break;
      case 'About':
        scrollTo(aboutRef);
        break;
      case 'Contact':
        scrollTo(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <ButtonsContainer>
      {["Projects", "About", "Contact"].map((label) => (
        <ButtonContainer key={label}>
          <StyledLink
            $isDarkMode={isDarkMode}
            onClick={() => handleClick(label)}
          >
            {label}
          </StyledLink>
        </ButtonContainer>
      ))}
    </ButtonsContainer>
  );
};

export default NavigationButtons;

// Styled Components

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  position: relative;
  z-index: 5;
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