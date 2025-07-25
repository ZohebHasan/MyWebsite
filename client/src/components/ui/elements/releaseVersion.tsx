import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../../../contexts/darkMode";

import Text from "./text";

const Release: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <CopyRightText $isDarkMode={isDarkMode}>
      <Text size="0.7" variant="transparent" fontWeight="200">
        Stable Release – Version 1.0.1
      </Text>
    </CopyRightText>
  );
};

export default Release;
const CopyRightText = styled.div<{ $isDarkMode: boolean }>`
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-left: 1.3rem;
  padding-bottom: 0.5rem;
  /* font-size: 0.6rem; */
  /* color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};  */
`;
