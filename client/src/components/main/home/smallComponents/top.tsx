import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Greetings from '../smallComponents/greetings';
import Text, { Span } from '../../../ui/elements/text';
import { useScroll } from '../../../../contexts/scroll';
import { useDarkMode } from '../../../../contexts/darkMode';
import NavigationButtons from '../../../ui/elements/navButtons';

const Top: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const { showStickyButtons } = useScroll();

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TopContainer>
      <Greetings />
      <TextContainer>
        <Text size="1.5rem" variant="normal" fontWeight="200">
          <Span $variant="transparent" $fontWeight="200" $isDarkMode={isDarkMode}>I'm </Span>
          <Span $variant="personal" $fontWeight="300" $isDarkMode={isDarkMode}>Zoheb, </Span>
          <Span $variant="transparent" $fontWeight="200" $isDarkMode={isDarkMode}>and I build cool </Span>
          <Span $variant="personal" $fontWeight="300" $isDarkMode={isDarkMode}>softwares.</Span>
        </Text>
      </TextContainer>

      <ButtonsContainer>
        {(!showStickyButtons || isMobile) && <NavigationButtons />}
      </ButtonsContainer>
    </TopContainer>
  );
};

export default Top;

// --- styling ---
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  min-height: 3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 0.3rem;
  position: relative;
  z-index: 5;
`;

const TopContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 52%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;