import React from 'react';
import Header from '../components/Header/Header';
import HeaderAnimation from '../components/Header/HeaderAnimation';
import Navbar from '../components/Navbar/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HeaderAnimation></HeaderAnimation>
        </div>
    );
};

export default Main;