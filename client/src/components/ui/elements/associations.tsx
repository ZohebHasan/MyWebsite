import React from 'react';
import styled from 'styled-components';

import Text from './text';
import ConnectLogo from './connectLogo';



const Associations: React.FC = () => {

  const StonyBrookLogo = "https://zohebhasan.com/assets/stonybrook.webp";
  const RobiLogo = "https://zohebhasan.com/assets/robi.webp"; 
  const NirontorLogo = "https://zohebhasan.com/assets/nirontor.webp";
  const ChocolateApaLogo = "https://zohebhasan.com/assets/chocolateApa.webp";

  const size = 1;
  return (
    <AssociationsContainer>
      <DecorativeLineContainer>
        {/* <Cross>✖</Cross>  */}
        <VerticalLine />
      </DecorativeLineContainer>

      <Text size={"1rem"} variant={"transparent"} fontWeight={"500"}>
        Previous associations
      </Text>

      <Layer>
        <ConnectLogo />
        <StyledLogo src={StonyBrookLogo} alt="Stony Brook Logo" size={size} type="stonybrook" />
        <StyledLogo src={RobiLogo} alt="Robi Logo" size={size} type="robi" />
      </Layer>

      <Layer>
        <StyledLogo src={NirontorLogo} alt="Nirontor Logo" size={size} type="nirontor" />
        <StyledLogo src={ChocolateApaLogo} alt="Chocolate Apa Logo" size={size} type="chocolateapa" />
      </Layer>

      <DecorativeLineContainer>
        <VerticalLine />
        {/* <Cross>✖</Cross>  */}
      </DecorativeLineContainer>
    </AssociationsContainer>
  );
};

export default Associations;

// ----- STYLED COMPONENTS -----

const AssociationsContainer = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`;

const Layer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const StyledLogo = styled.img<{ size: number; type: string }>`
  width: ${({ type }) => {
    if (type === 'stonybrook') return '3.2rem';
    if (type === 'robi') return '3rem';
    if (type === 'nirontor') return '4rem';
    if (type === 'chocolateapa') return '3.5rem';
    return '2rem';
  }};

  @media (max-width: 1280px) {
    width: ${({ type }) => {
    if (type === 'stonybrook') return '1.8rem';
    if (type === 'robi') return '2rem';
    if (type === 'nirontor') return '2.2rem';
    if (type === 'chocolateapa') return '2rem';
    return '1.5rem';
  }};
  }

  @media (max-width: 768px) {
    width: ${({ type }) => {
    if (type === 'stonybrook') return '2.5rem';
    if (type === 'robi') return '2rem';
    if (type === 'nirontor') return '2rem';
    if (type === 'chocolateapa') return '2rem';
    return '1rem';
  }};
  }
`;

const DecorativeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  margin: 0.5rem 0;
`;

const VerticalLine = styled.div`
  width: 1.5px;
  height: 1.5rem;
  opacity: 0.6;
  background-color: ${({ theme }) => theme.textColor || '#000'};
`;

const Cross = styled.div`
  font-family: inherit;
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.6;
  line-height: 1;
  /* text-shadow: 0.5px 0 0, -0.5px 0 0, 0 0.5px 0, 0 -0.5px 0;  */
`;

