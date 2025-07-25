import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../contexts/darkMode';
import SidebarContainer from '../ui/templetes/sideBarContainer';

import Text from '../ui/elements/text';
import Toggle from '../ui/elements/toggle';

import ColorBlindnessDropDown from '../ui/elements/colorBlindnessDropdown';

import TextSizeDial from '../ui/elements/textSizeDial';

import DarkModeDropDown from '../ui/elements/darkModeDropdown';

import { useReducedMotion } from '../../contexts/reducedMotionContext';

import { useScroll } from '../../contexts/scroll';



const Sidebar: React.FC = () => {
    const { isDarkMode, isHighContrast, toggleContrast } = useDarkMode();
    const { resetToDefault: resetDarkMode } = useDarkMode();
    const { resetToDefault: resetReducedMotion } = useReducedMotion();

    const resetAllAccessibilitySettings = () => {
        resetDarkMode();
        resetReducedMotion();
    };
    const { isReducedMotion, toggleReducedMotion, isReadableFont, toggleReadableFont } = useReducedMotion();

    const [isDarkModeInfoVisible, setDarkModeInfoVisible] = useState(false);
    const [isHighContrastInfoVisible, setHighContrastInfoVisible] = useState(false);
    const [isReducedMotionInfoVisible, setReducedMotionInfoVisible] = useState(false);
    const [isReadableFontInfoVisible, setReadableFontInfoVisible] = useState(false);
    const [isColorBlindnessInfoVisible, setColorBlindnessInfoVisible] = useState(false);
    const [isTextSizeInfoVisible, setTextSizeInfoVisible] = useState(false);

    const toggleDarkModeInfo = () => setDarkModeInfoVisible(prev => !prev);
    const toggleHighContrastInfo = () => setHighContrastInfoVisible(prev => !prev);
    const toggleReducedMotionInfo = () => setReducedMotionInfoVisible(prev => !prev);
    const toggleReadableFontInfo = () => setReadableFontInfoVisible(prev => !prev);
    const toggleColorBlindnessInfo = () => setColorBlindnessInfoVisible(prev => !prev);
    const toggleTextSizeInfo = () => setTextSizeInfoVisible(prev => !prev);
    const { scrollTo, projectsRef, aboutRef, contactRef, showStickyButtons } = useScroll();
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const InfoDark = "https://zohebhasan.com/assets/infoDark.webp";
    const InfoLight = "https://zohebhasan.com/assets/infoLight.webp";

    const MinimizeDark = "https://zohebhasan.com/assets/minimizeDark.webp";
    const MinimizeLight = "https://zohebhasan.com/assets/minimizeLight.webp";

    const AccessibilityDark = "https://zohebhasan.com/assets/accessibilityDark.webp";
    const AccessibilityLight = "https://zohebhasan.com/assets/accessibilityLight.webp";

    const RightDark = "https://zohebhasan.com/assets/rightCircleDark.webp";
    const RightLight = "https://zohebhasan.com/assets/rightCircleLight.webp";

    const NavDark = "https://zohebhasan.com/assets/navDark.webp";
    const NavLight = "https://zohebhasan.com/assets/navLight.webp";

    return (
        <SidebarContainer>
            <SideBarWrapper>
                {showStickyButtons && isMobile && (
                    <>
                        <TitleContainer>
                            <AccessibilityIcon src={isDarkMode ? NavDark : NavLight} />
                            <Text size={"2rem"} variant={"normal"} fontWeight="300">
                                Navigation
                            </Text>
                        </TitleContainer>
                        <SettingsList>
                            <Setting>
                                <Top>
                                    <Left>
                                        <StyledLink
                                            $isDarkMode={isDarkMode}
                                            onClick={() => scrollTo(projectsRef)}
                                        >
                                            <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                                Projects
                                            </Text>
                                        </StyledLink>
                                    </Left>
                                </Top>
                            </Setting>
                            <Setting>
                                <Top>
                                    <Left>
                                        <StyledLink
                                            $isDarkMode={isDarkMode}
                                            onClick={() => scrollTo(aboutRef)}
                                        >
                                            <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                                About
                                            </Text>
                                        </StyledLink>
                                    </Left>
                                </Top>
                            </Setting>
                            <Setting>
                                <Top>
                                    <Left>
                                        <StyledLink
                                            $isDarkMode={isDarkMode}
                                            onClick={() => scrollTo(contactRef)}
                                        >
                                            <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                                Contact
                                            </Text>
                                        </StyledLink>
                                    </Left>
                                </Top>
                            </Setting>
                        </SettingsList>
                    </>
                )}
                <TitleContainer>
                    <AccessibilityIcon src={isDarkMode ? AccessibilityDark : AccessibilityLight} />
                    <Text size={"2rem"} variant={"normal"} fontWeight="300">
                        Accessibility settings
                    </Text>
                </TitleContainer>
                <SettingsList>
                    <Setting>
                        <Top>
                            <Left>
                                <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                    Dark Mode
                                </Text>
                                <InfoButtonContainer onClick={toggleDarkModeInfo}>
                                    <InfoIcon src={isDarkModeInfoVisible ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <DarkModeDropDown />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={isDarkModeInfoVisible}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Reduces screen brightness by using darker colors to ease eye strain.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                    <Setting>
                        <Top>
                            <Left>
                                <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                    High contrast mode
                                </Text>
                                <InfoButtonContainer onClick={toggleHighContrastInfo}>
                                    <InfoIcon src={isHighContrastInfoVisible ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <Toggle isOn={isHighContrast} toggleOn={toggleContrast} />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={isHighContrastInfoVisible}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Boosts the difference between text and background for better readability.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                    <Setting>
                        <Top>
                            <Left>
                                <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                    Reduced Motion
                                </Text>
                                <InfoButtonContainer onClick={toggleReducedMotionInfo}>
                                    <InfoIcon src={isReducedMotionInfoVisible ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <Toggle isOn={isReducedMotion} toggleOn={toggleReducedMotion} />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={isReducedMotionInfoVisible}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Disables animations and transitions for motion-sensitive users.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                    <Setting>
                        <Top>
                            <Left>
                                <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                    Readable fonts mode
                                </Text>
                                <InfoButtonContainer onClick={toggleReadableFontInfo}>
                                    <InfoIcon src={isReadableFontInfoVisible ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <Toggle isOn={isReadableFont} toggleOn={toggleReadableFont} />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={isReadableFontInfoVisible}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Uses cleaner, high-legibility fonts for easier reading.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                    <Setting>
                        <Top>
                            <Left>
                                <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                    Color blindness filters
                                </Text>
                                <InfoButtonContainer onClick={toggleColorBlindnessInfo}>
                                    <InfoIcon src={isColorBlindnessInfoVisible ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <ColorBlindnessDropDown />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={isColorBlindnessInfoVisible}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Applies visual filters to support different types of color blindness.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                    <Setting>
                        <Top>
                            <Left>
                                <Text size={"1.2rem"} variant={"transparent"} fontWeight="300">
                                    Text size adjustment
                                </Text>
                                <InfoButtonContainer onClick={toggleTextSizeInfo}>
                                    <InfoIcon src={isTextSizeInfoVisible ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <TextSizeDial />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={isTextSizeInfoVisible}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Lets you increase or decrease the text size for better visibility.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                    <Setting>
                        <ResetButtonWrapper>


                            <ResetButton $isDarkMode={isDarkMode} onClick={resetAllAccessibilitySettings}>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight="300">
                                    Reset to default
                                </Text>

                                <Icon src={isDarkMode ? RightDark : RightLight} />
                            </ResetButton>
                        </ResetButtonWrapper>
                    </Setting>
                </SettingsList>
            </SideBarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

const StyledLink = styled.div<{ $isDarkMode: boolean }>`
  cursor: pointer;
  /* color: ${({ $isDarkMode }) => ($isDarkMode ? '#bbbbbb' : '#555555')}; */
  /* font-size: 0.9rem;
  font-weight: 400; */
  transition: transform 0.2s, color 0.2s;
  margin-bottom: 1rem;


  &:hover {
    transform: scale(1.05);
    /* color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')}; */
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ResetButtonWrapper = styled.div`
    display: flex;
`
const ResetButton = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
    opacity: 1;
  }
`;

const Icon = styled.img`
    width: 1.3rem;
`

const AccessibilityIcon = styled.img`
  width: 3rem;
  @media (max-width: 768px) {
     width: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  /* background-color: blue; */
`;

const InfoIcon = styled.img`
  width: 1rem;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
     width: 0.7rem;
  }
`;

const Info = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 0.7 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  max-height: ${({ $visible }) => ($visible ? '100px' : '0px')};
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;
  width: 80%;
`;

const InfoButtonContainer = styled.div`
  cursor: pointer;
`;

const Bottom = styled.div`
background-color: black;
/* width: 100%;; */
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: green; */
`;


const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-right: 2rem;
 @media (max-width: 768px) {
      padding-right: 1rem; 
      margin-right: 0rem;
  }
  /* background-color: blue; */
`;

const Right = styled.div``;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  /* background-color: green; */
`;

const Setting = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
   @media (max-width: 768px) {
     width: 100%;
     /* align-items: center; */
  }
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  /* margin-bottom: 5rem; */
  /* background-color: orange; */
`;

const SideBarWrapper = styled.div`
  display: flex;
  /* background-color: pink; */
  flex-direction: column;
  /* align-items: center; */
  overflow-y: auto;
  width: 60%;
  min-height: 100vh;
  margin-top: 4rem;
  padding-top: 2rem; 
  @media (max-width: 768px) {
     width: 80%;
  }
  /* margin-bottom: 5rem; */
`;