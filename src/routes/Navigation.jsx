import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import {Home} from '../components/Home'
import {About} from '../components/About'
import {Students} from '../components/Students'

import logo from '../logo.svg';

function Navigation() {
  return (
      <BrowserRouter>
      <nav>
          <img src={logo} alt="" />
          <ul>
                <li>
                  <NavLink to='/home' className={({isActive})=>isActive ? 'nav-active' : ''}>
                    Home
                  </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=>isActive ? 'nav-active' : ''}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/students' className={({isActive})=>isActive ? 'nav-active' : ''}>
                        Students
                    </NavLink>
                </li>
          </ul>
      </nav>
        <Routes>
            <Route path='about' element={<About/>} />
            <Route path='students' element={<Students/>} />
            <Route path='home' element={<Home/>} />
            <Route path='/*' element={<Navigate to='/home' replace/> } />
        </Routes>
      </BrowserRouter>
    
  )
}

export {Navigation}