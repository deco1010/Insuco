import React from 'react'
import Navside from '../Menhome/Navside'
import Service from '../Menhome/Service'
import Insurance from '../Menhome/Insurance'
import About from '../Menhome/About'
import Teem from '../Menhome/Teem'
import Contact from '../Menhome/Contact'
import Whychoose from '../Menhome/Whychoose'
import Customer from '../Menhome/Customer'
import Testimonials from '../Menhome/Testimonials'
import Latestnews from '../Menhome/Latestnews'
import Header from '../Menhome/Header'
import Footer from '../Menhome/Footer'

function Main() {
  return (
      <>
        <Header/>
        <Navside/>
        <Service/>
        <Insurance/>
        <About/>
        <Teem/>
        <Contact/>
        <Whychoose/>
        <Customer/>
        <Testimonials/>
        <Latestnews/>
        <Footer/>
      </>  
  )
}

export default Main