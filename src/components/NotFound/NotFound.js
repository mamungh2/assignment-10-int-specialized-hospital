import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound my-5">
            <h1 className="text-danger">404</h1>
            <h2>Sorry, Page not found</h2>
            <Link to="/"><button className="btn btn-primary mt-3">Back Home</button></Link>
        </div>
    );
};

export default NotFound;