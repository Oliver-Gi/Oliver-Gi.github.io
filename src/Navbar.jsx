import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left" role="navigation">
                <a href="/" className="logo">Oliver Gingerich</a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/products">About</a>
                    </li>
                    <li>
                        <a href="/about">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar