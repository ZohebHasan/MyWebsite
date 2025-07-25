import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../../../contexts/darkMode";

import Text from "./text";

const Copyright: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <CopyRightText $isDarkMode={isDarkMode}>
      <Text size="0.7" variant= "transparent" fontWeight="200">
        © 2025 Zoheb Hasan. All rights reserved.
      </Text>

    </CopyRightText>
  );
};

export default Copyright;

const CopyRightText = styled.div<{ $isDarkMode: boolean }>`
  z-index: 2;
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  /* font-size: 0.6rem; */
  /* color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};  */
`;
