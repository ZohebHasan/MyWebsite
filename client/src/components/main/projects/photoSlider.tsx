import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';


const LoginDark = "https://zohebhasan.com/assets/loginDark.webp";
const LoginLight = "https://zohebhasan.com/assets/loginLight.webp";

const SignupWaysDark = "https://zohebhasan.com/assets/signupWaysDark.webp";
const SignupWaysLight = "https://zohebhasan.com/assets/signupWaysLight.webp";

const DOBLight = "https://zohebhasan.com/assets/dobLight.webp";
const DOBDark = "https://zohebhasan.com/assets/dobDark.webp";

const UserInfoDark = "https://zohebhasan.com/assets/userInfoDark.webp";
const UserInfoLight = "https://zohebhasan.com/assets/userInfoLight.webp";

const VerificationLight = "https://zohebhasan.com/assets/verificationLight.webp";
const VerificationDark = "https://zohebhasan.com/assets/verificationDark.webp";

const FeaturesDark = "https://zohebhasan.com/assets/featuresDark.webp";
const FeaturesLight = "https://zohebhasan.com/assets/featuresLight.webp";

const ProfilesDark = "https://zohebhasan.com/assets/profilesDark.webp";
const ProfilesLight = "https://zohebhasan.com/assets/profilesLight.webp";

const FeedDark = "https://zohebhasan.com/assets/feedDark.webp";
const FeedLight = "https://zohebhasan.com/assets/feedLight.webp";

const CreatePostDark = "https://zohebhasan.com/assets/createPostDark.webp";
const CreatePostLight = "https://zohebhasan.com/assets/createPostLight.webp";

const OptionsDark = "https://zohebhasan.com/assets/optionsDark.webp";
const OptionsLight = "https://zohebhasan.com/assets/optionsLight.webp";

const ProfileOptionsDark = "https://zohebhasan.com/assets/profileOptionsDark.webp";
const ProfileOptionsLight = "https://zohebhasan.com/assets/profileOptionsLight.webp";

const PostFilterDark = "https://zohebhasan.com/assets/postFilterDark.webp";
const PostFilterLight = "https://zohebhasan.com/assets/postFilterLight.webp";

const PersonalDark = "https://zohebhasan.com/assets/personalDark.webp";
const PersonalLight = "https://zohebhasan.com/assets/personalLight.webp";

const ProfessionalDark = "https://zohebhasan.com/assets/professionalDark.webp";
const ProfessionalLight = "https://zohebhasan.com/assets/professionalLight.webp";

const SchoolDark = "https://zohebhasan.com/assets/schoolDark.webp";
const SchoolLight = "https://zohebhasan.com/assets/schoolLight.webp";

const CreateCourseOneDark = "https://zohebhasan.com/assets/createCourseOneDark.webp";
const CreateCourseOneLight = "https://zohebhasan.com/assets/createCourseOneLight.webp";

const CreateCourseTwoDark = "https://zohebhasan.com/assets/createCourseTwoDark.webp";
const CreateCourseTwoLight = "https://zohebhasan.com/assets/createCourseTwoLight.webp";

const PrevLight = "https://zohebhasan.com/assets/prevLight.webp";
const PrevDark = "https://zohebhasan.com/assets/prevDark.webp";

const NextLight = "https://zohebhasan.com/assets/nextLight.webp";
const NextDark = "https://zohebhasan.com/assets/nextDark.webp";

const media = [
  { light: LoginLight, dark: LoginDark },
  { light: SignupWaysLight, dark: SignupWaysDark },
  { light: DOBLight, dark: DOBDark },
  { light: UserInfoLight, dark: UserInfoDark },
  { light: VerificationLight, dark: VerificationDark },
  { light: FeaturesDark, dark: FeaturesLight },
  { light: ProfilesDark, dark: ProfilesLight },
  { light: FeedLight, dark: FeedDark },
  { light: CreatePostLight, dark: CreatePostDark },
  { light: OptionsLight, dark: OptionsDark },
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
              $isActive={index === currentMediaIndex}
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

const Dot = styled.div<{ $isActive: boolean; $isDarkMode: boolean }>`
  width: ${({ $isActive }) => ($isActive ? '0.6rem' : '0.3rem')};
  height: ${({ $isActive }) => ($isActive ? '0.6rem' : '0.3rem')};
  background-color: ${({ $isActive, $isDarkMode }) => ($isActive ? ($isDarkMode ? '#e6e6e6f6' : '#2727279e') : ($isDarkMode ? '#e7e7e7' : '#e6e6e6;'))};
  border-radius: 50%;
  transition: all 0.5s ease;
`;
