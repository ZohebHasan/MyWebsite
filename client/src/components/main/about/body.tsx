import React, { useState } from 'react';
import styled from 'styled-components';
import { useDarkMode } from "../../../contexts/darkMode";

import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';

import GithubDark from "../../assets/githubDark.png"
import GithubLight from "../../assets/githubLight.png"

import EmailDark from "../../assets/emailDark.png"
import EmailLight from "../../assets/emailLight.png"

import LinkedinDark from "../../assets/linkedinDark.png"
import LinkedinLight from "../../assets/linkedinLight.png"

import PhoneDark from "../../assets/phoneDark.png"
import PhoneLight from "../../assets/phoneLight.png"

import DiscordDark from "../../assets/discordDark.png"
import DiscordLight from "../../assets/discordLight.png"

import CopyDark from "../../assets/copyDark.png"
import CopyLight from "../../assets/copyLight.png"

import DoneDark from "../../assets/doneDark.png"
import DoneLight from "../../assets/doneLight.png"

const Body: React.FC = () => {

    const { isDarkMode } = useDarkMode();



    return (
        <BodyContainer flexDirection={"column"}>
            <TitleWrapper>
                <Text size={"4.5rem"} variant={"personal"} fontWeight={"500"}>About</Text>
            </TitleWrapper>
            <BodyWrapper>

            </BodyWrapper>

        </BodyContainer>
    );
};

export default Body;


const TitleWrapper = styled.div`
    width: 100%;
    /* background-color: orange; */
    margin-top: 5%;
    width: 80%;

`

const BodyWrapper = styled.div`
    margin-top: 5%;
    width: 50%;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    /* background-color: blue; */
    margin-top: 2%;
    width: 100%;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    /* background-color: yellow; */
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    /* background-color: red; */
`;

const StyledLogo = styled.img<{ size: number }>`
    width: ${({ size }) => `${(size * 2.0) + 0.2}rem`};
    @media (max-width: 1280px) {
        width: ${({ size }) => `${size * 1.0}rem`};
    }
`;

const TextContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: underline;
    text-decoration-color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
    text-underline-offset: 4px;
    font-weight: 500;
    transition: all 0.2s ease;
    color: inherit;
  }
`;

const CopyButtonContainer = styled.div`
    display: flex;
    flex: 1;
    padding-left: 1rem;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row;
`;

const CopyButton = styled.button<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ $isDarkMode }) => ($isDarkMode ? '#bdbdbd' : '#464646')};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

const CopyImage = styled.img`
  height: 20px;
`;

const CopiedTextContainer = styled.div``;
