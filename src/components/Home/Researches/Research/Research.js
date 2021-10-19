import React from 'react';

const Research = ({ research }) => {
    const { key, title, img, description } = research;
    return (
        <div>
            <div class="card mb-0 h-100" style={{ "maxWidth": "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex flex-column">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description.slice(0, 100)}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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