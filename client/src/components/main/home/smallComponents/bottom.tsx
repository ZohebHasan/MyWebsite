import React from 'react';
import styled from 'styled-components';


import Text from '../../../ui/elements/text';

import ConnectLogo from '../../../ui/elements/connectLogo';
import StonyBrookLogo from '../../../assets/stonybrook.png';
import RobiLogo from '../../../assets/robi.svg';


import NirontorLogo from '../../../assets/nirontor.png';
import ChocolateApaLogo from '../../../assets/chocolateApa.png';


const Bottom: React.FC = () => {

  const size = 1;

  return (
    <BottomContainer>
      <Text size={"1rem"} variant={"transparent"} fontWeight={"500"}> Previous associations</Text>
      <Layer>
        <ConnectLogo />
        <StyledLogo src={StonyBrookLogo} alt="Logo" size={size} type="stonybrook" />
        <StyledLogo src={RobiLogo} alt="Logo" size={size} type="robi" />
      </Layer>
      <Layer>
        <StyledLogo src={NirontorLogo} alt="Logo" size={size} type="nirontor" />
        <StyledLogo src={ChocolateApaLogo} alt="Logo" size={size} type="chocolateapa" />
      </Layer>

    </BottomContainer>
  );
}

export default Bottom;

const StyledLogo = styled.img<{ size: number; type: string }>`
  width: ${({ type }) => {
    if (type === 'stonybrook') return '3.2rem';
    if (type === 'robi') return '3rem';
    if (type === 'nirontor') return '4rem';
    if (type === 'chocolateapa') return '3.5rem';
    return '2rem'; // fallback default
  }};

  @media (max-width: 1280px) {
    width: ${({ type }) => {
    if (type === 'stonybrook') return '1rem';
    if (type === 'robi') return '1.5rem';
    if (type === 'nirontor') return '1.2rem';
    if (type === 'chocolateapa') return '1.4rem';
    return '1rem'; // fallback default
  }};
  }
`;


const Layer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`



const BottomContainer = styled.div`
  /* margin-top: 1.5625rem;  */
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  /* background-color: red; */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right; 
  flex: 3.2;
`;

const ConnaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1.25rem;  
`;
