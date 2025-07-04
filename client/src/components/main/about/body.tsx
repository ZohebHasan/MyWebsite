import React, { useState } from 'react';
import styled from 'styled-components';
import { useDarkMode } from "../../../contexts/darkMode";




import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';

import About1 from "../../assets/zohebAbout1.jpg";
import About2 from "../../assets/zohebAbout2.jpg";
import About3 from "../../assets/zohebAbout3.jpeg"


import IPFragLight from "../../assets/ipFragLight.png";
import IPFragDark from "../../assets/ipFragDark.png";

import Md5Light from "../../assets/md5Light.png";
import Md5Dark from "../../assets/md5Dark.png";

import PPMLight from "../../assets/ppmLight.png";
import PPMDark from "../../assets/ppmDark.png";

import EnigmaLight from "../../assets/enigmaLight.png";
import EnigmaDark from "../../assets/enigmaDark.png";

import FakeStackDark from "../../assets/fakeStackDark.png";
import FakeStackLight from "../../assets/fakeStackLight.png";

import PromptCraftLight from "../../assets/promptCraftLight.png";
import PromptCraftDark from "../../assets/promptCraftDark.png";

import ProfilesDark from "../../assets/profilesDark.png";
import ProfilesLight from "../../assets/profilesLight.png";

import FeaturesDark from "../../assets/featuresDark.png";
import FeaturesLight from "../../assets/featuresLight.png";

import GithubRepoDark from "../../assets/githubRepoDark.png"
import GithubRepoLight from "../../assets/githubRepoLight.png"

// import Documentation from "../../assets/connectDocumentation.pdf"

import RightDark from "../../assets/rightCircleDark.png";
import RightLight from "../../assets/rightCircleLight.png";


// import MediaScroller from './photoSlider';
import LeftToRightText from '../../ui/elements/leftToRightText';

import ConnaButton from '../../ui/elements/conna';


const ProjectBody: React.FC = () => {

    const { isDarkMode } = useDarkMode();



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
                                    Hi, I’m Zoheb — originally from Dhaka, Bangladesh, now
                                    living in New York. I grew up surrounded by the energy
                                    and challenges of a developing city, and from early on,
                                    I felt a deep urge to be part of something bigger — to
                                    create change, to build things that matter. When I moved
                                    to the U.S. in 2021, that desire only grew stronger.
                                    After finishing high school, I asked myself what path
                                    would give me the freedom to turn my ideas into real
                                    solutions. That’s when I found computer science.
                                    It wasn’t just a career choice — it was a way to
                                    channel my curiosity, creativity, and drive into something
                                    tangible. To me, coding is more than logic and syntax
                                    — it’s a way to build, to express, and to bring ideas
                                    to life that could one day make someone’s world
                                    a little better.

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
                                    I’m currently in my senior year of college. Looking back,
                                    the journey hasn’t always been easy — especially during my
                                    freshman year. Coming to a new country meant navigating
                                    cultural shocks, adjusting to a different academic system,
                                    and learning to express myself in a new language. Everything
                                    felt unfamiliar at first. But I adapted quickly. I learned
                                    to ask questions, to fail and retry, to stay curious and
                                    resilient. I wouldn’t call myself a “perfect student,” but
                                    I’ve grown into someone who understands systems, builds solutions,
                                    and thinks like a computer scientist. College didn’t just teach
                                    me how to write code — it taught me how to grow through change
                                    and keep moving forward.
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
                                    I’m a pretty simple guy with a bunch of things that make
                                    me feel alive. I’ve always had a soft spot for cats —
                                    there’s something calming about their presence. I love cars
                                    too, especially the feeling of being behind the wheel on an
                                    empty road with music blasting. I listen to a lot of artists,
                                    but The Weeknd has a special place in my rotation — his music
                                    just gets it. I also enjoy dressing up for fun, slipping into
                                    cosplay now and then, and whenever I get the chance, I try
                                    to explore new places. Traveling clears my head, gives me
                                    stories. These are the things that keep me grounded, inspired,
                                    and curious.
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

