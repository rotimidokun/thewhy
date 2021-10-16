import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="top-address-container">

                <aside className="call">
                    <p> Call Us </p>  
                    <span> +234-803-499-2318 </span>
                </aside>


                <figure className="line-container">
                    <img src="assets/straight-line.svg" alt="Vertical Line" className="vertical-line" />
                </figure>

                <aside className="email">
                    <p> Email Us </p> 
                    <a href="#"> info@thewhy.ng </a>
                </aside>

            </nav>

            <div className="menu-container">

                <figure className="logo-container">
                    <img src="assets/logo.png" alt="Thewhy Logo" className="logo" />
                </figure>

                <nav className="menu">
                    <ul>
                        <li>
                            <Link to="#" className="menu-item"> Home </Link>
                        </li>
                        <li>
                            <Link to="#" className="menu-item"> Services </Link>
                        </li>
                        <li>
                            <Link to="#" className="menu-item"> About </Link>
                        </li>
                        <li>
                            <Link to="#" className="menu-item"> Contact Us </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}

export default Header;
