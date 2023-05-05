import React, { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'
import Instagram from './components/Instagram'
import Map from './components/Map'
import Specials from './components/Specials'
import ContactForm from './components/ContactForm'
import About from './components/About'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import PrivacyPolicy from './components/PrivacyPolicy'
import SplitImages from './components/SplitImages'


const App = () => {



  return (
    <div>

        <Header />

        <Routes>
          <Route path="/" element={<><Specials/><Main/> <SplitImages/></>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
        </Routes>

        <Footer />
        <Copyright/>

    </div>
  )
}

export default App