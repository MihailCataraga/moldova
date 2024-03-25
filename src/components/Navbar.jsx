import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='cube'>
            <div className='row'>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
            </div>
            <div className='row'>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
            </div>
            <div className='row'>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
            </div>
        </div>
        <div className='logo'>
            <img src='' alt='Logo img' />
            <span>RM</span>
        </div>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>Home</NavLink>
        </nav>
    </div>
  )
}
