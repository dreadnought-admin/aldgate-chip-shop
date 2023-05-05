import React from 'react'
import creampuff from '../assets/creampuff2.jpg'

const Main = () => {
  return (
    <div className="main">
        <div>
            <h2>Burgers, Brisket, Brekkie—</h2>
            <p>We've got it all</p>
        </div>
        <div>
            <img height="250px" width="225" src={creampuff}/>
        </div>
    </div>
  )
}

export default Main