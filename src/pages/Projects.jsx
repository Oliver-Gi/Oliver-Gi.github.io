import React from 'react'
import Navbar from '../Navbar'
import MobileNav from '../MobileNav'
import School from './projects/School'

const Projects = () => {
    return(
        <div>
            <Navbar/>
            <MobileNav/>
            <div>
                <h1>Projects</h1>
                <School/>
            </div>
        </div>
    )
}

export default Projects