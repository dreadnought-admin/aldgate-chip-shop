import React from 'react'
import fishandchips from '../assets/fishandchips.jpg'

const About = () => {
  return (
    <div className="about">
        <div className="about-txt">
            <h2>The Pride of Aldgate</h2>
            <p>Proudly serving Mt Barker since 2019</p>
            <p>At The Aldgate Chip Shop, we believe that good food starts with quality ingredients. That's why we source our fish from local markets, our chooks from the same, and use only the finest spuds for our chips. Our menu's got something for everyone, from classic battered fish to grilled seafood and vego options like our famous vegan burger. And if you're feeling peckish, we've got some bloody good sides like our calami and schnitties</p>
        </div>
        <div className="about-img">
            <img src={fishandchips}/>
        </div>
    </div>
  )
}

export default About