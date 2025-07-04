import React from 'react';
import styled from 'styled-components';


import Greetings from '../smallComponents/greetings';
import Text from '../../../ui/elements/text';

import { useScroll } from '../../../../contexts/scroll';
import { useDarkMode } from '../../../../contexts/darkMode';

import NavigationButtons from '../../../ui/elements/navButtons';



const Top: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const { showStickyButtons } = useScroll();


    return (
        <TopContainer >
            <Greetings />
            <TextContainer>
                <Text size={"1.4rem"} variant={"transparent"} fontWeight={"300"}> I'm </Text>
                <Text size={"1.5rem"} variant={"personal"} fontWeight={"500"}> Zoheb,</Text>
                <Text size={"1.4rem"} variant={"transparent"} fontWeight={"300"}> and I build cool</Text>
                <Text size={"1.5rem"} variant={"personal"} fontWeight={"500"}> softwares.</Text>
            </TextContainer>
            {/* <NavigationButtons /> */}
            <ButtonsContainer>
                {!showStickyButtons && (
                    <NavigationButtons />
                )}
            </ButtonsContainer>
        </TopContainer>
    );
};


export default Top;

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



const ButtonsContainer = styled.div`
    /* background-color: orange; */
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    min-height: 3rem; 
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 0.3rem;
    /* background-color: pink; */
`

const TopContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 52%;   
    /* background-color: blue; */
`

const GreetingDropDownTextContainer = styled.div`
    // flex:1;
    display:flex;
    flex-direction: column;
    margin-top: 2rem;
    padding: 0.625rem;
    align-self: flex-start;
    // background-color:red;
`


const DropDownTextContainer = styled.div`
    flex:1;
    margin-top: -6%; 
`



const DropDownContainer = styled.div`
    // flex: 5;
    display: flex;
    width: 100%;
    
    max-height: 28rem;

    @media (max-width: 1440px) { 
        max-height: 21rem;
    }

`;
