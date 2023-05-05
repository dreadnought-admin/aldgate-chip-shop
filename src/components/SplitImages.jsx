import React from 'react'
import collage1 from '../assets/collage1.png'
import collage2 from '../assets/collage2.png'
import collage3 from '../assets/collage-3.jpg'

const SplitImages = () => {
  return (
    <div className="collage-container">
        <div className="collage collage-1">
          <img src={collage1}/>
        </div>
        <div className="collage collage-2">
          <img src={collage2}/>
        </div>
        <div className="collage collage-3">
          <img src={collage3}/>
        </div>
    </div>
  )
}

export default SplitImages