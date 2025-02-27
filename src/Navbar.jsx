import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left" role="navigation">
                <a href="/" className="logo">Home Page</a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar