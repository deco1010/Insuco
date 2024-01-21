import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menblog/Bredcom'
import Rise from '../Menblog/Rise'
import Slider from '../Menpages/GlobleSlider/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Rise/>
            <Slider/>
            <Footer/>
        </div>
    </>
  )
}

export default Main