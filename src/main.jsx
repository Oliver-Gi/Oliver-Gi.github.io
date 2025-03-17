import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter, Routes, Route, Outlet, Link
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

export default function Direct(){
  return(
    <HashRouter>
      <Routes>
          <Route index element={<App/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Direct/>
  </StrictMode>,
)
