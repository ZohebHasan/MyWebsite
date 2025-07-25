import React from 'react';
import styled from 'styled-components';

import DropDownButton from "./dropdownButtonColor";
import { useDarkMode } from '../../../contexts/darkMode';
import Text from './text';
import ColorOptionBar from './colorOptionBar';



const ColorBlindnessDropDown: React.FC = () => {
  const { isDarkMode ,activeColor } = useDarkMode();


  const getLabel = (): string => {
    switch (activeColor) {
      case 'protanopia':
        return 'Protanopia';
      case 'deuteranopia':
        return 'Deuteranopia';
      case 'tritanopia':
        return 'Tritanopia';
      default:
        return 'Default';
    }
  };

  const getBoxColor = (): string => {
    switch (activeColor) {
      case 'protanopia':
        return '#FF9999'; // reddish-safe
      case 'deuteranopia':
        return '#66CC99'; // green-safe
      case 'tritanopia':
        return '#6699FF'; // blue-safe
      default:
        return '#999999'; // neutral gray
    }
  };

  return (
    <UserProfileContainer>
      <ColorOptionBar />
      <ProfilesContainer $isDarkMode={isDarkMode}>
        <OptionContainer>
          <Text size="0.8rem" variant="transparent" fontWeight="500">
            {getLabel()}
          </Text>
          <ColorBox color={getBoxColor()} />
        </OptionContainer>
        <DropDownButton />
      </ProfilesContainer>
    </UserProfileContainer>
  );
};

export default ColorBlindnessDropDown;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;
  min-width: 7rem;
  @media (max-width: 768px) {
    min-width: 4rem;
  }
  width: 1.2rem;
    height: 1.2rem;
`;

const ColorBox = styled.div<{ color: string }>`
  height: 0.8rem;
  width: 0.8rem;
  background-color: ${({ color }) => color};
  border-radius: 0.2rem;
`;

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProfilesContainer = styled.div<{ $isDarkMode: boolean }>`
  position: relative;
  z-index: 5;
  padding: 0 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? 'rgba(33, 33, 33, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
`;