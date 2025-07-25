import React from 'react';
import styled from 'styled-components';

import DropDownButton from "./dropDownButtonDark";
import { useDarkMode } from '../../../contexts/darkMode';
import Text from './text';
import DarkModeBar from './darkModeOptionBar';


const DarkModeDropDown: React.FC = () => {
    const { isDarkMode, activeMode } = useDarkMode();

    const SystemDark = "https://zohebhasan.com/assets/settingDark.webp";
    const SystemLight = "https://zohebhasan.com/assets/settingLight.webp";

    const SunDark = "https://zohebhasan.com/assets/sunDark.webp";
    const SunLight = "https://zohebhasan.com/assets/sunLight.webp";

    const MoonDark = "https://zohebhasan.com/assets/moonDark.webp";
    const MoonLight = "https://zohebhasan.com/assets/moonLight.webp";

    const getLabelAndIcon = (): { label: string; icon: string } => {
        switch (activeMode) {
            case 'dark':
                return {
                    label: 'Dark',
                    icon: isDarkMode ? MoonDark : MoonLight,
                };
            case 'light':
                return {
                    label: 'Light',
                    icon: isDarkMode ? SunDark : SunLight,
                };
            case 'system':
            default:
                return {
                    label: 'System',
                    icon: isDarkMode ? SystemDark : SystemLight,
                };
        }
    };

    const { label, icon } = getLabelAndIcon();

    return (
        <UserProfileContainer>
            <DarkModeBar />
            <ProfilesContainer $isDarkMode={isDarkMode}>
                <OptionContainer>
                    <Text size={"0.8rem"} variant={"transparent"} fontWeight="500">
                        {label}
                    </Text>
                    <Icon src={icon} />
                </OptionContainer>
                <DropDownButton />
            </ProfilesContainer>
        </UserProfileContainer>
    );
};

export default DarkModeDropDown;

// Styled components
const Icon = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    opacity: 0.7;
    @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;

  }
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 100%;
    min-width: 4.5rem; // ✅ Add this (adjust as needed)
    @media (max-width: 768px) {
    min-width: 3.5rem;
  }
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
    z-index: 7;
    padding: 0 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-radius: 0.5rem;
    background-color: ${({ $isDarkMode }) =>
        $isDarkMode ? 'rgba(33, 33, 33, 0.9)' : 'rgba(255, 255, 255, 0.9)'};

        /* background-color: red;; */
`;