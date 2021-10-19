import React from 'react';
import { Link } from 'react-router-dom';
import loginimage from '../../images/loginimage.jpg';

const Login = () => {
    return (
        <div className="container d-flex align-items-center">
            <div className="w-50 p-5">
                <img className="img-fluid" src={loginimage} alt="" />
            </div>
            <form className="w-50 ms-5 p-4">

                <div className="row mb-3">
                    <div className="col-sm-10">
                        <h2>Hi !</h2>
                        <h6>Sign in to us or <Link to="/signup">register </Link>with us</h6>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary px-4 fs-bold">Sign In</button>
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

export default Login;