import React, { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'
import Instagram from './components/Instagram'
import Map from './components/Map'
import Specials from './components/Specials'
import ContactForm from './components/ContactForm'
import About from './components/About'
import Footer from './components/Footer'


const App = () => {



  return (
    <div>
      <Header />
      <Specials />
      <Main />
      <About />
      {/* <Instagram /> */}
      <Footer />
      
      <Routes>
        {/* <Route path="/" element={<Main/>}/> */}
        <Route exact path="/contact" element={<ContactForm/>}/>
      </Routes>

    </div>
  )
}

export default App