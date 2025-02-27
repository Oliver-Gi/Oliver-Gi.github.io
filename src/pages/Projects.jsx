import React from 'react'
import Navbar from '../Navbar'
import MobileNav from '../MobileNav'
import School from './projects/School'
import WebGame from './projects/WebGame'

const Projects = () => {
    return(
        <div>
            <Navbar/>
            <MobileNav/>
            <div>
                <h1>Projects</h1>
                <School/>
                <WebGame/>
            </div>
            <br/>
        </div>
    )
}

export default Projects