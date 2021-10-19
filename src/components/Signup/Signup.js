import React from 'react';
import { Link } from 'react-router-dom';
import regform from '../../images/regform.jpg';

const Signup = () => {
    return (
        <div className="container d-flex align-items-center">
            <div className="w-50 p-5">
                <img className="img-fluid" src={regform} alt="" />
            </div>
            <form className="w-50 mt-3 ms-5 p-4">
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <h2>Create an account</h2>
                        <h6>Already a member? <Link to="/login">Sign in</Link></h6>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary px-4 fs-bold">Create account</button>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col-sm-10">
                        <p className="fs-5 mb-1">-----or-----</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary px-4 fs-bold">Sign in with Google </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;