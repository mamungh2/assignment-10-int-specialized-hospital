import React, { useEffect, useState } from 'react';
import Research from './Research/Research';

const Researches = () => {
    const [researches, setResearches] = useState([]);

    useEffect(() => {
        fetch('./research-data.json')
            .then(response => response.json())
            .then(data => setResearches(data))
    }, []);

    return (
        <div className="container mt-5">
            <h1>Our Researches and Inventions</h1>
            <p>Our great doctors and specialists invented some evolutionary treatment and equipment and medicine. </p>
            <div className="row row-cols-1 row-cols-md-2 gx-5 gy-4 p-4">
                {
                    // services.map(service => <Service key={service.key} service={service}></Service>)
                    researches.map(research => <Research key={research.key} research={research}></Research>)
                }
            </div>
        </div>
    );
};

export default Researches;