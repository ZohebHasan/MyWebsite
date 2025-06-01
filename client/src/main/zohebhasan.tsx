import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import PageContainer from '../components/ui/templetes/pageTemplete';
import Copyright from '../components/ui/elements/copyright';
import BackgroundAnimation from '../components/ui/backgroundGradient';


//pages
import Home from "../pages/home"

export default function Connect(): React.ReactElement {
    return (
        <Router>
            {/* <Routes>
                <Route path="/" element={<Intro />} />
            </Routes> */}
            <RouterContainer/>
        </Router>
    );
}


function RouterContainer() {
    return (
        <>
            <PageContainer>
                <RoutesWrapper />
                <BackgroundAnimation/>
            </PageContainer>
            <Copyright />
        </>
    );
}


function RoutesWrapper() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/research" element={<>Research</>} />     
        </Routes>
    );
}