import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>

        <div className="nav-logo">
            <h2>EV-OLUTION</h2>
        </div>

        <ul className='nav-list'>
            <li>Home</li>
            <li>Menu</li>
            <li>About-us</li>
            <li id='nav-contact'>Contact</li>
        </ul>


    </div>
  )
}

export default Navbar