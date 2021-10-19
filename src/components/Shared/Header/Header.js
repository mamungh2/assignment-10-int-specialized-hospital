import React from 'react';
import { NavLink } from 'react-router-dom';
import logobrand from '../../../images/logobrand.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const searchIcon = <FontAwesomeIcon className="text-success" icon={faSearch}></FontAwesomeIcon>
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="img-fluid">
                        <img className="img-fluid d-block" src={logobrand} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
                            <li className="nav-item me-0">
                                <NavLink to="/login"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Login</NavLink>
                            </li>
                            <li className="nav-item me-0">
                                <NavLink to="/signup"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        borderBottom: "2px solid red"
                                    }}>Signup</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex position-relative align-items-center me-4">
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