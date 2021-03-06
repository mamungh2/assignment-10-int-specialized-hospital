import React from 'react';
import { NavLink } from 'react-router-dom';
import logobrand from '../../../images/logobrand.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const searchIcon = <FontAwesomeIcon className="text-success" icon={faSearch}></FontAwesomeIcon>;

    // get required variable and method from custom useAuth hook
    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* website brands logo */}
                    <div className="img-fluid ps-1">
                        <img className="img-fluid d-block" src={logobrand} alt="" />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* header navigation links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Research"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Research</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/donate"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Donate</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/career"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Career</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-1 mb-2 mb-lg-0">
                            {!user?.displayName ? <li className="nav-item me-0">
                                <NavLink to="/login"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Login</NavLink>
                            </li> :
                                <li className="nav-item me-1">
                                    <span className="text-success">{user?.displayName} </span>
                                    <button className="btn btn-primary btn-sm fs-6" onClick={logOut}>Logout</button>
                                </li>}
                            <li className="nav-item">
                                <NavLink to="/signup"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Register</NavLink>
                            </li>
                        </ul>
                        {/* header search bar */}
                        <form className="d-flex position-relative align-items-center me-2">
                            <input className="form-control bg-light border rounded-pill pe-5" type="search" placeholder="Search " aria-label="Search" />
                            <span className="input-group-append position-absolute end-0">
                                <button className="btn btn-outline-secondary border-0 rounded-pill" type="button">
                                    {searchIcon}
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;