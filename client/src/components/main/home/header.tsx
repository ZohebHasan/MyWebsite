import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import HeaderContainer from "../../ui/templetes/headerTemplete"
import DarkLightToggle from '../../ui/elements/darkLightToggle';
import Logo from '../../ui/elements/logo';
import OptionButton from '../../ui/elements/optionButton';

import LinkedinDark from "../../assets/linkedinDark.png"
import LinkedinLight from "../../assets/linkedinLight.png"

import GithubDark from "../../assets/githubDark.png"
import GithubLight from "../../assets/githubLight.png"

import EmailDark from "../../assets/emailDark.png"
import EmailLight from "../../assets/emailLight.png"
import NavigationButtons from '../../ui/elements/navButtons';

import { useDarkMode } from '../../../contexts/darkMode';
import { useScroll } from '../../../contexts/scroll';

const HeaderLogin: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const { showStickyButtons } = useScroll();



    return (
        <HeaderContainer variant={"hidden"}>
            <FirstHalf>
                <LogoContainer>
                    <Logo />
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

                <DarkLightToggleContainer>
                    <DarkLightToggle />
                </DarkLightToggleContainer>
                <OptionButtonWrapper>
                    <OptionButton />
                </OptionButtonWrapper>
            </SecondHalf>
        </HeaderContainer>
    );
};

export default HeaderLogin;

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
`;

const IconLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

const ClickableButtonIcon = styled.img<{ size: number }>`
    width: ${({ size }) => `${size}rem`};
    height: auto;
    object-fit: contain;
    display: block;
    opacity: 0.7;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

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

const OptionButtonContainer = styled.div`
  background-color: red;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform-origin: center; // Ensure this is applied universally

  &:hover {
    opacity: 0.7;
    transform: scale(1.08);
    transform-origin: center; // Redefine it here to avoid any overrides
  }

  &:active {
    transform: scale(0.98);
  }
`;