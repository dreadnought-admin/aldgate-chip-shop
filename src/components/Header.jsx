import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/removedbg-logo.png'

const Header = () => {

    const location = useLocation();
    const current = new Date();
    const date = `${current.getMonth()+1}//${current.getDate()}//${current.getFullYear()}`;

  return (
    <div className="navigation">
        <div>
            <img src={logo}/>
        
            <a className="navButton" href="#">{date}</a>
                {location.pathname !=="/" &&
                    <NavLink className="navButton confirm_selection" to="/">Home</NavLink>
                }
                <NavLink className="navButton confirm_selection" to="/showcase">Contact</NavLink>
        </div>
    </div>
  )
}

export default Header