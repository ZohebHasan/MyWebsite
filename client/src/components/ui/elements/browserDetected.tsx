import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';

import Text from './text';



const BrowserDetection: React.FC = () => {

    const MobileDark = "https://zohebhasan.com/assets/mobileDark.webp";
    const MobileLight = "https://zohebhasan.com/assets/mobileLight.webp";

    const { isDarkMode } = useDarkMode();
    const [showMobileBar, setShowMobileBar] = React.useState(false);
    const [timeLeft, setTimeLeft] = React.useState<number | null>(null);
    const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= 768);


    useEffect(() => {
        if (isMobile) {
            const showTimer = setTimeout(() => {
                setShowMobileBar(true);
                setTimeLeft(7); // start countdown from 4 seconds
            }, 5000);

            const hideTimer = setTimeout(() => {
                setShowMobileBar(false);
                setTimeLeft(null);
            }, 12000);

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [isMobile]);

    useEffect(() => {
        if (timeLeft === null) return;
        if (timeLeft <= 0) return;

        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);


    return (
        <StyledColorBlindBar

            $isMobileBarOpen={showMobileBar}
            $isDarkMode={isDarkMode}

        >

            <Top>
                <PhoneIcon src={isDarkMode ? MobileDark : MobileLight} />
                <Text size={"0.7rem"} variant={"transparent"} fontWeight="300">
                    Phone detected
                </Text>
                <Text size={"0.6rem"} variant={"transparent"} fontWeight="300">
                    {timeLeft}
                </Text>
            </Top>

            <Text size={"0.6rem"} variant={"transparent"} fontWeight="300">
                Try on a desktop browser to experience and interact with our fully
                immersive, The Inevitable — featuring the Chasing Arora and the Infinite Plane.
            </Text>




        </StyledColorBlindBar>
    );
};

export default BrowserDetection;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
`



const PhoneIcon = styled.img`
    width: 1rem;
    opacity: 0.7;
`

const StyledColorBlindBar = styled.div<{ $isMobileBarOpen?: boolean; $isDarkMode?: boolean }>`
  position: fixed;
  top: 12%;
  right: 8%;
  border-radius: 0.5rem;

  height: 6rem;
  width: 7rem;
  z-index: 100;
  padding: 0.5rem 0.6rem;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  background-color: ${({ $isDarkMode }) =>
        $isDarkMode ? 'rgb(40, 40, 40)' : 'rgb(230, 230, 230)'};

  box-shadow: ${({ $isDarkMode }) =>
        $isDarkMode
            ? '0 4px 12px rgba(0, 0, 0, 0.6)'
            : '0 4px 12px rgba(0, 0, 0, 0.15)'};

  opacity: ${({ $isMobileBarOpen }) => ($isMobileBarOpen ? 1 : 0)};
  visibility: ${({ $isMobileBarOpen }) => ($isMobileBarOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isMobileBarOpen }) => ($isMobileBarOpen ? 'auto' : 'none')};

  transition: opacity 1s ease, visibility 1s ease;
`;

