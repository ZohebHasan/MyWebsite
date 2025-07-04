import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDarkMode } from "../../../contexts/darkMode";

import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';



import InputFieldComponent from './inputField/inputBox';

import Button from '../../ui/elements/button';


const ProjectBody: React.FC = () => {

    const { isDarkMode } = useDarkMode();

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
                    <LeftPortion>
                        <Text variant={"transparent"}
                            size={"1.4rem"}
                            fontWeight={"200"}
                        >
                            Let's build something great together
                        </Text>
                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    What's your name?
                                </Text>
                            </Header>
                            <InputFieldComponent
                                id="enter_name"
                                label={"Enter your name here, e.g., John Doe"}
                                value={courseName}
                                onChange={handleCourseNameChange}
                                width="100%"
                                isSearchBox={false}
                            />
                            {false && <ErrorMessage>Name field is empty</ErrorMessage>}
                        </InputContainer>
                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    What's your email?
                                </Text>
                            </Header>
                            <InputFieldComponent
                                id="enter_email"
                                label={"Enter your email here, e.g., john.doe@gmail.com"}
                                value={courseName}
                                onChange={handleCourseNameChange}
                                width="100%"
                                isSearchBox={false}
                            />
                            {false && <ErrorMessage>Email field is empty</ErrorMessage>}
                        </InputContainer>
                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    What's the name of your organization? (Optional)
                                </Text>
                            </Header>
                            <InputFieldComponent
                                id="enter_email"
                                label={"Enter your organization name here, e.g., Google"}
                                value={courseName}
                                onChange={handleCourseNameChange}
                                width="100%"
                                isSearchBox={false}
                            />
                            {false && <ErrorMessage>Organization name field is empty</ErrorMessage>}
                        </InputContainer>
                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    What service are you looking for? (Optional)
                                </Text>
                            </Header>
                            <InputFieldComponent
                                id="enter_org_name"
                                label={"Enter your organization name here, e.g., Google"}
                                value={courseName}
                                onChange={handleCourseNameChange}
                                width="100%"
                                isSearchBox={false}
                            />
                            {false && <ErrorMessage>Organization name field is empty</ErrorMessage>}
                        </InputContainer>
                        <InputContainer>
                            <Header>
                                <Text variant={"normal"}
                                    size={"1.1rem"}
                                    fontWeight={"200"}
                                >
                                    Please enter your message
                                </Text>
                            </Header>
                            <InputFieldComponent
                                id="enter_message"
                                label="Enter your message here, e.g., Hi Zoheb..."
                                value={courseName}
                                onChange={handleCourseNameChange}
                                width="100%"
                                isSearchBox={false}
                                isTextArea={true} // ✅ textarea
                            />
                            {false && <ErrorMessage>Organization name field is empty</ErrorMessage>}
                        </InputContainer>
                        <ButtonContainer>
                            <Button variant={"transparent"} onClick={() => { } }>
                                Send
                            </Button>
                        </ButtonContainer>


                    </LeftPortion>

                    <RightPortion>
                        <Text size={"1.1rem"} variant={"normal"} fontWeight={"200"}>Contact information</Text>
                        <Info>
                            <Text size={"0.8rem"} variant={"transparent"} fontWeight={"150"}>+1 (646) 203-8805</Text>
                            <Text size={"0.8rem"} variant={"transparent"} fontWeight={"150"}>zohebhasanofficial@gmail.com</Text>
                        </Info>

                    </RightPortion>
                </Main>

            </BodyWrapper>
        </BodyContainer>
    );
};

export default ProjectBody;

const ButtonContainer = styled.div`
  display: flex;
  width: 70%;

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
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    flex: 3;
    /* background-color: red; */
`

const RightPortion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
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

