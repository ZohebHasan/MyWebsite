import React from 'react';
import styled from 'styled-components';

import HeaderContainer from "../../ui/templetes/headerTemplete"
import DarkLightToggle from '../../ui/elements/darkLightToggle';
import Logo from '../../ui/elements/logo';

import { useDarkMode } from '../../../contexts/darkMode';
import { useNavigate } from 'react-router-dom';

const HeaderLogin: React.FC = () => {

    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();

    return (
        <HeaderContainer variant={"hidden"}>
            <Logo />
            <ButtonsContainer>
                <ButtonContainer>
                    <StyledLink $isDarkMode={isDarkMode}>Projects</StyledLink>
                </ButtonContainer>
                <ButtonContainer>
                    <StyledLink $isDarkMode={isDarkMode}>Research</StyledLink>
                </ButtonContainer>
                <ButtonContainer>
                    <StyledLink $isDarkMode={isDarkMode}>Resume</StyledLink>
                </ButtonContainer>
                <ButtonContainer>
                    <StyledLink $isDarkMode={isDarkMode}>About</StyledLink>
                </ButtonContainer>
                <ButtonContainer>
                    <StyledLink $isDarkMode={isDarkMode} onClick={() => navigate("/contact")}>
                        Contact
                    </StyledLink>
                </ButtonContainer>
            </ButtonsContainer>
            <DarkLightToggleContainer>
                <DarkLightToggle />
            </DarkLightToggleContainer>
        </HeaderContainer>
    );
};

export default HeaderLogin;



const ButtonsContainer = styled.div`
    /* background-color: orange; */
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    margin-top: 10px;
    flex: 3;
`


const DarkLightToggleContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    margin-right: 10px;
    justify-content: flex-end;
    /* width: 100%; */
    flex: 1;
    /* background-color:blue; */
`;


const StyledLink = styled.p<{ $isDarkMode: boolean }>`
  cursor: pointer;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#bbbbbb' : '#555555')};
 
  font-size: 0.9rem;
  font-weight: 400;
  transition: transform 0.2s, color 0.2s;


  &:hover {
    transform: scale(1.05);
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
  }


  &:active {
    transform: scale(0.95);
  }
`;

const ButtonContainer = styled.div`
    /* flex: 1; */
    /* background-color: cyan; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`