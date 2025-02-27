import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import './App.css'
import linkedin from './logos/linkedin.png'
import github from './logos/github.png'
import email from './logos/email.png'
import x from './logos/x.png'
import instagram from './logos/instagram.png'
import tiktok from './logos/tiktok.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <MobileNav/>
      </div>
      <div className='content'>
        <h1 className="title">Oliver Gingerich</h1>
        <div className='info'>
          <h3>Software Student | Programming | Writing | Art</h3>
        </div>
        <div className='logos'>
          <a href='https://www.linkedin.com/in/oliver-gingerich/'>
            <img className='logo' src={linkedin} alt='Linkedin'/>
          </a>

          <a href='https://github.com/Oliver-Gi'>
            <img className='logo' src={github} alt='GitHub'/>
          </a>

          <a href='mailto:ogingerich5354@conestogac.on.ca'>
            <img className='logo' src={email} alt='Email'/>
          </a>

          <a href='https://x.com/Oliver__Gi'>
            <img className='logo' src={x} alt='X'/>
          </a>

          <a href='https://www.instagram.com/oliver__gi/'>
            <img className='logo' src={instagram} alt='Instagram'/>
          </a>

          <a href='https://www.tiktok.com/@oliver__gi'>
            <img className='logo' src={tiktok} alt='Tiktok'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
