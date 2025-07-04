import React from 'react';

import BodyContainer from '../../ui/templetes/bodyTemplete';

import Top from './smallComponents/top'



const Body: React.FC = () => {
    return (
        <BodyContainer flexDirection={"column"}>
            <Top />
        </BodyContainer>
    );
};

export default Body;


