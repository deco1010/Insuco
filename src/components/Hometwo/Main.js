import React from 'react'
import Header from '../Menhometwo/Header'
import Footer from '../Menhometwo/Footer'
import Slide from '../Menhometwo/Slide'
import Offer from '../Menhometwo/Offer'
import Company from '../Menhometwo/Company'
import New from '../Meninsurance/New'
import Gallery from '../Menhometwo/Gallery'
import Counter from '../Menpages/Achievement/Main'
import Clints from '../Menhometwo/Clints'
import Slidertwo from '../Menhometwo/Slidertwo'
import Blog from '../Menhometwo/Blog'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Slide/>
            <Offer/>
            <Company/>
            <New/>
            <Gallery/>
            <Counter/>
            <Clints/>
            <Slidertwo/>
            <Blog/>
            <Footer/>
        </div>
    </>
  )
}

export default Main