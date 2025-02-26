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
      <h1>This is home page</h1>
    </>
  )
}

export default App
