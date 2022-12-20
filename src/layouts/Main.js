import React from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;