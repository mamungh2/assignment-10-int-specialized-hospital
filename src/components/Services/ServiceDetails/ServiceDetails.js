import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    // use state function to store data
    const [services, setServices] = useState([]);

    // fetch data from my own creation json database
    useEffect(() => {
        fetch(`https://mocki.io/v1/daae17d0-5922-4521-b6b8-2d933037927c`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center mt-3">
                {
                    <div className="col-md-4">
                        <img className="w-75" src={services[`${id}`]?.img} alt="" />
                    </div>
                }
                <div className="col-md-7 text-start">
                    <h1 className="mb-4 ms-3">{services[`${id}`]?.title}</h1>
                    <p className="mt-3 ms-3">{services[`${id}`]?.description}</p>
                    <Link to="/"><button className="btn btn-primary ms-3">Back Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;