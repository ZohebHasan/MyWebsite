import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDarkMode } from "../../../contexts/darkMode";
import { useSendMessage } from '../../../contexts/sendMessage';

import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';
import Button from '../../ui/elements/button';


const ProjectBody: React.FC = () => {
    const {
        responseData,
        sendAnother,
    } = useSendMessage();

    const { isDarkMode } = useDarkMode();

    const SuccessLight = "https://zohebhasan.com/assets/successfulLight.webp";
    const SuccessDark = "https://zohebhasan.com/assets/successfulDark.webp";


    return (
        <BodyContainer flexDirection={"column"}>
            <BodyWrapper>
                <TitleWrapper>
                    <Text size={"4.5rem"} variant={"personal"} fontWeight={"100"}>Contact</Text>
                </TitleWrapper>
                <Main>
                    <LeftPortion>
                        <TextContainer>
                            <SuccessIcon src={isDarkMode ? SuccessDark : SuccessLight} />
                            <Text variant={"transparent"}
                                size={"1.4rem"}
                                fontWeight={"200"}
                            >
                                Thanks for reaching out. I will get back to you as soon as possible.
                            </Text>
                        </TextContainer>

                        <VericalLayer>
                            <InfoLeft>
                                <InputContainer>
                                    <Header>
                                        <Text variant="normal" size="1.1rem" fontWeight="200">
                                            Name:
                                        </Text>
                                    </Header>

                                    <Header>
                                        <Text variant="transparent" size="1rem" fontWeight="200">
                                            {responseData?.fullName || 'N/A'}
                                        </Text>
                                    </Header>


                                </InputContainer>
                            </InfoLeft>
                            <InfoRight>
                                <InputContainer>
                                    <Header>
                                        <Text variant={"normal"}
                                            size={"1.1rem"}
                                            fontWeight={"200"}
                                        >
                                            Email:
                                        </Text>
                                    </Header>
                                    <Header>
                                        <Text variant="transparent" size="1rem" fontWeight="200">
                                            {responseData?.email || 'N/A'}
                                        </Text>
                                    </Header>

                                </InputContainer>
                            </InfoRight>

                        </VericalLayer>
                        <VericalLayer>
                            <InfoLeft>
                                <InputContainer>
                                    <Header>
                                        <Text variant={"normal"}
                                            size={"1.1rem"}
                                            fontWeight={"200"}
                                        >
                                            Organization Name:
                                        </Text>
                                    </Header>
                                    <Header>
                                        <Text variant="transparent" size="1rem" fontWeight="200">
                                            {responseData?.orgName || 'N/A'}
                                        </Text>
                                    </Header>

                                </InputContainer>
                            </InfoLeft>
                            <InfoRight>
                                <InputContainer>
                                    <Header>
                                        <Text variant={"normal"}
                                            size={"1.1rem"}
                                            fontWeight={"200"}
                                        >
                                            Expected service:
                                        </Text>
                                    </Header>
                                    <Header>
                                        <Text variant="transparent" size="1rem" fontWeight="200">
                                            {responseData?.service || 'N/A'}
                                        </Text>
                                    </Header>

                                </InputContainer>
                            </InfoRight>
                        </VericalLayer>



                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    Message:

                                </Text>
                            </Header>
                            <Header>
                                <Text variant="transparent" size="1rem" fontWeight="200">
                                    {responseData?.message || 'N/A'}
                                </Text>
                            </Header>


                        </InputContainer>
                        <ButtonContainer>
                            <Button variant={"transparent"} onClick={() => sendAnother()}>
                                Send Another Message
                            </Button>
                        </ButtonContainer>


                    </LeftPortion>

                    <RightPortion>
                        <Text size={"1.1rem"} variant={"normal"} fontWeight={"200"}>Contact information</Text>
                        <Info>
                            <Text size={"0.9rem"} variant={"transparent"} fontWeight={"150"}>+1 (646) 203-8805</Text>
                            <Text size={"0.9rem"} variant={"transparent"} fontWeight={"150"}>zohebhasanofficial@gmail.com</Text>
                        </Info>

                    </RightPortion>
                </Main>

            </BodyWrapper>
        </BodyContainer>
    );
};

export default ProjectBody;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`


const SuccessIcon = styled.img`
    width: 1.5rem;
    opacity: 0.7;
`

const VericalLayer = styled.div`
    display: flex;
    width: 100%;
    /* background-color: red; */
    flex-direction: row;
    /* gap: 0.5rem; */
`
const InfoLeft = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`

const InfoRight = styled.div`
     display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`

const ErrorMessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;

`

const RequiredMark = styled.span`
  color: #e52384;
  margin-left: 0.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 95%;

  justify-content: right; 
  margin-top: 2rem;

`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  10% { transform: translateX(-10px); }
  20% { transform: translateX(10px); }
  30% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  50% { transform: translateX(-10px); }
  60% { transform: translateX(10px); }
  70% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
  90% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;


const ErrorMessage = styled.div`
    color: red;
    margin-bottom: 5px;
    font-size: 13px;
    animation: ${shakeAnimation} 0.5s cubic-bezier(.36,.07,.19,.97) both; 
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const InputContainer = styled.div`
    /* background-color: black; */
    
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & > * {
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 5%;
`

const LeftPortion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 4;
    /* background-color: red; */
`

const RightPortion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    margin-left: 2rem;
    /* background-color: blue; */
`



const TitleWrapper = styled.div`
    width: 100%;
    /* background-color: orange; */
    /* margin-top: 5%; */
    /* width: 80%; */

`

const BodyWrapper = styled.div`
    margin-top: 5%;
    width: 80%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10%;;
`;

