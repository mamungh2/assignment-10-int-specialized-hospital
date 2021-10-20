import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import regform from '../../images/regform.jpg';

const Signup = () => {
    // use state function to store data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get required variable and method from custom useAuth hook
    const { error, createUserUsingEmailAndPassword, signInUsingGoogle } = useAuth();

    // set name to state from user's name input
    const handleNameChange = e => {
        setName(e.target.value);
    }
    // set email to state from user's email input
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    // set password to state from user's password input
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    // handle registration
    const handleRegistration = () => {
        createUserUsingEmailAndPassword(name, email, password)
    }

    return (
        <div className="container d-flex align-items-center">
            <div className="w-50 p-5">
                <img className="img-fluid" src={regform} alt="" />
            </div>
            {/* registration form */}
            <form className="w-50 mt-3 ms-5 p-4">
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <h2>Create an account</h2>
                        <h6>Already a member? <Link to="/login">Sign in</Link></h6>
                    </div>
                </div>
                {/* get name from user's name field */}
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handleNameChange} type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                </div>
                {/* get email from user's email field */}
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handleEmailChange} type="email" className="form-control" placeholder="Email" required />
                    </div>
                </div>
                {/* get password from user's password field */}
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handlePasswordChange} type="password" className="form-control" placeholder="Password" required />
                    </div>
                </div>
                {/* handle registration */}
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
                {/* button for sign in using google provider */}
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <button onClick={signInUsingGoogle} type="button" className="btn btn-primary px-4 fs-bold">Sign in with Google </button>
                    </div>
                </div>
                {/* display error message in website  */}
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