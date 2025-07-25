import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDarkMode } from "../../../contexts/darkMode";

import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';



import InputFieldComponent from './inputField/inputBox';

import Button from '../../ui/elements/button';

import { useSendMessage } from '../../../contexts/sendMessage';







const DisplayFullNameError = () => {
    const {
        errors,
        fullNameEmptyError,

    } = useSendMessage();

    let errorMessage = null;

    if (fullNameEmptyError) {
        errorMessage = <ErrorMessage>Please enter your name.</ErrorMessage>;
    }
    else if (errors.fullNameError) {
        errorMessage = <ErrorMessage>Please enter a valid name.</ErrorMessage>;
    }

    return (
        <>
            {errorMessage}
        </>
    );
}


const DisplayEmailError = () => {
    const {
        errors,
        emailEmptyError,
    } = useSendMessage();

    let errorMessage = null;

    if (emailEmptyError) {
        errorMessage = <ErrorMessage>Please enter your email.</ErrorMessage>;
    }
    else if (errors.emailError) {
        errorMessage = <ErrorMessage>Please enter a valid email.</ErrorMessage>;
    }
    return (
        <>
            {errorMessage}
        </>
    );
}


const ProjectBody: React.FC = () => {

    const {
        fullName,
        email,
        orgName,
        service,
        message,
        sentSuccessfully,
        sentError,
        loading,

        messageEmptyError,

        handleFullNameChange,
        handleEmailChange,
        handleOrgNameChange,
        handleServiceNameChange,
        handleMessageChange,
        handleSubmit,
    } = useSendMessage();



    const [courseName, setCourseName] = useState("");
    const handleCourseNameChange = (value: string) => {
        setCourseName(value);
    };

    return (
        <BodyContainer flexDirection={"column"}>
            <BodyWrapper>
                <TitleWrapper>
                    <Text size={"4.5rem"} variant={"personal"} fontWeight={"100"}>Contact</Text>
                </TitleWrapper>
                <Main>
                    <RightPortion>
                        <Text size={"1.1rem"} variant={"normal"} fontWeight={"200"}>Contact information</Text>
                        <Info>
                            <Text size={"0.9rem"} variant={"transparent"} fontWeight={"150"}>+1 (646) 203-8805</Text>
                            <Text size={"0.9rem"} variant={"transparent"} fontWeight={"150"}>zohebhasanofficial@gmail.com</Text>
                        </Info>

                    </RightPortion>
                    <LeftPortion>
                        <Text variant={"transparent"}
                            size={"1.4rem"}
                            fontWeight={"200"}
                        >
                            Let's build something great together
                        </Text>
                        <VericalLayer>
                            <InfoLeft>
                                <InputContainer>
                                    <Header>
                                        <Text variant="normal" size="1.1rem" fontWeight="200">
                                            What's your name? <RequiredMark>*</RequiredMark>
                                        </Text>
                                    </Header>

                                    <InputFieldComponent
                                        id="enter_name"
                                        label="Enter your name here, e.g., John Doe"
                                        value={fullName}
                                        onChange={handleFullNameChange}
                                        width="90%"
                                        isSearchBox={false}
                                    />

                                    <ErrorMessageContainer>
                                        <DisplayFullNameError />
                                    </ErrorMessageContainer>
                                </InputContainer>
                            </InfoLeft>
                            <InfoRight>
                                <InputContainer>
                                    <Header>
                                        <Text variant={"normal"}
                                            size={"1.1rem"}
                                            fontWeight={"200"}
                                        >
                                            What's your email? <RequiredMark>*</RequiredMark>
                                        </Text>
                                    </Header>
                                    <InputFieldComponent
                                        id="enter_email"
                                        label={"Enter your email here, e.g., john.doe@gmail.com"}
                                        value={email}
                                        onChange={handleEmailChange}
                                        width="90%"
                                        isSearchBox={false}
                                    />
                                    <ErrorMessageContainer>
                                        <DisplayEmailError />
                                    </ErrorMessageContainer>
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
                                            What's the name of your organization?
                                        </Text>
                                    </Header>
                                    <InputFieldComponent
                                        id="enter_email"
                                        label={"Enter your organization name here, e.g., Google"}
                                        value={orgName}
                                        onChange={handleOrgNameChange}
                                        width="90%"
                                        isSearchBox={false}
                                    />

                                </InputContainer>
                            </InfoLeft>
                            <InfoRight>
                                <InputContainer>
                                    <Header>
                                        <Text variant={"normal"}
                                            size={"1.1rem"}
                                            fontWeight={"200"}
                                        >
                                            What service are you looking for?
                                        </Text>
                                    </Header>
                                    <InputFieldComponent
                                        id="enter_service_name"
                                        label={"Enter the service, e.g., Software Development"}
                                        value={service}
                                        onChange={handleServiceNameChange}
                                        width="90%"
                                        isSearchBox={false}
                                    />

                                </InputContainer>
                            </InfoRight>
                        </VericalLayer>



                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    Please enter your message
                                    <RequiredMark>*</RequiredMark>
                                </Text>
                            </Header>
                            <InputFieldComponent
                                id="enter_message"
                                label="Enter your message here, e.g., Hi Zoheb..."
                                value={message}
                                onChange={handleMessageChange}
                                width="95%"
                                isSearchBox={false}
                                isTextArea={true}
                            />
                            <ErrorMessageContainer>
                                {messageEmptyError && <ErrorMessage>Message field is empty</ErrorMessage>}
                            </ErrorMessageContainer>

                        </InputContainer>
                        <ButtonContainer>
                            <Button variant={"transparent"} onClick={() => handleSubmit()}>
                                Send
                            </Button>
                        </ButtonContainer>


                    </LeftPortion>


                </Main>

            </BodyWrapper>
        </BodyContainer>
    );
};

export default ProjectBody;
const VericalLayer = styled.div`
    display: flex;
    width: 100%;
    /* background-color: red; */
    flex-direction: column;
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
    flex-direction: column;
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
    margin-bottom: 1rem;
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

