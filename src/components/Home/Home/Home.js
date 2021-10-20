import React from 'react';
import Services from '../../Services/Services';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Researches from '../Researches/Researches';

const Home = () => {
    return (
        <div>
            {/* call various components to display in home page */}
            <Banner></Banner>
            <Appointment></Appointment>
            <Services></Services>
            <Researches></Researches>
        </div>
    );
};

export default Home;