import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container fs-5 text-start">
            <h1 className="text-center mt-5">About Us</h1>
            <p className="fs-5">If you’d like to share a compliment or concern about your care at International Specialized Hospital, please contact International Specialized Hospital's Office of Patient Experience.</p>
            <p className="text-center fw-bold">Head Office: <br />
                45,6 New Corolina Road,<br />
                NewYork, USA.
            </p>
            <div className="text-center mt-5">
                <Link to="/"><button className="btn btn-primary ms-3">Back Home</button></Link>
            </div>
        </div>
    );
};

export default Contact;