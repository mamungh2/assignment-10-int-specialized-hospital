import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center">
            <div className="p-5 w-50">
                <span className="banner-heading fs-4">Welcome to</span>
                <h1 className="text-success">International Specialized Hospital</h1>
                <span className="fs-5">If you need a better health treatment and checkup you can visit us online and offline. Quality service is our main target.</span>
            </div>
        </div>
    );
};

export default Banner;