import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menblogdetails/Bredcom'
import Risetwo from '../Menblogdetails/Risetwo'
import Slider from '../Menpages/GlobleSlider/Main'


function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Risetwo/>
            <Slider/>
            <Footer/>
        </div>
    </>
  )
}

export default Main