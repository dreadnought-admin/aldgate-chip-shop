import React from 'react'
import metallica from '../assets/metallicalogo.png'

const ComeDown = () => {
  return (
    <div className="come-down">
        <div className="come-down-content">
            <img src={metallica} />
            <h1 style={{textShadow: "3px 3px #e0bb68"}}>Come on Down For Some Grouse Grub Today!</h1>
        </div>
    </div>
  )
}

export default ComeDown