import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import HeaderContainer from "../../ui/templetes/headerTemplete"
import DarkLightToggle from '../../ui/elements/darkLightToggle';
import Logo from '../../ui/elements/logo';
import OptionButton from '../../ui/elements/optionButton';



import NavigationButtons from '../../ui/elements/navButtons';

import { useDarkMode } from '../../../contexts/darkMode';
import { useScroll } from '../../../contexts/scroll';

const HeaderLogin: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const { showStickyButtons, scrollTo, homeRef } = useScroll();


    const LinkedinDark = "https://zohebhasan.com/assets/linkedinDark.webp";
    const LinkedinLight = "https://zohebhasan.com/assets/linkedinLight.webp";

    const GithubDark = "https://zohebhasan.com/assets/githubDark.webp";
    const GithubLight = "https://zohebhasan.com/assets/githubLight.webp";


    return (
        <HeaderContainer variant={"hidden"}>
            <FirstHalf>
                <LogoContainer>
                    <LogoWrapper onClick={() => scrollTo(homeRef)}>
                        <Logo />
                    </LogoWrapper>
                </LogoContainer>

                {showStickyButtons && (
                    <StickyButtonsWrapper>
                        <NavigationButtons />
                    </StickyButtonsWrapper>
                )}
            </FirstHalf>
            <SecondHalf>

                <LinkButtonContainer>
                    <IconLink href="https://github.com/ZohebHasan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <ClickableButtonIcon src={isDarkMode ? GithubDark : GithubLight} size={1.6} />
                    </IconLink>
                    <IconLink href="https://linkedin.com/in/zoheb-hasan-456110220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <ClickableButtonIcon src={isDarkMode ? LinkedinDark : LinkedinLight} size={1.6} />
                    </IconLink>
                </LinkButtonContainer>
                <HideOnMobile>
                    <DarkLightToggleContainer>
                        <DarkLightToggle />
                    </DarkLightToggleContainer>
                </HideOnMobile>
                <OptionButtonWrapper>
                    <OptionButton />
                </OptionButtonWrapper>
            </SecondHalf>
        </HeaderContainer>
    );
};

export default HeaderLogin;

const LogoWrapper = styled.div`
  transition: transform 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* gap: 0.3rem; */
    /* background-color: yellow; */
    /* width: 100%; */
    /* margin-top: 10px;
    padding-top: 10px;
    margin-left: 10px;
    padding-left: 10px; */
    flex: 1;
    /* padding-right: 6rem; */
`;


const FirstHalf = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    /* background-color: pink; */
`

const SecondHalf = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    /* background-color: green; */
    align-items: center;
    justify-content: flex-end;
`

const StickyButtonsWrapper = styled.div`
  display: flex;
  flex: 1.5;
  align-items: center;
  /* margin-right: 0.4rem; */
  /* margin-right: 3rem; */
  margin-left: 1.9rem;
  padding-left: 3rem;
  /* background-color: green; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkButtonContainer = styled.div`
    /* flex: 2; */
    display: flex;
    padding-right: 5rem;
    margin-right: 1rem;
    gap: 1rem;
    flex-direction: row;
    /* background-color: green; */
    @media (max-width: 768px) {
      padding-right: 0.3rem;
      /* margin-right: 1rem; */
  }
`;

const IconLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

const ClickableButtonIcon = styled.img<{ size: number }>`
    width: 1.5rem;
    height: auto;
    object-fit: contain;
    display: block;
    opacity: 0.7;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    @media (max-width: 768px) {
          width: 1.1rem;
    }
    &:hover {
        opacity: 1;
        transform: scale(1.08);
        transform-origin: center;
    }

    &:active {
        transform: scale(0.98);
    }
`;

const DarkLightToggleContainer = styled.div`
    /* position: absolute; */
    opacity: 0.8;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    margin-right: 10px;
    justify-content: flex-end;
    /* width: 100%; */
    /* flex: 1; */
    // background-color:blue;
`;

const OptionButtonWrapper = styled.div`
  display: flex;
  /* width: 60%; */
  align-items: center;
  justify-content: flex-end;
  /* background-color: orange; */
`;

const HideOnMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;