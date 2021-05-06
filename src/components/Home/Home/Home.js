import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div style={{ height: '100%', overflow: 'hidden' }} className="common-background">
            <div className="pt-3">
                <Navbar></Navbar>
            </div>
            <Header></Header>
        </div>
    );
};

export default Home;