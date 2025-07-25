import React from "react";
import styled, { keyframes } from "styled-components";


import { useDarkMode } from "../../contexts/darkMode";

const Intro: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const isMobile = window.innerWidth <= 768; // or use a hook if needed

  const RetroGlassLight = "https://zohebhasan.com/assets/glassRetroLight.webp";
  const RetroGlassDark = "https://zohebhasan.com/assets/retroGlassDark.webp";

  const AviationGlassLight = "https://zohebhasan.com/assets/glassAviationLight.webp";
  const AviationGlassDark = "https://zohebhasan.com/assets/glassAviationDark.webp";

  const RoundGlassLight = "https://zohebhasan.com/assets/glassLight.webp";
  const RoundGlassDark = "https://zohebhasan.com/assets/glassDark.webp";

  const ZohebLight = "https://zohebhasan.com/assets/zohebHasanLight.webp";
  const ZohebDark = "https://zohebhasan.com/assets/zohebHasanDark.webp";

  return (
    <Container $isDarkMode={isDarkMode}>
      <GlassWrapper $isMobile={isMobile}>
        <Glass src={isDarkMode ? RetroGlassDark : RetroGlassLight} className="retro" />
        <Glass src={isDarkMode ? AviationGlassDark : AviationGlassLight} className="aviation" />
        <Glass src={isDarkMode ? RoundGlassDark : RoundGlassLight} className="round" />

      </GlassWrapper>

      <Logo src={isDarkMode ? ZohebDark : ZohebLight} $isMobile={isMobile} />
    </Container>
  );
};

export default Intro;


const showRetro = keyframes`
  0%, 33%   { opacity: 1; }
  34%, 100% { opacity: 0; }
`;
const showAviation = keyframes`
  0%, 33%  { opacity: 0; }
  34%, 66% { opacity: 1; }
  67%,100% { opacity: 0; }
`;
const showRound = keyframes`
  0%, 66%  { opacity: 0; }
  67%,100% { opacity: 1; }
`;
const moveLeft = keyframes`to { transform: translateX(-3rem); }`;
const moveLeftMobile = keyframes`to { transform: translateX(-2rem); }`;

const moveRightFade = keyframes`to { opacity: 1; transform: translateX(3rem); }`;
const moveRightFadeMobile = keyframes`to { opacity: 1; transform: translateX(2rem); }`;

const Container = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 100vh;
  /* background: ${({ $isDarkMode }) => ($isDarkMode ? "#000" : "#fff")}; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const GlassWrapper = styled.div<{ $isMobile: boolean }>`
  position: absolute;
  width: ${({ $isMobile }) => ($isMobile ? '4.5rem' : '7rem')};
  animation: ${({ $isMobile }) => ($isMobile ? moveLeftMobile : moveLeft)} 1s ease-out forwards;
  animation-delay: 1.8s;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const Logo = styled.img<{ $isMobile: boolean }>`
  position: absolute;
  width: ${({ $isMobile }) => ($isMobile ? '4.5rem' : '7rem')};
  opacity: 0;
  animation: ${({ $isMobile }) => ($isMobile ? moveRightFadeMobile : moveRightFade)} 1s ease-out forwards;
  animation-delay: 1.8s;
  z-index: 1;
`;


const Glass = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  opacity: 0;

  /* play each “show” animation twice               ↓ iteration-count */
  &.retro    { animation: ${showRetro}    0.8s linear 0s 2 forwards; }
  &.aviation { animation: ${showAviation} 0.8s linear 0s 2 forwards; }
  &.round    { animation: ${showRound}    0.8s linear 0s 2 forwards; }
`;

