import React from 'react';
import appointment from '../../../images/appointment.jpg';

const Appointment = () => {
    return (
        <div className="container mt-5">
            <div>
                <h1>Make an <span className="text-success">Appointment</span></h1>
                <h5>You can set an appointment for visiting a doctor easily. Please fill up the form below.</h5>
            </div>

            <div className="d-flex align-items-center">
                <div className="w-50">
                    <img src={appointment} alt="" />
                </div>
                <form className="w-50 mt-3 ms-5 p-4">
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="email" className="form-control" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="phone" className="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <select className="form-select" id="specificSizeSelect">
                                <option defaultValue>Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Child</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary px-4 fs-bold">Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Appointment;