import React from "react";
import styled from "styled-components";
import LogoNew from '../../../assets/logo.png';
import { useDarkMode } from "../../../contexts/darkMode";

import GlassLight from "../../assets/glassLight.png"
import GlassDark from "../../assets/glassDark.png"


import ZohebDark from "../../assets/zohebHasanDark.png";
import ZohebLight from "../../assets/zohebHasanLight.png"

import Text from "./text";


const Logo: React.FC<{ size?: number }> = ({ size = 1.5 }) => {  // Set default size
    const { isDarkMode } = useDarkMode();
    return (
        <LogoContainer>
            <StyledLogo src={isDarkMode ? GlassDark : GlassLight} alt="Logo" size={size} />
            {/* <Text size={`${size * 1.0}rem`} fontWeight={"300"}>Zoheb Hasan</Text> */}
            <StyledLogo src={isDarkMode ? ZohebDark : ZohebLight} alt="Logo" size={size} />
        </LogoContainer>
    );
}

export default Logo;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* gap: 0.3rem; */
    // background-color: red;
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    margin-left: 10px;
    padding-left: 10px;
`;

const StyledLogo = styled.img<{ size: number }>`
    width: ${({ size }) => `${(size * 2.0) + 0.2}rem`};  
    // transition: transform 0.5s, opacity 0.5s;
    // mix-blend-mode: multiply;
    // background-color: transparent;

    @media (max-width: 1280px) {
        width: ${({ size }) => `${size * 1.0}rem`};  // Smaller size on narrow screens
    }
`;
