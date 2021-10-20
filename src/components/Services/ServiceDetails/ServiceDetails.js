import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { details } = useParams();
    console.log(details);
    return (
        <div>
            <h2>This is service details component {details}</h2>
        </div>
    );
};

export default ServiceDetails;