import React from 'react';

const Research = ({ research }) => {
    const { title, img, description } = research;
    return (
        <div>
            <div className="card mb-0 h-100" style={{ "maxWidth": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description.slice(0, 100)}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary px-4">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;