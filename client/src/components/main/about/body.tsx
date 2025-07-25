import React, { useState } from 'react';
import styled from 'styled-components';

import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';

const ProjectBody: React.FC = () => {

    const About1 = "https://zohebhasan.com/assets/zohebAbout1.webp";
    const About2 = "https://zohebhasan.com/assets/zohebAbout2.webp";
    const About3 = "https://zohebhasan.com/assets/zohebAbout3.webp";

    return (
        <BodyContainer flexDirection={"column"}>
            <BodyWrapper>
                <TitleWrapper>
                    <Text size={"4.5rem"} variant={"personal"} fontWeight={"100"}>About</Text>
                </TitleWrapper>
                <ProjectOne>
                    <Intro>
                        <VideoContainer>
                            <ProfilePhotos src={About1} />
                        </VideoContainer>
                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>
                                    Who am I?
                                </Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    Hi, I’m Zoheb, originally from Dhaka, Bangladesh, now living in New York. I grew up surrounded by the energy and challenges of a developing city, and from early on, I felt a deep urge to be part of something bigger. I wanted to create change and build things that matter. When I moved to the U.S., that desire only grew stronger.

                                    After finishing high school, I asked myself what path would give me the freedom to turn my ideas into real solutions. That’s when I found computer science. It wasn’t just a career choice; it was a way to channel my curiosity, creativity, and drive into something tangible. To me, coding is more than logic and syntax. It is a way to build, to express, and to bring ideas to life that could one day make someone’s world a little better.

                                </Text>
                            </IntroTextWrapper>
                        </IntroText>

                    </Intro>
                    <Intro>

                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>
                                    My Academics
                                </Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    I’m currently in my senior year at Stony Brook University, where I’ve grown both academically and personally. The Computer Science program is rigorous, fast-paced, and filled with incredibly smart people. It challenges you to think critically and stay sharp.

                                    When I arrived, everything was unfamiliar. I had just moved to a new country and was adjusting to a different academic culture and way of communicating. It was tough at first, but I adapted. I asked questions, made mistakes, and learned quickly.

                                    I may not be a perfect student, but I’ve become someone who understands how systems work and how to build better ones. Stony Brook taught me to stay curious, handle pressure, and keep going even when things get hard.

                                </Text>
                            </IntroTextWrapper>
                        </IntroText>
                        <VideoContainer>
                            <ProfilePhotos src={About2} />
                        </VideoContainer>
                    </Intro>
                    <Intro>
                        <VideoContainer>
                            <ProfilePhotos src={About3} />
                        </VideoContainer>
                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>
                                    Things I like
                                </Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    I’m a pretty simple guy with a bunch of things that make me feel alive. I’ve always had a soft spot for cats — there’s something calming about their presence. I love cars too, especially the feeling of being behind the wheel on an empty road with music blasting. I listen to a lot of artists, but The Weeknd has a special place in my rotation. His music just gets it. I also enjoy dressing up for fun, slipping into cosplay now and then, and whenever I get the chance, I try to explore new places. Traveling clears my head and gives me stories. These are the things that keep me grounded, inspired, and curious.
                                </Text>
                            </IntroTextWrapper>
                        </IntroText>

                    </Intro>
                </ProjectOne>


            </BodyWrapper>
        </BodyContainer>
    );
};

export default ProjectBody;

const VideoContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 1rem;
     border-radius: 1rem;
    border: 0.1px solid #ff00ff1b; 
    box-shadow: 0 0 2px #ff00ff2b;
    /* background-color: blue; */
`

const ConnaContainer = styled.div`
  display: flex;
  /* background-color: pink; */
  /* justify-content: flex-end; */
  width: 100%;
  flex: 1;
  /* margin-right: 1.25rem;   */
`;

const ButtonWrapper = styled.div`
    /* background-color: blue; */
    display: flex;
`

const ButtonContainer = styled.div`
    /* background-color: red; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.7;
        transform: scale(1.03);
    }

    &:active {
        transform: scale(1);
    }
`

const RightIcon = styled.img`
    width: 1.5rem;
`

const DocumentWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  canvas {
    max-width: 100%;
    height: auto !important;
  }
`;

const ProjectTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: pink; */
    width: 100%;
`

const UISnapshotsContainer = styled.div`
    /* background-color: red; */
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    /* min-height: 100vh; */
    
`

const ProfilePhotos = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
    border-radius: 1rem;
    /* border: 0.1px solid #ff00ff1b; */
    /* box-shadow: 0 0 2px #ff00ff2b; */
`;

const IntroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: pink; */
`



const IntroText = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    /* background-color: red; */
    flex: 1;
`

const Intro = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
    margin-top: 3rem;
`

const DepricatedStatus = styled.div`
    padding: 0.1rem 0.3rem;
    /* background-color: #80808050; */
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #676767;

`

const ProjectStatusBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    /* background-color: orange; */
`

const ProjectTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;;
    /* background-color: blue; */
    
`
const Underlined = styled.div`

  border-bottom: 1px solid currentColor;
   /* optional: space between text and line */
`;


const ProjectOne = styled.div`
    display: flex;
    width: 100%;;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 3rem;
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
`;

