import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import regform from '../../images/regform.jpg';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, createUserUsingEmailAndPassword, signInUsingGoogle } = useAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = () => {
        createUserUsingEmailAndPassword(name, email, password)
    }

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
                        <input onChange={handleNameChange} type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handleEmailChange} type="email" className="form-control" placeholder="Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handlePasswordChange} type="password" className="form-control" placeholder="Password" required />
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col-sm-10">
                        <button onClick={handleRegistration} type="button" className="btn btn-primary px-4 fs-bold">Create account</button>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col-sm-10">
                        <p className="fs-5 mb-1">-----or-----</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <button onClick={signInUsingGoogle} type="button" className="btn btn-primary px-4 fs-bold">Sign in with Google </button>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <div className="text-danger fs-4">{error}</div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Signup;