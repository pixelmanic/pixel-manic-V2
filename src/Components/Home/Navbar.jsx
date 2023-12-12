import React, { useEffect } from 'react'
import logo from '../../Images/logo name.png'
import '../../Styles/Navbar.css'
import { CursorAnim } from '../../Animations/CursorAnim'
import { NavbarAnim } from '../../Animations/NavbarAnim'

export default function Navbar() {
  useEffect(()=>{
    CursorAnim()
    NavbarAnim()
  },[])
  return (
    <nav>
        <a className='navbar-logo cursor-scale' href="https://pixelmanic.com/"><img src={logo} alt="logo" /></a>
        <div className="menu-btn cursor-scale">
            <span className='menu-btn-line'></span>
            <span className='menu-btn-line'></span>
        </div>
    </nav>
  )
}
