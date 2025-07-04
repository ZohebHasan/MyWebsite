import React from 'react';
import styled from 'styled-components';

import Conna from "../../assets/conna_final.webm";

const ConnaButton: React.FC = () => {
  return (
    <VideoContainer>
      <video autoPlay loop muted>
        <source src={Conna} type="video/webm" />
        Your browser does not support animation rendering.
      </video>
    </VideoContainer>
  );
};

export default ConnaButton;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;

  video {
    width: 20rem;
    height: auto;
    background-color: transparent;
  }
`;
