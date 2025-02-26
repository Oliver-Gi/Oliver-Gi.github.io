import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left" role="navigation">
                <a href="/" className="logo">Oliver Gingerich</a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar