import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/removedbg-logo.png'
import * as Scroll from 'react-scroll'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
                {/* <Link activeClass="active" to="contact" spy={true}
                offset={-100}
                duration={500}className="navButton confirm_selection">Contact</Link> */}
                <NavLink className="navButton confirm_selection" to="/contact">Contact</NavLink>
        </div>
    </div>
  )
}

export default Header