import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../../../contexts/darkMode";


const Release: React.FC= () => {
  const {isDarkMode} = useDarkMode();
  return (
    <CopyRightText $isDarkMode={isDarkMode}>
       Initial Release – Version 1.0.0
    </CopyRightText>
  );
};

export default Release;
const CopyRightText = styled.div<{ $isDarkMode: boolean }>`
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-left: 30px;
  padding-bottom: 5px;
  font-size: 12px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')}; 
`;
