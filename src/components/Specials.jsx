import React from 'react'
import transparentChicken from '../assets/transparentchicken.png'

const Specials = () => {
  return (
    <div className="specials">
        <div>
            <img src={transparentChicken}/>
        </div>
        <div className="specials-text-container">
            <h1>Wow!</h1>
            <h1>Whole Hot Chicken</h1>
            <div className="specials-text-price">
                <h2>Only $13</h2>
            </div>
        </div>
    </div>
  )
}

export default Specials