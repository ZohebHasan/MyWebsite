import React from 'react';
import styled from 'styled-components';

import SelectLogo from "./buttonLogo";
import Text from './text';

import SelectedDark from "../../assets/selectedDark.png";
import SelectedLight from "../../assets/selectedLight.png";
import NotSelectedLight from "../../assets/notSelectedLight.png";
import NotSelectedDark from "../../assets/notSelectedDark.png";



import { useDarkMode } from '../../../contexts/darkMode';
import { ColorMode, useAccessibility } from '../../../contexts/accessibility';

const DarkModeOptions: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const { handleColorModeChange, isProtanopia, isDeuteranopia, isTritanopia } = useAccessibility();



  const colorTypes: ColorMode[] = ['protanopia', 'deuteranopia', 'tritanopia'];

  return (
    <>
      {colorTypes.map((type) => {
        const isActive =
          (type === 'protanopia' && isProtanopia) ||
          (type === 'deuteranopia' && isDeuteranopia) ||
          (type === 'tritanopia' && isTritanopia);

        return (
          <ButtonLink
            key={type}
            $isDarkMode={isDarkMode}
            onClick={() => handleColorModeChange(type)}
          >
            <ButtonContainer $isDarkMode={isDarkMode}>
              <TextContainer>
                <Text size={"0.8rem"} variant={"transparent"} fontWeight="500">
                  System (Default)
                </Text>
                {/* <ColorBox /> */}
              </TextContainer>
              <SelectLogoContainer>
                <SelectLogo
                  darkModeLogo={NotSelectedDark}
                  lightModeLogo={NotSelectedLight}
                  activeDarkLogo={SelectedDark}
                  activeLightLogo={SelectedLight}
                  isActive={isActive}
                  size={0.8}
                />
              </SelectLogoContainer>
            </ButtonContainer>

          </ButtonLink>
        );
      })}
    </>
  );
};

export default DarkModeOptions;

const ColorBox = styled.div`
    height: 0.8rem;
    width: 0.8rem;
    background-color: red;
    border-radius: 0.2rem;
`

const SelectLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    flex: 1;
`;

const TextContainer = styled.div`
  /* background-color: blue; */
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const ButtonContainer = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;;
  /* background-color:orange; */
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  margin: 0.3rem 0.3rem; 
  border-radius: 0.5rem;
  transition: transform 0.2s ease-in-out, color 0.3s, opacity 0.3s ease-in-out;
  &:hover {
      color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
      background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#6c6c6c' : '#a2a2a2')};
      transition: color 0.3s, background-color 0.3s, opacity 0.3s ease-in-out;
      opacity: 0.8;
      transform: scale(1.05); 
  }
  &:active {
      background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#919191' : '#595858')};
      transition: color 0.2s, background-color 0.2s;
      transform: scale(1.00);
  } 
`

const ButtonLink = styled.div<{ $isDarkMode: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

