import React, { useState } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../../contexts/darkMode';

import PlusDark from "../../assets/plusDark.png";
import PlusLight from "../../assets/plusLight.png";
import MinusDark from "../../assets/minusDark.png";
import MinusLight from "../../assets/minusLight.png"

const TextSizeDial: React.FC = () => {
    const [fontSize, setFontSize] = useState<number>(18);
    const { isDarkMode } = useDarkMode();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(Number(e.target.value));
    };

    const handleDecrease = () => {
        setFontSize(prev => Math.max(12, prev - 1));
    };

    const handleIncrease = () => {
        setFontSize(prev => Math.min(48, prev + 1));
    };

    return (
        <Container>
            <Icon src={isDarkMode ? MinusDark : MinusLight} onClick={handleDecrease} />
            <Slider
                $isDarkMode={isDarkMode}
                id="textSize"
                type="range"
                min={12}
                max={48}
                value={fontSize}
                onChange={handleChange}
            />
            <Icon src={isDarkMode ? PlusDark : PlusLight} onClick={handleIncrease} />
            {/* <PreviewText style={{ fontSize: `${fontSize}px` }}>
                This is a preview of your text.
            </PreviewText> */}
        </Container>
    );
};

export default TextSizeDial;

const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.95);
        opacity: 0.6;
    }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  /* background-color: pink; */
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Slider = styled.input<{$isDarkMode: boolean}>`
  /* width: 200px; */
  /* margin: 0.5rem 0; */
  appearance: none;
  height: 5px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#848484')};  
  border-radius: 5px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${({ $isDarkMode }) => ($isDarkMode ? '#a6a6a6' : '#252525')};  
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const PreviewText = styled.div`
  margin-top: 2rem;
  transition: font-size 0.3s ease-in-out;
  text-align: center;
`;