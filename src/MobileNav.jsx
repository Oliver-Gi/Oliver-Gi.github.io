import React from 'react'
import './Navbar.css'
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io"
import { Nav } from 'react-bootstrap';

const NavLinks = () => {
    return(
        <ul className="nav-links">
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    )
}

const MobileNav = () => {
    const [click, setClick] = useState(false)

    const Hamburger = <TiThMenuOutline className="HamburgerMenu"
            size="1rem" color='#FCC2C2'
            onClick={() => setClick(!click)}
    />

    const Close = <IoMdClose className="HamburgerMenu"
            size="1rem" color="#FCC2C2"
            onClick={() => setClick(!click)}
    />

    return(
        <nav className="MobileNav">
            <div className="navbar-left" role="navigation">
                <a href="/" className="logo">Oliver Gingerich</a>
            </div>
            <div className="navbar-right">
                {click ? Close : Hamburger}
                {click && <NavLinks/>}
            </div>
        </nav>
    )
}

export default MobileNav