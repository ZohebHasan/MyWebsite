import React from "react";
import styled from "styled-components";

import { useDarkMode } from "../../../contexts/darkMode";

const Logo: React.FC<{ size?: number }> = ({ size = 1.5 }) => {  // Set default size
    const { isDarkMode } = useDarkMode();

    const GlassLight = "https://zohebhasan.com/assets/glassLight.webp";
    const GlassDark = "https://zohebhasan.com/assets/glassDark.webp";

    const ZohebDark = "https://zohebhasan.com/assets/zohebHasanDark.webp";
    const ZohebLight = "https://zohebhasan.com/assets/zohebHasanLight.webp";
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
    justify-content: center;
    /* gap: 0.3rem; */
    /* background-color: blue; */
    /* width: 100%; */
    /* margin-top: 10px;
    padding-top: 10px;
    margin-left: 10px;
    padding-left: 10px; */
    /* flex: 1; */
    /* padding-right: 6rem; */
`;

const StyledLogo = styled.img<{ size: number }>`
    width: 3rem;
    @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;
