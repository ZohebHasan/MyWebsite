import React from 'react';
import styled from 'styled-components';
import Text from './text';

import { useDarkMode } from '../../../contexts/darkMode';

const modeOptions: ('system' | 'dark' | 'light')[] = ['system', 'dark', 'light'];

const DarkModeOptions: React.FC = () => {
  const {
    isDarkMode,
    isHighContrast,
    activeColor,
    activeMode,
    setActiveMode,
  } = useDarkMode();

  const SystemDark = "https://zohebhasan.com/assets/settingDark.webp";
  const SystemLight = "https://zohebhasan.com/assets/settingLight.webp";

  const SunDark = "https://zohebhasan.com/assets/sunDark.webp";
  const SunLight = "https://zohebhasan.com/assets/sunLight.webp";

  const MoonDark = "https://zohebhasan.com/assets/moonDark.webp";
  const MoonLight = "https://zohebhasan.com/assets/moonLight.webp";

  const getLabelAndIcon = (
    mode: 'system' | 'dark' | 'light'
  ): { label: string; icon: string } => {
    switch (mode) {
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

  return (
    <>
      {modeOptions.map((mode) => {
        const { label, icon } = getLabelAndIcon(mode);
        const isActive = activeMode === mode;

        const isBlocked =
          (activeColor !== 'default' && (mode === 'dark' || mode === 'system')) || // prevent dark/system when colorblind
          (isHighContrast && mode === 'light');                                    // prevent light when high contrast

        return (
          <ButtonLink
            key={mode}
            $isDarkMode={isDarkMode}
            onClick={() => {
              if (isBlocked) return;
              setActiveMode(mode);
            }}
          >
            <ButtonContainer $isDarkMode={isDarkMode} $isActive={isActive}>
              <OptionContainer>
                <TextContainer>
                  <Text size={"0.8rem"} variant={"transparent"} fontWeight="500">
                    {label}
                  </Text>
                </TextContainer>
                <IconContainer>
                  <Icon src={icon} />
                </IconContainer>
              </OptionContainer>
            </ButtonContainer>
          </ButtonLink>
        );
      })}
    </>
  );
};

export default DarkModeOptions;

// ---------- Styles ----------
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const Icon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  opacity: 0.7;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

const ButtonLink = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;