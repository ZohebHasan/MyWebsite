import React, { useEffect } from 'react';
import styled from 'styled-components';

import Intro from "../../assets/introV2.mp4";
import { useDarkMode } from '../../../contexts/darkMode';

const IntroVideo: React.FC = () => {
    const { isDarkMode } = useDarkMode();


    return (
        <StyledVideo autoPlay loop muted playsInline controls={false}>
            <source src={Intro} type="video/mp4" />
        </StyledVideo>
    );
}

export default IntroVideo;

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    /* z-index: 0; */
    object-fit: cover;
     border-radius: 1rem;
`;
