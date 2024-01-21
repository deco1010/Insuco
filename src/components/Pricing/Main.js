import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menpricing/Bredcom'
import Plan from '../Menpricing/Plan'
import Slider from '../Menpages/Testimonials/Main'
import Start from '../Menpricing/Start'
import Sliderfooter from '../Menpages/GlobleSlider/Main'

function Main() {
  return (
    <>

        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Plan/>
            <Slider/>
            <Start/>
            <Sliderfooter/>
            <Footer/>
        </div>          
       
    </>
  )
}

export default Main