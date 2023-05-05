import React from 'react'
import { NavLink } from 'react-router-dom'

const Copyright = () => {
    const current = new Date();
    const date = `${current.getFullYear()}`;

  return (
    <div>
        <p>Copyright © {date} The Aldgate Chip Shop. All rights reserved | <NavLink to="/privacy">Privacy Policy</NavLink></p>
    </div>
  )
}

export default Copyright