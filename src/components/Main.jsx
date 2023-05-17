import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Main = () => {
  return (
    <div className="btn-row">
      <div>
       <button className="main-btn hover misc-btn">
          <FontAwesomeIcon className="social-btn" icon="fa-brands fa-instagram"/>
       </button>
      </div>

      <div>
      <a target="_blank" href="https://www.instagram.com/p/B-mNOW4jpR3/">
       <button className="main-btn hover misc-btn">
          <h2>Menu</h2>
       </button>
       </a>
      </div>

      <div>
       <button className="main-btn hover misc-btn"> 
          <FontAwesomeIcon className="social-btn" icon="fa-brands fa-facebook" />
       </button>
      </div>
    </div>
  )
}

export default Main