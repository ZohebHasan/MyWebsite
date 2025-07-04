import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';

import IPFragLight from "../../assets/ipFragLight.png";
import IPFragDark from "../../assets/ipFragDark.png";
import Md5Light from "../../assets/md5Light.png";
import Md5Dark from "../../assets/md5Dark.png";
import PPMLight from "../../assets/ppmLight.png";
import PPMDark from "../../assets/ppmDark.png";
import EnigmaLight from "../../assets/enigmaLight.png";
import EnigmaDark from "../../assets/enigmaDark.png";
import FakeStackDark from "../../assets/fakeStackDark.png";
import FakeStackLight from "../../assets/fakeStackLight.png";
import PromptCraftLight from "../../assets/promptCraftLight.png";
import PromptCraftDark from "../../assets/promptCraftDark.png";

import PrevLight from '../../assets/prevLight.png';
import PrevDark from '../../assets/prevDark.png';
import NextLight from '../../assets/nextLight.png';
import NextDark from '../../assets/nextDark.png';

const media = [
    { light: PromptCraftLight, dark: PromptCraftDark },
    { light: IPFragLight, dark: IPFragDark },
    { light: FakeStackLight, dark: FakeStackDark },
    { light: Md5Light, dark: Md5Dark },
    { light: PPMLight, dark: PPMDark },
    { light: EnigmaLight, dark: EnigmaDark }
];

interface ProjectPhotoSliderProps {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectPhotoSlider: React.FC<ProjectPhotoSliderProps> = ({ index, setIndex }) => {
    const { isDarkMode } = useDarkMode();
    const direction: 'left' | 'right' = index > 0 ? 'right' : 'left';

    const handlePreviousMedia = () => {
        if (index > 0) setIndex(index - 1);
    };

    const handleNextMedia = () => {
        if (index < media.length - 1) setIndex(index + 1);
    };

    const currentImageSrc = isDarkMode ? media[index].dark : media[index].light;

    return (
        <MediaScrollerContainer>
            <MediaContainer>
                {index > 0 && (
                    <NavigationButtonLeft onClick={handlePreviousMedia} $isDarkMode={isDarkMode}>
                        <NavigationIcon src={isDarkMode ? PrevDark : PrevLight} alt="Previous" />
                    </NavigationButtonLeft>
                )}

                <MediaWrapper key={index} direction={direction}>
                    <CurrentImage src={currentImageSrc} alt="Current Slide" />
                </MediaWrapper>

                {index < media.length - 1 && (
                    <NavigationButtonRight onClick={handleNextMedia} $isDarkMode={isDarkMode}>
                        <NavigationIcon src={isDarkMode ? NextDark : NextLight} alt="Next" />
                    </NavigationButtonRight>
                )}

                <DotsIndicatorContainer>
                    {media.map((_, i) => (
                        <Dot
                            key={i}
                            $isDarkMode={isDarkMode}
                            isActive={i === index}
                        />
                    ))}
                </DotsIndicatorContainer>
            </MediaContainer>
        </MediaScrollerContainer>
    );
};

export default ProjectPhotoSlider;


const hoverScale = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const clickScale = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;


const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-30%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(30%);
  }
  100% {
    transform: translateX(0);
  }
`;

const MediaScrollerContainer = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 1rem;
  /* background-color: pink; */
`;

const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100%; */
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const MediaWrapper = styled.div<{ direction: 'left' | 'right' }>`
  position: relative;
  width: 100%;
  aspect-ratio: 17/9;
  border-radius: 1rem;
  border: 1px solid #ff00ff1b;
  box-shadow: 0 0 2px #ff00ff2b;
  animation: ${fadeIn} 0.5s ease;
`;

const CurrentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
    border-radius: 1rem;
`;



const NavigationButton = styled.button<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'rgba(194, 194, 194, 0.778)' : 'rgba(200, 200, 200, 0.5)')};
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;

  &:hover {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'rgba(201, 201, 201, 0.843)' : 'rgba(131, 131, 131, 0.7)')};
    animation: ${hoverScale} 0.2s forwards;
  }

  &:active {
    animation: ${clickScale} 0.2s forwards;
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'rgba(187, 187, 187, 0.876)' : 'rgba(79, 79, 79, 0.7)')};
  }
`;

const NavigationButtonLeft = styled(NavigationButton)`
  left: 1rem;
`;

const NavigationButtonRight = styled(NavigationButton)`
  right: 1rem;
`;

const NavigationIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const DotsIndicatorContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1; 
`;

const Dot = styled.div<{ isActive: boolean; $isDarkMode: boolean }>`
  width: ${({ isActive }) => (isActive ? '0.6rem' : '0.3rem')};
  height: ${({ isActive }) => (isActive ? '0.6rem' : '0.3rem')};
  background-color: ${({ isActive, $isDarkMode }) => (isActive ? ($isDarkMode ? '#e6e6e6f6' : '#2727279e') : ($isDarkMode ? '#e7e7e7' : '#e6e6e6;'))};
  border-radius: 50%;
  transition: all 0.5s ease;
`;
