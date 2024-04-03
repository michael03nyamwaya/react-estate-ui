import React from 'react'
import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open ,setOpen]=useState(false)

  const user =true;
  return (
    <nav>
      <div className="left">
       <a href='/' className='logo'>
        <img src='logo.png' alt='' />
        <span>MikeDev</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contacts</a>
        <a href='/'>Agents</a>
       
      </div>
      <div className="right">
      {user ? (<div className='user'>
        <img src='avatar.jpg' alt=''/>
        <span>Mike Dev</span>
        <Link to="/profile" className='profile'>
          <div className="notification">3</div>
          <span>profile</span>
        </Link>
      </div>) : (
        <>
      <a href='/'>sign in</a>
      <a href='/' className='register'>sign out</a>
      </>
 ) }
      <div className="menuIcon">
        <img src='/menu.png' alt='' onClick={(()=>setOpen((prev)=>!prev))}/>
      </div>
      <div className={open ? "menu active" : "menu"}>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contacts</a>
        <a href='/'>Agents</a>
        <a href='/'>Sign In</a>
        <a href='/'>Sign Up</a>
      </div>
      </div>
    </nav>
  )
} 
