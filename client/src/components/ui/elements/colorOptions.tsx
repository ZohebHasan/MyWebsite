import React from 'react';
import styled from 'styled-components';
import Text from './text';

import { useColorBlind, ColorMode } from '../../../contexts/colorBlind';
import { useDarkMode } from '../../../contexts/darkMode';

const colorTypes: ColorMode[] = ['default', 'protanopia', 'deuteranopia', 'tritanopia'];

const getLabel = (mode: ColorMode): string => {
  switch (mode) {
    case 'protanopia':
      return 'Protanopia';
    case 'deuteranopia':
      return 'Deuteranopia';
    case 'tritanopia':
      return 'Tritanopia';
    case 'default':
    default:
      return 'Default';
  }
};

const getBoxColor = (mode: ColorMode): string => {
  switch (mode) {
    case 'protanopia':
      return '#FF9999';
    case 'deuteranopia':
      return '#66CC99';
    case 'tritanopia':
      return '#6699FF';
    case 'default':
    default:
      return '#999999';
  }
};

const ColorBlindModeOptions: React.FC = () => {
  const { isDarkMode, activeColor, handleColorModeChange} = useDarkMode();


  return (
    <>
      {colorTypes.map((type) => {
        const label = getLabel(type);
        const isActive = activeColor === type;
        const color = getBoxColor(type);

        return (
          <ButtonLink
            key={type}
            $isDarkMode={isDarkMode}
            onClick={() => handleColorModeChange(type)}
          >
            <ButtonContainer $isDarkMode={isDarkMode} $isActive={isActive}>
              <OptionContainer>
                <TextContainer>
                  <Text size={"0.8rem"} variant={"transparent"} fontWeight="500">
                    {label}
                  </Text>
                </TextContainer>
                <IconContainer>
                  <ColorBox color={color} />
                </IconContainer>
              </OptionContainer>
            </ButtonContainer>
          </ButtonLink>
        );
      })}
    </>
  );
};

export default ColorBlindModeOptions;

const ButtonLink = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div<{ $isDarkMode: boolean; $isActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  margin: 0.3rem 0.3rem;
  border-radius: 0.5rem;
  background-color: ${({ $isDarkMode, $isActive }) =>
    $isActive ? ($isDarkMode ? '#6c6c6c' : '#a2a2a2') : 'transparent'};
  transition: transform 0.2s ease-in-out, color 0.3s, opacity 0.3s ease-in-out;

  &:hover {
    color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#6c6c6c' : '#a2a2a2')};
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#919191' : '#595858')};
    transform: scale(1.0);
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

const TextContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const ColorBox = styled.div<{ color: string }>`
  height: 0.8rem;
  width: 0.8rem;
  background-color: ${({ color }) => color};
  border-radius: 0.2rem;
`;
