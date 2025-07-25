import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import { useSidebar } from '../contexts/sidebar';


import Header from '../components/main/home/header';
import HomeBody from '../components/main/home/body';


import AboutBody from "../components/main/about/body";
import AboutBodyMobile from "../components/main/about/bodyMobile"

import ContactBody from '../components/main/contact/body';
import ContactBodyMobile from '../components/main/contact/bodyMobile'

import ContactBodySuccessful from "../components/main/contact/bodySuccessful"
import ContactBodySuccessfulMobile from "../components/main/contact/bodySuccessfulMobile"


import ProjectBody from '../components/main/projects/body';
import ProjectBodyMobile from "../components/main/projects/bodyMobile"


import PageContainer from '../components/ui/templetes/pageTemplete';
import Copyright from '../components/ui/elements/copyright';
import Release from '../components/ui/elements/releaseVersion';
import BackgroundAnimation from '../components/ui/backgroundGradient';
import Sidebar from '../components/main/sideBar';
import Associations from '../components/ui/elements/associations';
import { useScroll } from '../contexts/scroll';

import { useSendMessage } from '../contexts/sendMessage';

import DotLoader from '../components/ui/elements/loading';

import Intro from '../components/main/intro';
import BrowserDetection from '../components/ui/elements/browserDetected';
import InfinityPlane from '../components/ui/elements/infinityPlaneBar';


const Main: React.FC = () => {
  const { loading, sentSuccessfully } = useSendMessage();
  const [showSuccessComponent, setShowSuccessComponent] = React.useState(false);
  const [isIntroducing, setIsIntroducing] = React.useState(true); // 🌟 new
  const { isSidebarOpen } = useSidebar();
  const { homeRef, projectsRef, aboutRef, contactRef } = useScroll();
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= 768);


  // Disable scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  // Handle showSuccessComponent logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (sentSuccessfully) {
      timeout = setTimeout(() => {
        setShowSuccessComponent(true);
      }, 1600);
    } else {
      setShowSuccessComponent(false);
    }
    return () => clearTimeout(timeout);
  }, [sentSuccessfully]);

  // 🌟 Intro timeout
  useEffect(() => {
    const introTimeout = setTimeout(() => setIsIntroducing(false), 3000);
    return () => clearTimeout(introTimeout);
  }, []);

  



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDisabled = loading;

  return (
    <>
      <IntroContainer $show={isIntroducing}>
        <Intro />
      </IntroContainer>
      <MainPageContainer $show={!isIntroducing}>
        <BrowserDetection />
        <DotLoader />
        <MainPageWrapper $isSidebarOpen={isSidebarOpen} $isDisabled={isDisabled}>
          <Sidebar />
          <Copyright />
          <Release />
          <Header />
          <HomepageContainer ref={homeRef}>
            <PageContainer>
              <InfinityPlane/>
              <HomeBody />
              {!isMobile && <BackgroundAnimation />}
            </PageContainer>
          </HomepageContainer>
          <PreviousAssociationContainer>
            <Associations />
          </PreviousAssociationContainer>
          <ProjectsBody ref={projectsRef}>
            {isMobile ? <ProjectBodyMobile /> : <ProjectBody />}
          </ProjectsBody>
          <ProjectsBody ref={aboutRef}>
            {isMobile ? <AboutBodyMobile /> : <AboutBody />}

          </ProjectsBody>
          <ContactpageContainer ref={contactRef}>
            {showSuccessComponent ? isMobile ? <ContactBodySuccessfulMobile /> : <ContactBodySuccessful /> : isMobile ? <ContactBodyMobile /> : <ContactBody />}
          </ContactpageContainer>
        </MainPageWrapper>
      </MainPageContainer>
    </>
  );
};
export default Main;

const ProjectsBody = styled.div`
  width: 100%;
  min-height: 100vh;      // Ensures it fills at least the screen
  display: flex;
  flex-direction: column;
`

const PreviousAssociationContainer = styled.div`
  padding-top: 2rem;
  margin-top: 1rem;
`

const ContactpageContainer = styled.div`

  width: 100%;
  min-height: 100vh;      // Ensures it fills at least the screen
  display: flex;
  flex-direction: column;
`

const HomepageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;      // Ensures it fills at least the screen
  display: flex;
  flex-direction: column;
`;

const MainPageWrapper = styled.div<{ $isSidebarOpen?: boolean; $isDisabled: boolean }>`
   width: 100%;
  min-height: 100vh;
  overflow-y: ${({ $isSidebarOpen, $isDisabled }) =>
    $isSidebarOpen || $isDisabled ? 'hidden' : 'auto'}; // 🔥 block scroll on loading
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.1 : 1)};
`
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;


const IntroContainer = styled.div<{ $show: boolean }>`
  animation: ${({ $show }) => ($show ? fadeIn : fadeOut)} 1.5s ease-in-out forwards;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  /* background: black; */
`;

const MainPageContainer = styled.div<{ $show: boolean }>`  // ✅ add type
  animation: ${({ $show }) => ($show ? fadeIn : fadeOut)} 2s ease-in-out forwards;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
`;