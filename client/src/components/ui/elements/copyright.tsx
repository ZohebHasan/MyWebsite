import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../../../contexts/darkMode";


const Copyright: React.FC= () => {
  const {isDarkMode} = useDarkMode();
  return (
    <CopyRightText $isDarkMode={isDarkMode}>
       © 2025 Zoheb Hasan. All rights reserved.
    </CopyRightText>
  );
};

export default Copyright;
const CopyRightText = styled.div<{ $isDarkMode: boolean }>`
  z-index: 2;
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 30px;
  padding-bottom: 5px;
  font-size: 12px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')}; 
`;
