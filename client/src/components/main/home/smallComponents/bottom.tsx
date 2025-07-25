import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';



import { useDarkMode } from '../../../../contexts/darkMode';

import LeftToRightText from '../../../ui/elements/leftToRightText';


const Bottom: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [hideArrow, setHideArrow] = useState(false);

  const DownDark = "https://zohebhasan.com/assets/downDark.webp";
  const DownLight = "https://zohebhasan.com/assets/downLight.webp";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Trigger once when scroll passes 20px
      if (!hideArrow && currentY > 20) {
        setHideArrow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideArrow]);

  return (
    <BottomContainer $hidden={hideArrow}>
      <DownIcon src={isDarkMode ? DownDark : DownLight} />
      <LeftToRightText size="1.3">Scroll to dive in.</LeftToRightText>

    </BottomContainer>
  );
};


export default Bottom;

const DownIcon = styled.img`
  width: 1.3rem;
  animation: breatheArrow 3.5s ease-in-out infinite;
  will-change: transform;

  @keyframes breatheArrow {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-10px); /* go up slightly faster */
    }
    100% {
      transform: translateY(0);     /* return slowly */
    }
  }
`;


const BottomContainer = styled.div<{ $hidden: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 52%;
  gap: 1rem;
  margin-bottom: 2rem;

  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 1.2s ease-out;
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
`;
