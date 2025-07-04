import React from 'react';
import styled from 'styled-components';


import DropDownButton from "./dropdownButton";
import { useDarkMode } from '../../../contexts/darkMode';
import Text from './text';
import ColorOptionBar from './colorOptionBar';
import DarkModeBar from './darkModeOptionBar';



const DarkModeDropDown: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <UserProfileContainer>
            <DarkModeBar/>
            <ProfilesContainer $isDarkMode={isDarkMode}>
                <Text size={"0.8rem"} variant={"transparent"} fontWeight="500">
                    System (Defualt)
                </Text>
                <DropDownButton />
            </ProfilesContainer>

        </UserProfileContainer>
    );
};

export default DarkModeDropDown;

const ColorBox = styled.div`
    height: 0.8rem;
    width: 0.8rem;
    background-color: red;
    border-radius: 0.2rem;
`

const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background-color: pink; */
`;

const ProfilesContainer = styled.div<{ $isDarkMode: boolean }>`
    position: relative;
    z-index: 7;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    /* background-color: ${({ $isDarkMode }) => $isDarkMode ? '#565454' : '#a0a0a0'}; */
    background-color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(33, 33, 33, 0.9)' : 'rgba(255, 255, 255, 0.9)'};

`;
