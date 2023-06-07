import React from 'react'
import bucket from '../assets/chickenbucket.gif'

const Specials = () => {
  return (
    <div className="specials">
        <div className="blob">
            <img src={bucket}/>
        </div>
        <div className="specials-txt-container">
            <h1>Wow! 🔥</h1>
            <h1>Whole Hot Chicken 🐔</h1>
            <div className="specials-txt-price">
                <h2>Only $13</h2>
                <h3>Call Now to Order Yours!</h3>
                <p>+61 8-8339-1367</p>
            </div>
        </div>
    </div>
  )
}

export default Specials