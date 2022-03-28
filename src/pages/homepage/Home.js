import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainContent from './content/MainContent';

const Home = () => {
    return (
        <main>
            <Header />
            <MainContent />
            <Footer />
        </main>
    );
};

export default Home;