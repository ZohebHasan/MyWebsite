import React from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../../contexts/darkMode';
import { useReducedMotion } from '../../../contexts/reducedMotionContext';


const TextSizeDial: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const {
    dialValue,
    setDialValue,
    increaseDial,
    decreaseDial,
  } = useReducedMotion();

  const PlusDark = "https://zohebhasan.com/assets/plusDark.webp";
  const PlusLight = "https://zohebhasan.com/assets/plusLight.webp";

  const MinusDark = "https://zohebhasan.com/assets/minusDark.webp";
  const MinusLight = "https://zohebhasan.com/assets/minusLight.webp";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setDialValue(Number.isNaN(val) ? 0 : val);
  };

  return (
    <Container>
      <Icon src={isDarkMode ? MinusDark : MinusLight} onClick={decreaseDial} />
      <Slider
        $isDarkMode={isDarkMode}
        type="range"
        min={-0.1}
        max={0.1}
        step={0.01}
        value={dialValue}
        onChange={handleChange}
      />
      <Icon src={isDarkMode ? PlusDark : PlusLight} onClick={increaseDial} />
    </Container>
  );
};

export default TextSizeDial;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease, opacity 0.2s ease;
  @media (max-width: 768px) {
    width: 0.7rem;
    height: 0.7rem;
  }

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;
const Slider = styled.input<{ $isDarkMode: boolean }>`
  appearance: none;
  height: 0.3125rem;
  width: 10rem; /* ✅ Desktop width */
  background: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#848484')};
  border-radius: 0.3125rem;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    background: ${({ $isDarkMode }) => ($isDarkMode ? '#a6a6a6' : '#252525')};
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 1.25rem;
    height: 1.25rem;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 6rem; /* ✅ Mobile width */
    height: 0.2rem;

    &::-webkit-slider-thumb {
      width: 0.9rem;
      height: 0.9rem;
    }

    &::-moz-range-thumb {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;