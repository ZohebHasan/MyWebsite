import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../../contexts/darkMode';

const ConnaMobile: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const Conna = "https://zohebhasan.com/assets/connaMP4.mp4";

    return (
        <StyledVideo autoPlay loop muted playsInline controls={false}>
            <source src={Conna} type="video/mp4" />
        </StyledVideo>
    );
}

export default ConnaMobile;

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    /* z-index: 0; */
    object-fit: cover;
     border-radius: 1rem;
`;
