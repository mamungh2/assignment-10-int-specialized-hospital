import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./hospital-data.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container mt-5 px-5">
            <h1>Our Services</h1>
            <p>We have some great services for every people </p>
            <div className="row row-cols-1 row-cols-md-3 gx-5 gy-4 p-4">
                {
                    services?.map(service => <Service key={service.key} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;