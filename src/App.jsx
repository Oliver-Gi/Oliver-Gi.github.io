import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import './App.css'

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
          <h3>Programming | Writing | Art</h3>
        </div>
      </div>
    </>
  )
}

export default App
