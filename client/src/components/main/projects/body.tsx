import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDarkMode } from "../../../contexts/darkMode";


import BodyContainer from '../../ui/templetes/bodyTemplete';
import Text from '../../ui/elements/text';
import IntroVideo from './intro';

import Documentation from "../../assets/connectDocumentation.pdf"

import RightDark from "../../assets/rightCircleDark.png";
import RightLight from "../../assets/rightCircleLight.png";


import MediaScroller from './photoSlider';
import ConnectFeatureScroller from './connectFeaturePhotoSlider';
import LeftToRightText from '../../ui/elements/leftToRightText';
import ProjectPhotoSlider from './projectPhotoSlider';
import ConnaButton from '../../ui/elements/conna';


const ProjectBody: React.FC = () => {

    const { isDarkMode } = useDarkMode();
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "Prompt Craft",
            description:
                "Prompt Craft is an interactive project that explores how the phrasing and structure of language alone can guide the behavior of Large Language Models (LLMs) like ChatGPT. Instead of relying on fine-tuning or additional training, this project demonstrates how carefully designed prompts can achieve accurate sentiment classification by leveraging the model’s inherent reasoning abilities. Through hands-on experimentation, users can craft different prompt templates, evaluate their effectiveness, and gain deeper insights into how LLMs interpret and respond to natural language. PromptCraft serves as both a tool and a conceptual entry point into the emerging field of prompt engineering.",
            link: "https://github.com/ZohebHasan/promptCraft",
        },
        {
            title: "Internet Protocol Fragmentation",
            description:
                "This project showcases a low-level implementation of data transmission by simulating how internet packets are broken down and reassembled. Instead of using existing networking tools, I wrote everything from scratch in C to understand how data travels over networks. The program takes large chunks of data, splits them into smaller “packets,” adds important delivery information (like addresses and security checks), and then puts everything back together accurately on the receiving end. This hands-on experience deepened my understanding of how the internet functions beneath the surface and reflects my ability to work with memory management, binary operations, and systems-level thinking—skills that are critical for performance-sensitive software and infrastructure roles.",
            link: "https://github.com/ZohebHasan/IP-Fragmentation",
        },
        {
            title: "Fake Stack Overflow",
            description:
                "This project is a full-stack web application inspired by Stack Overflow, built using React, Node.js, Express, and MongoDB. It allows users to register, ask and answer questions, upvote/downvote content, comment, and manage profiles, including reputation-based privileges. Key features include secure authentication with hashed passwords, dynamic pagination, search functionality, and administrative controls. The project demonstrates my ability to design and implement scalable, user-centric applications with complex data relationships and asynchronous server communication.",
            link: "https://github.com/ZohebHasan/FakeStackOverflow---Full-Stack",
        },
        {
            title: "MD5 Password Cracking (White Hat)",
            description:
                "This project showcases a collection of password recovery tools using various attack strategies on MD5-hashed credentials, including brute force, dictionary attacks, rainbow table lookups, and hybrid methods with salting and transformations. Designed in Java with concurrent execution for efficiency, the system processes input files of users and hashes, attempts to recover original passwords, and reports performance metrics such as success rate and total time. It demonstrates strong proficiency in cybersecurity concepts, hashing algorithms, multithreaded programming, and algorithmic problem-solving.",
            link: "https://github.com/ZohebHasan/MD5_Password_Cracking.git",
        },
        {
            title: "PPM Pixel Editor",
            description:
                "This project is a lightweight image editor written in C/C++ that enables command-line manipulation of .ppm (Portable Pixmap) and .sbu image files. It supports advanced pixel-level operations including region copying, pasting, cloning, and format conversion. Users can modify specific areas of an image using structured CLI flags, efficiently compress output using custom color tables, and handle repetitive patterns through run-length encoding. The editor robustly validates input/output paths, supports format-specific logic, and handles both ASCII and binary image data types. Developed with modular code and structured error handling, this project reflects strong system-level programming skills, custom file parsing, and image data processing proficiency.",
            link: "https://github.com/ZohebHasan/PPM-photo-pixel-editor-with-command-line",
        },
        {
            title: "Enigma Machine – WWII Cipher Simulator",
            description:
                "This project is a Java-based simulation of the historic Enigma Machine used by the Germans during World War II for secure communication. Designed with a focus on software architecture and modularity, the project allows users to encrypt and decrypt messages by configuring rotors, plugboards, and reflectors—mirroring the original machine’s functionality. It includes error-handling for user input, dynamic rotor rotation, and a full end-to-end encryption pipeline, all through an interactive terminal interface. This project demonstrates a strong understanding of object-oriented programming, algorithmic thinking, and cryptographic principles.",
            link: "https://github.com/ZohebHasan/Enigma_Machine",
        },
    ];


    return (
        <BodyContainer flexDirection={"column"}>
            <BodyWrapper>
                <TitleWrapper>
                    <Text size={"4.5rem"} variant={"personal"} fontWeight={"100"}>Projects</Text>
                </TitleWrapper>
                <ProjectOne>
                    {/* <ProjectTitleWrapper>
                        <ProjectTitle>
                            <Underlined>
                                <Text size="2rem" variant="transparent" fontWeight="100">Project 001:</Text>

                                <Text size="2rem" variant="normal" fontWeight="100">Connect</Text>
                            </Underlined>
                        </ProjectTitle>
                        <ProjectStatusBar>
                            <DepricatedStatus>
                                <Text size={"0.7rem"} variant={"normal"} fontWeight={"100"}>Depricated</Text>
                            </DepricatedStatus>
                            <DepricatedStatus>
                                <Text size={"0.7rem"} variant={"normal"} fontWeight={"100"}>Publicized</Text>
                            </DepricatedStatus>
                        </ProjectStatusBar>
                    </ProjectTitleWrapper> */}

                    <Intro>

                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>Project 001: Connect</Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    Connect was my most ambitious project — a privacy-first social
                                    media platform built with a team of six engineers to give users
                                    full control over their digital lives. I led the development
                                    of a secure, decentralized MERN-based system featuring Signal
                                    Protocol encryption, smart content recommendations, and a
                                    scalable architecture. Though we couldn’t secure funding,
                                    I open-sourced the entire codebase with documentation and 370+
                                    commits, keeping the vision of ethical, user-owned platforms alive.
                                </Text>

                                <ButtonWrapper>
                                    <ButtonContainer
                                        onClick={() => window.open("https://github.com/ZohebHasan/Connect", "_blank")}
                                    >
                                        <LeftToRightText size={"1rem"}>
                                            See the full codebase
                                        </LeftToRightText>
                                        <RightIcon src={isDarkMode ? RightDark : RightLight} />
                                    </ButtonContainer>
                                </ButtonWrapper>
                            </IntroTextWrapper>
                        </IntroText>
                        <VideoContainer>
                            <IntroVideo />
                        </VideoContainer>
                    </Intro>
                    <Intro>
                        <FeatureContainer>
                            {/* <ProfilePhotos src={isDarkMode ? ProfilesLight : ProfilesDark} /> */}
                            <ConnectFeatureScroller />
                        </FeatureContainer>
                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>Product Idea & Key Features</Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    Connect’s dynamic profile system allowed users to switch between personal, professional, and educational identities—each with tailored privacy settings, content filters, and engagement tools—giving users full control over how they presented themselves in different contexts. This flexibility positioned Connect as a competitor to LinkedIn, Meta, and Piazza. To ensure safety and privacy, features like Data Protection Mode blocked screenshots, downloads, and unauthorized copying, while Profile Encryption secured all messages, photos, and videos. Users could also monetize their content, filter sensitive material with Censor Mode, and block inappropriate interactions by default with Restricted Mode—together creating a secure, user-first social platform.
                                </Text>
                            </IntroTextWrapper>
                        </IntroText>

                    </Intro>
                    <Intro>

                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>Conna</Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    One of the most ambitious components of Connect was Conna. She was an AI-powered multilingual digital assistant designed to revolutionize how users interact within the platform. Built to understand and respond in any language using GPT-4 or Gemini paired with Wavenet TTS, Conna aimed to make communication seamless, inclusive, and intuitive across cultural and linguistic boundaries. It was envisioned not just as a chatbot, but as a personalized interface into a decentralized, privacy-oriented social network. Unfortunately, despite our passion and early progress, we were unable to bring Conna to life due to a lack of funding and engineering resources.
                                </Text>
                            </IntroTextWrapper>
                        </IntroText>
                        <ConnaContainer>
                            <ConnaButton />
                        </ConnaContainer>

                    </Intro>
                    <UISnapshotsContainer>
                        <TitleWrapper>
                            <Text size={"1.4rem"} variant={"normal"} fontWeight={"200"}>UI Screenshots: </Text>
                        </TitleWrapper>
                        <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                            The screenshots below are from the beta prototype of
                            Connect — a project we poured our hearts into
                            but were ultimately unable to publish or secure
                            funding for. These screens represent some of
                            our core ideas, from onboarding to profile
                            management and post creation, all brought
                            to life with careful attention to design
                            and user experience. While the platform
                            never made it to launch, these snapshots serve
                            as a glimpse into what we aspired to build.
                        </Text>
                        <MediaScroller />
                    </UISnapshotsContainer>

                    <Intro>
                        <VideoContainer>
                            <iframe
                                src={Documentation}
                                width="100%"
                                height="750px"
                                style={{
                                    borderRadius: "1rem",
                                    boxShadow: "0 0 2px #ff00ff2b",
                                    border: "1px solid #ff00ff1b",
                                    backgroundColor: isDarkMode ? "#1a1a1a" : "#f9f9f9"
                                }}
                                title="E2EE Documentation"
                            />
                        </VideoContainer>
                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>Documentation </Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    The Connect Developer Documentation provides a comprehensive
                                    overview of the platform’s technical architecture, setup
                                    instructions, and core functionalities. It begins with a
                                    vision statement outlining Connect’s goal to offer a decentralized,
                                    privacy-first social media experience divided into personal,
                                    professional, and educational streams. The documentation
                                    then walks through setting up the React client, Node.js
                                    server, and MongoDB database, including important notes
                                    on dependency management and secure connection strings.
                                    It also details version control best practices using Git
                                    and GitHub for collaboration. A major focus is placed
                                    on security, highlighting the integration of the Signal
                                    Protocol for end-to-end encryption of both messages and
                                    profiles, as well as TLS for transport-level encryption.
                                    The document also explains the platform’s advanced content
                                    moderation system, which includes image classification
                                    using TensorFlow and PyTorch, model optimization for
                                    mobile with TensorFlow Lite, and the use of Hugging Face
                                    and OpenNSFW2 for real-time content filtering. This
                                    documentation serves as a vital internal reference for
                                    developers building and maintaining the Connect platform.
                                </Text>
                            </IntroTextWrapper>
                        </IntroText>
                    </Intro>
                </ProjectOne>
                <ProjectOne>
                    <ProjectTitleWrapper>
                        <ProjectTitle>
                            <Underlined>
                                <Text size="2rem" variant="transparent" fontWeight="100">Additional Projects:</Text>
                            </Underlined>
                        </ProjectTitle>
                    </ProjectTitleWrapper>
                    <UISnapshotsContainer>
                        <TitleWrapper>
                            <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                Connect wasn’t the only project I’ve been involved in.
                                Throughout my journey as a computer scientist, I’ve worked on, contributed to, and collaborated across a variety of projects. What set Connect apart was the time, vision, and polish—it was the only project I dedicated over a year and a half to, shaping it into a complete, user-facing product. That said, my other projects were equally significant in scope and technical depth, though many were focused on backend logic or terminal-based interfaces rather than polished UIs.
                            </Text>
                        </TitleWrapper>
                    </UISnapshotsContainer>
                    <Intro>
                        <FeatureContainer>
                            <ProjectPhotoSlider index={currentIndex} setIndex={setCurrentIndex} />
                        </FeatureContainer>
                        <IntroText>
                            <IntroTextWrapper>
                                <Text size={"1.2rem"} variant={"normal"} fontWeight={"200"}>
                                    {projects[currentIndex].title}
                                </Text>
                                <Text size={"1rem"} variant={"transparent"} fontWeight={"200"}>
                                    {projects[currentIndex].description}
                                </Text>
                                <ButtonWrapper>
                                    <ButtonContainer
                                        onClick={() => window.open(projects[currentIndex].link, "_blank")}
                                    >
                                        <LeftToRightText size={"1rem"}>
                                            See {projects[currentIndex].title}
                                        </LeftToRightText>
                                        <RightIcon src={isDarkMode ? RightDark : RightLight} />
                                    </ButtonContainer>
                                </ButtonWrapper>
                            </IntroTextWrapper>
                        </IntroText>

                    </Intro>
                </ProjectOne>


            </BodyWrapper>
        </BodyContainer>
    );
};

export default ProjectBody;

const FeatureContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 1rem;
     border-radius: 1rem;

`

const VideoContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 1rem;
     border-radius: 1rem;
    border: 1px solid #ff00ff1b;
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
  object-fit: contain;
    border-radius: 1rem;
    /* border: 0.1px solid #ff00ff1b; */
    /* box-shadow: 0 0 2px #ff00ff2b; */
`;



const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease;
`;



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

