import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSidebar } from '../contexts/sidebar';


import Header from '../components/main/home/header';
import HomeBody from '../components/main/home/body';
import AboutBody from "../components/main/about/body";
import ContactBody from '../components/main/contact/body';
import ProjectBody from '../components/main/projects/body';


import PageContainer from '../components/ui/templetes/pageTemplete';
import Copyright from '../components/ui/elements/copyright';
import Release from '../components/ui/elements/releaseVersion';
import BackgroundAnimation from '../components/ui/backgroundGradient';
import Sidebar from '../components/main/sideBar';
import Associations from '../components/ui/elements/associations';


const Main: React.FC = () => {

  const { isSidebarOpen } = useSidebar();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);


  return (
    <MainPageContainer $isSidebarOpen={isSidebarOpen}>
      <Sidebar/>
      <Copyright/>
      <Release/>
      <Header/>
      <HomepageContainer>
        <PageContainer>
          <HomeBody/>
          <BackgroundAnimation />
        </PageContainer>
      </HomepageContainer>
      <PreviousAssociationContainer>
        <Associations/>
      </PreviousAssociationContainer>
      <ProjectsBody>
        <ProjectBody/>
      </ProjectsBody>
      <ProjectsBody>
        <AboutBody/>
      </ProjectsBody>
      <ContactpageContainer>
        <ContactBody/>
      </ContactpageContainer>
    </MainPageContainer>

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


const MainPageContainer = styled.div<{ $isSidebarOpen?: boolean }>`
  width: 100%;
  min-height: 100vh;
  overflow-y: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'hidden' : 'auto')};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;