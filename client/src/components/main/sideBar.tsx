import React, { useState } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../contexts/darkMode';
import SidebarContainer from '../ui/templetes/sideBarContainer';

import Text from '../ui/elements/text';
import Toggle from '../ui/elements/toggle';

import InfoDark from "../assets/infoDark.png";
import InfoLight from "../assets/infoLight.png";

import MinimizeDark from "../assets/minimizeDark.png";
import MinimizeLight from "../assets/minimizeLight.png";

import AccessibilityDark from "../assets/accessibilityDark.png";
import AccessibilityLight from "../assets/accessibilityLight.png";

import ColorBlindnessDropDown from '../ui/elements/colorBlindnessDropdown';
import ColorOptionBar from '../ui/elements/colorOptionBar';
import TextSizeDial from '../ui/elements/textSizeDial';

import DarkModeDropDown from '../ui/elements/darkModeDropdown';



const Sidebar: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const [on, setOn] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handleToggle = () => {
        setOn(prev => !prev);
    };

    const handleInfoToggle = () => {
        setShowInfo(prev => !prev);
    };

    return (
        <SidebarContainer>
            {/* <ColorOptionBar/> */}
            <SideBarWrapper>
                <TitleContainer>
                    <AccessibilityIcon src={isDarkMode ? AccessibilityDark : AccessibilityLight} />
                    <Text size={"3rem"} variant={"normal"} fontWeight="300">
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
                                <InfoButtonContainer onClick={handleInfoToggle}>
                                    <InfoIcon src={showInfo ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <DarkModeDropDown/>
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={showInfo}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Readable Fonts Mode switches the website’s font to a more
                                    legible, high-contrast typeface — such as Arial, Verdana, Lexend,
                                    or OpenDyslexic.
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
                                <InfoButtonContainer onClick={handleInfoToggle}>
                                    <InfoIcon src={showInfo ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <Toggle isOn={on} toggleOn={handleToggle} />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={showInfo}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Contrast Mode enhances the visual difference between text and background colors, making interface elements easier to distinguish.
                                    It’s especially helpful for users with low vision or color perception challenges.
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
                                <InfoButtonContainer onClick={handleInfoToggle}>
                                    <InfoIcon src={showInfo ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <Toggle isOn={on} toggleOn={handleToggle} />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={showInfo}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Contrast Mode enhances the visual difference between text and
                                    background colors, making interface elements easier to distinguish.
                                    It’s especially helpful for users with low vision or color perception
                                    challenges.
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
                                <InfoButtonContainer onClick={handleInfoToggle}>
                                    <InfoIcon src={showInfo ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <Toggle isOn={on} toggleOn={handleToggle} />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={showInfo}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Readable Fonts Mode switches the website’s font to a more
                                    legible, high-contrast typeface — such as Arial, Verdana, Lexend,
                                    or OpenDyslexic.
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
                                <InfoButtonContainer onClick={handleInfoToggle}>
                                    <InfoIcon src={showInfo ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <ColorBlindnessDropDown />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={showInfo}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Readable Fonts Mode switches the website’s font to a more
                                    legible, high-contrast typeface — such as Arial, Verdana, Lexend,
                                    or OpenDyslexic.
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
                                <InfoButtonContainer onClick={handleInfoToggle}>
                                    <InfoIcon src={showInfo ? isDarkMode ? MinimizeDark : MinimizeLight : isDarkMode ? InfoDark : InfoLight} />
                                </InfoButtonContainer>
                            </Left>
                            <ButtonContainer>
                                <TextSizeDial />
                            </ButtonContainer>
                        </Top>
                        <Bottom>
                            <Info $visible={showInfo}>
                                <Text size={"0.9rem"} variant={"transparent"} fontWeight="300">
                                    Readable Fonts Mode switches the website’s font to a more
                                    legible, high-contrast typeface — such as Arial, Verdana, Lexend,
                                    or OpenDyslexic.
                                </Text>
                            </Info>
                        </Bottom>
                    </Setting>
                </SettingsList>
            </SideBarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
const AccessibilityIcon = styled.img`
  width: 3rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
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

const Bottom = styled.div``;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-right: 2rem;
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
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 60%;
  min-height: 100vh;
  margin-top: 4rem;
  padding-top: 2rem;
`;