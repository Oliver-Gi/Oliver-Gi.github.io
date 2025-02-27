import React from 'react'
import Navbar from '../Navbar'
import MobileNav from '../MobileNav'
import './Pages.css'
import aboutMePic from '../logos/aboutMePic.jpg'

const About = () => {
    return(
        <div>
            <Navbar/>
            <MobileNav/>
            <h1>About Me</h1>
            <div className='contentAbout'>
                <div className='left'>
                    {/*Add photo here!*/}
                    <img className='aboutMeImage' src={aboutMePic} alt='Picture of Me'/>
                    <h3>Hey, I'm Oliver, a second year Software Engineering Technology student at Conestoga College from Ontario, Canada!<br/>
                        My passion is in frontend development and web design, I love learning and I'm excited to continue building on my skills!
                    </h3>
                </div>

                <div className='line'></div>

                <div className='right'>
                    <h2>Skills</h2>
                    <div className='skillBox'>
                        <ul className='skill'>
                            <li>Web Development</li>
                            <li>Frontend Development</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ASP.NET</li>
                            <li>PHP</li>
                            <li>C/C++/C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>.NET Framework</li>
                            <li>Data Structures</li>
                            <li>SQL</li>
                            <li>Databases</li>
                            <li>SDLC Lifecycle</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>

                    <h2>Hobbies</h2>
                    <div className='skillBox'>
                        <ul className='skill'>
                            <li>Programming</li>
                            <li>Writing</li>
                            <li>Art</li>
                            <li>Music</li>
                            <li>Anime</li>
                            <li>Magic The Gathering</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default About