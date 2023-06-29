import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { EtblogLogo, ProfileImage } from '../../assets/images'

const Navbar = () => {

  const [authCheck, setAuthCheck] = useState(false)
  const [sideNavbar, setSideNavbar] = useState(false)

  const openSideNavbar = () => {
    setSideNavbar(true)
  }

  const closeSideNavbar = () => {
    setSideNavbar(false)
  }

  return (
    <div>
      <div className='top_navbar'></div>
      <nav className='nav_container'>
        <div className='logo_container'>
          <img src={EtblogLogo} alt="Etblog Logo" />
          <span className='logo'>etblog</span>
        </div>
        <div className='right_items'>
          <ul className='nav_items'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Programming</a></li>
            <li><a href="#">Football</a></li>
            <li><a href="#">Memes</a></li>
            <li>
              {authCheck ? (
                <div className="profile_circle">
                  <img src={ProfileImage} alt="Profile User" />
                </div>
              ) : (
                <a href="#" className='started_btn'>Get Started</a>
              )}
            </li>
          </ul>

          {/* Bar Icon */}
          <div className="bars_btn">
            <FaBars size={18} onClick={openSideNavbar} />
          </div>

        </div>
      </nav>

      <div className='side_navbar'>
        <div className="bg_nav_items" style={{ display: sideNavbar ? 'block' : 'none' }}></div>
        <ul className='nav_items_side' style={{ right: sideNavbar ? '0px' : '' }}>
          <li className='close_nav_icon'><FaTimes size={18} cursor='pointer' onClick={closeSideNavbar} /></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Programming</a></li>
          <li><a href="#">Football</a></li>
          <li><a href="#">Memes</a></li>
          <li className='bottom_profile'>
            {
              authCheck ? (
                <a href="#">
                  <img src={ProfileImage} alt="Profile Image" />
                  <span>Profile</span>
                </a>
              ) : (
                <a href="#">Sign Up</a>
              )
            }
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar