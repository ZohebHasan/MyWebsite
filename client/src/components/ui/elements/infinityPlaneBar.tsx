import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../../contexts/darkMode';
import Text from './text';

const InfinityPlane: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [showBar, setShowBar] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const FlowerDark = "https://zohebhasan.com/assets/flowerDark.webp";
  const FlowerLight = "https://zohebhasan.com/assets/flowerLight.webp";

  const CloseDark = "https://zohebhasan.com/assets/closeDark.webp";
  const CloseLight = "https://zohebhasan.com/assets/closeLight.webp";

  const Art = "https://zohebhasan.com/assets/art.mp4";
  const IslandDark = "https://zohebhasan.com/assets/islandDark.mp4";
  const IslandLight = "https://zohebhasan.com/assets/islandLight.mp4";

  useEffect(() => {
    if (window.innerWidth <= 768) return; // Do not show on phones

    const showTimer = setTimeout(() => {
      setShowBar(true);
      setTimeLeft(20);
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowBar(false);
      setTimeLeft(null);
    }, 25000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleClose = () => {
    setShowBar(false);
    setTimeLeft(null);
  };

  return (
    <StyledBar $isVisible={showBar} $isDarkMode={isDarkMode}>
      <Top>
        <Left>
          <PhoneIcon src={isDarkMode ? FlowerDark : FlowerLight} />
          <Text size="1rem" variant="transparent" fontWeight="300">
            The Inevitable:
          </Text>
        </Left>
        <Right>
          <CloseButton
            src={isDarkMode ? CloseDark : CloseLight}
            onClick={handleClose}
          />
        </Right>
      </Top>
      <Bottom>
        <Intro>
          <VideoContainer>
            <StyledVideo
              key={isDarkMode ? 'dark' : 'light'}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noplaybackrate"
            >
              <source src={isDarkMode ? IslandDark : IslandLight} type="video/mp4" />
            </StyledVideo>
          </VideoContainer>
          <IntroText>
            <IntroTextWrapper>
              <Text size="0.8rem" variant="normal" fontWeight="300">
                The Infinity Plane & The Chasing Aurora
              </Text>
              <Text size="0.7rem" variant="transparent" fontWeight="200">
                “The Inevitable” is an interactive piece where I bring together modern art and technology using animation logic and code to create a space that responds, not just displays. It was partly inspired by Celui qui tombe by Yoann and Marie Bourgeois, a performance about gravity and balance that stuck with me. I wanted to translate that feeling of motion, tension, and inevitability into a software. The interactive plane reflects that fragility, while The Chasing Arora visualizes pursuit and convergence, two forces circling until their paths finally align.
              </Text>
            </IntroTextWrapper>
          </IntroText>
        </Intro>
        <Intro>
          <VideoContainer>
            <StyledVideo
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noplaybackrate"
            >
              <source src={Art} type="video/mp4" />
            </StyledVideo>
          </VideoContainer>
        </Intro>
        {timeLeft !== null && (
          <TimerContainer>
            <Text size="1rem" variant="transparent" fontWeight="300">
              {timeLeft}
            </Text>
          </TimerContainer>
        )}
      </Bottom>
    </StyledBar>
  );
};

export default InfinityPlane;

const TimerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.3rem;
  opacity: 0.7;

  &::-webkit-media-controls {
    display: none !important;
  }

  &::--webkit-media-controls-enclosure {
    display: none !important;
  }
`;

const Bottom = styled.div``;

const VideoContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
`;

const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  padding: 0;
  margin: 0;
`;

const IntroText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

const Intro = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const CloseButton = styled.img`
  width: 1.1rem;
  opacity: 0.7;
  transition: transform 0.5s ease, opacity 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.99);
    opacity: 0.9;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const PhoneIcon = styled.img`
  width: 2rem;
  opacity: 0.7;
`;

const StyledBar = styled.div<{ $isVisible?: boolean; $isDarkMode?: boolean }>`
  position: fixed;
  top: 8%;
  right: 2%;
  border-radius: 0.5rem;
  height: 41rem;
  width: 20rem;
  z-index: 100;
  padding: 0.5rem 0.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? 'rgba(40, 40, 40, 0.306)' : 'rgba(230, 230, 230, 0.126)'};
  box-shadow: ${({ $isDarkMode }) =>
    $isDarkMode ? '0 4px 12px rgba(0, 0, 0, 0.6)' : '0 4px 12px rgba(0, 0, 0, 0.15)'};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: opacity 1s ease, visibility 1s ease;
`;