import React from 'react';
import styled from 'styled-components';

const IntroVideo: React.FC = () => {

  const Intro = "https://zohebhasan.com/assets/introV2.mp4";
  
  return (
    <StyledVideo
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noplaybackrate"
    >
      <source src={Intro} type="video/mp4" />
    </StyledVideo>
  );
};

export default IntroVideo;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;

  /* ensure no default UI shows */
  &::-webkit-media-controls {
    display: none !important;
  }

  &::--webkit-media-controls-enclosure {
    display: none !important;
  }
`;