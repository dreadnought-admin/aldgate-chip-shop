import React from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import logo from '../assets/removedbg-logo.png'

const Header = () => {

    const location = useLocation();
    const current = new Date();
    const date = `${current.getMonth()+1} // ${current.getDate()} // ${current.getFullYear()}`;

  return (
    <div className="navigation">
        <div>
          <Link to="/">
            <img src={logo}/>
          </Link>
            
        
            <p className="dateButton" href="#">{date}</p>
                {location.pathname !=="/" &&
                    <NavLink className="navButton confirm_selection" to="/">Home</NavLink>
                }
                <NavLink className="navButton confirm_selection" target="_blank" to="https://www.instagram.com/p/B-mNOW4jpR3/">Menu</NavLink>
                <NavLink className="navButton confirm_selection" to="/contact">Contact</NavLink>
        </div>
    </div>
  )
}

export default Header