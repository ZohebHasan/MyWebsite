import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../../contexts/darkMode';
import { useReducedMotion } from '../../contexts/reducedMotionContext';



const BackgroundAnimation: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const { isReducedMotion } = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const VideoTransperant = "https://zohebhasan.com/assets/background1.webm";

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      if (isReducedMotion) {
        video.pause();
      } else {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn("⚠️ Autoplay was prevented:", err);
          });
        }
      }
    }
  }, [isReducedMotion]);

  return (
    <StyledVideo
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      preload='auto'
    >
      <source src={VideoTransperant} type="video/webm" />
    </StyledVideo>
  );
};

export default BackgroundAnimation;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  top: 0;
  left: 0;
  pointer-events: none;
`;