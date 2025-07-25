import React from "react";
import styled from "styled-components";
import Text from "./text";

const ConnectLogo: React.FC<{ size?: number }> = ({ size = 1 }) => {  // Set default size


    const LogoNew = "https://zohebhasan.com/assets/logo.webp";
    return (
        <LogoContainer>
            <StyledLogo src={LogoNew} alt="Logo" size={size} />
            <Text size={`${size * 1.0}rem`} fontWeight={"300"}>Connect</Text>
        </LogoContainer>
    );
}

export default ConnectLogo;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
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
