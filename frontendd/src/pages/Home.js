import React from 'react';
import Heart from '../components/Heart';
import Notifications from '../components/Notifications';
import '../styles/Home.css'; // Import Home.css

const Home = () => {
    return (
        <div className="main-content">
            <Heart />
            <Notifications />
        </div>
    );
};

export default Home;