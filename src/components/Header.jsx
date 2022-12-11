import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className='navbar'>
        <div className="nav-wrapper">
            <div className="container">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={"/"}>Home</Link></li>
                </ul>                
            </div>

        </div>
    </nav>
    </div>
  )
}

export default Header