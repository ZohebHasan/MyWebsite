import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';

import LoginDark from '../../assets/loginDark.png';
import LoginLight from '../../assets/loginLight.png';

import SignupWaysDark from '../../assets/signupWaysDark.png';
import SignupWaysLight from '../../assets/signupWaysLight.png';

import DOBLight from '../../assets/dobLight.png';
import DOBDark from '../../assets/dobDark.png';

import UserInfoDark from '../../assets/userInfoDark.png';
import UserInfoLight from '../../assets/userInfoLight.png';

import VerificationLight from '../../assets/verificationLight.png';
import VerificationDark from '../../assets/verificationDark.png';

import FeaturesDark from '../../assets/featuresDark.png';
import FeaturesLight from '../../assets/featuresLight.png';

import ProfilesDark from '../../assets/profilesDark.png';
import ProfilesLight from '../../assets/profilesLight.png';

import FeedDark from '../../assets/feedDark.png';
import FeedLight from '../../assets/feedLight.png';

import CreatePostDark from "../../assets/createPostDark.png"
import CreatePostLight from "../../assets/createPostLight.png"

import Optionsdark from '../../assets/optionsDark.png';
import OptionsLight from '../../assets/optionsLight.png';

import ProfileOptionsDark from '../../assets/profileOptionsDark.png';
import ProfileOptionsLight from '../../assets/profileOptionsLight.png';

import PostFilterDark from '../../assets/postFilterDark.png';
import PostFilterLight from '../../assets/postFilterLight.png';

import PersonalDark from '../../assets/personalDark.png';
import PersonalLight from '../../assets/personalLight.png';

import ProfessionalDark from '../../assets/professionalDark.png';
import ProfessionalLight from '../../assets/professionalLight.png';

import SchoolDark from '../../assets/schoolDark.png';
import SchoolLight from '../../assets/schoolLight.png';

import CreateCourseOneDark from '../../assets/createCourseOneDark.png';
import CreateCourseOneLight from '../../assets/createCourseOneLight.png';

import CreateCourseTwoDark from '../../assets/createCourseTwoDark.png';
import CreateCourseTwoLight from '../../assets/createCourseTwoLight.png';


import PrevLight from '../../assets/prevLight.png';
import PrevDark from '../../assets/prevDark.png';

import NextLight from '../../assets/nextLight.png';
import NextDark from '../../assets/nextDark.png';



const media = [
  { light: LoginLight, dark: LoginDark },
  { light: SignupWaysLight, dark: SignupWaysDark },
  { light: DOBLight, dark: DOBDark },
  { light: UserInfoLight, dark: UserInfoDark },
  { light: VerificationLight, dark: VerificationDark },
  { light: FeaturesDark, dark:  FeaturesLight},
  { light: ProfilesDark, dark:  ProfilesLight},
  { light: FeedLight, dark: FeedDark },
  { light: CreatePostLight, dark: CreatePostDark },
  { light: OptionsLight, dark: Optionsdark },
  { light: ProfileOptionsLight, dark: ProfileOptionsDark },
  { light: PostFilterLight, dark: PostFilterDark },
  { light: PersonalLight, dark: PersonalDark },
  { light: ProfessionalLight, dark: ProfessionalDark },
  { light: SchoolLight, dark: SchoolDark },
  { light: CreateCourseOneLight, dark: CreateCourseOneDark },
  { light: CreateCourseTwoLight, dark: CreateCourseTwoDark }
];

const MediaScroller: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePreviousMedia = () => {
    if (currentMediaIndex > 0) {
      setDirection('left');
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const handleNextMedia = () => {
    if (currentMediaIndex < media.length - 1) {
      setDirection('right');
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const currentImageSrc = isDarkMode
    ? media[currentMediaIndex].dark
    : media[currentMediaIndex].light;

  return (
    <MediaScrollerContainer>
      <MediaContainer>
        {currentMediaIndex > 0 && (
          <NavigationButtonLeft onClick={handlePreviousMedia} $isDarkMode={isDarkMode}>
            <NavigationIcon src={isDarkMode ? PrevDark : PrevLight} alt="Previous" />
          </NavigationButtonLeft>
        )}

        <MediaWrapper key={currentMediaIndex} direction={direction}>
          <CurrentImage src={currentImageSrc} alt="Current Slide" />
        </MediaWrapper>

        {currentMediaIndex < media.length - 1 && (
          <NavigationButtonRight onClick={handleNextMedia} $isDarkMode={isDarkMode}>
            <NavigationIcon src={isDarkMode ? NextDark : NextLight} alt="Next" />
          </NavigationButtonRight>
        )}

        <DotsIndicatorContainer>
          {media.map((_, index) => (
            <Dot
              key={index}
              $isDarkMode={isDarkMode}
              isActive={index === currentMediaIndex}
            />
          ))}
        </DotsIndicatorContainer>
      </MediaContainer>
    </MediaScrollerContainer>
  );
};

export default MediaScroller;


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
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(10%);
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

const MediaWrapper = styled.div<{ direction: 'left' | 'right' }>`
  position: relative;
  width: 100%;
  aspect-ratio: 17/9;
    border-radius: 1rem;
  border: 1px solid #ff00ff1b;
  box-shadow: 0 0 2px #ff00ff2b;
  animation: ${({ direction }) => (direction === 'left' ? slideInFromLeft : slideInFromRight)} 0.5s ease;
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
