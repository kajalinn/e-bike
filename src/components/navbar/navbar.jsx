import React from 'react';
import {Link} from 'react-scroll';
import styles from './navbar.css'


const Navbar = () => {
    return (
            <nav className="navbar">
                <div className="nav-container">
                    {/*<div className="logo">*/}
                    {/*    <img src={Logo} alt="logo" width="220" height="54"/>*/}
                    {/*</div>*/}
                    <div className="nav-elements">
                        <ul>
                            <li>
                                <Link
                                    to="doings"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                >
                                    Offerings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="description"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                >
                                    Steps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="solutions"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                >
                                    Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="form"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                >
                                    Form
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;