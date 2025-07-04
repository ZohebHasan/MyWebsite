import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../../../contexts/darkMode';
import { useSidebar } from '../../../contexts/sidebar';

import CloseLight from "../../assets/closeLight.png";
import CloseDark from "../../assets/closeDark.png";
import OptionDark from "../../assets/optionDark.png";
import OptionLight from "../../assets/optionLight.png";

const OptionButton: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const { isSidebarOpen, toggleSidebar, addProtectedRef, removeProtectedRef } = useSidebar();

  const optionBtnRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (optionBtnRef.current) {
      addProtectedRef(optionBtnRef as React.RefObject<HTMLElement>);
    }

    return () => {
      if (optionBtnRef.current) {
        removeProtectedRef(optionBtnRef as React.RefObject<HTMLElement>);
      }
    };
  }, [optionBtnRef, addProtectedRef, removeProtectedRef]);

  const iconSrc = isSidebarOpen
    ? (isDarkMode ? CloseDark : CloseLight)
    : (isDarkMode ? OptionDark : OptionLight);

  const altText = isSidebarOpen ? 'Close' : 'Open';

  return (
    <StyledIcon
      onClick={toggleSidebar}
      src={iconSrc}
      alt={altText}
      ref={optionBtnRef}
    />
  );
};

export default OptionButton;

const StyledIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  opacity: 0.7;

  @media (max-width: 1280px) { 
    width: 1.3rem;
    height: 1.3rem;
  }

  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.98);
  }
`;

