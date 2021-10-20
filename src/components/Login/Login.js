import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginimage from '../../images/loginimage.jpg';

const Login = () => {
    // use state function to store data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get required variable and method from custom useAuth hook
    const { error, setIsLoading, setError, signInUsingGoogle, signInUsingEmailAndPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // set email to state from user's email input
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    // set password to state from user's password input
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // handle sign in method using email and password
    const handleSignInUsingEmailAndPassword = () => {
        setIsLoading(true);
        signInUsingEmailAndPassword(email, password)
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // handle sign in method using google provider
    const handleSignInUsingGoogle = (e) => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="container d-flex align-items-center">
            <div className="w-50 p-5">
                <img className="img-fluid" src={loginimage} alt="" />
            </div>
            {/* log in form */}
            <form className="w-50 ms-5 p-4">
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <h2>Hi !</h2>
                        <h6>Sign in to us or <Link to="/signup">register </Link>with us</h6>
                    </div>
                </div>
                {/* get email from user's email field */}
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handleEmailChange} type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                </div>
                {/* get password from user's password field */}
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input onChange={handlePasswordChange} type="password" className="form-control" placeholder="Password" required />
                    </div>
                </div>
                {/* button for sign in using email and password */}
                <div className="row mb-0">
                    <div className="col-sm-10">
                        <button onClick={handleSignInUsingEmailAndPassword} type="button" className="btn btn-primary px-4 fs-bold">Sign In</button>
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
                        <button onClick={handleSignInUsingGoogle} type="button" className="btn btn-primary px-4 fs-bold">Sign in with Google </button>
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

export default Login;