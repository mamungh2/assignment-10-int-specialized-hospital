import React from 'react';

const Service = ({ service }) => {
    const { title, img, description } = service;
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <div className="w-75 mx-auto">
                        <img src={img} className="card-img-top img-fluid" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description.slice(0, 100)}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary px-4">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;