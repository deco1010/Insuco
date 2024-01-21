import React from 'react'
import Better from '../Menfour/Better'
import Company from '../Menfour/Company'
import Footer from '../Menfour/Footer'
import Get from '../Menfour/Get'
import Header from '../Menfour/Header'
import Slider from '../Menfour/Slider'
import Slidertwo from '../Menfour/Slidertwo'
import Teem from '../Menfour/Teem'
import Update from '../Menfour/Update'
import We from '../Menfour/We'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Slider/>
            <Slidertwo/>
            <Company/>
            <Better/>
            <Teem/>
            <Get/>
            <We/>
            <Update/>
            <Footer/>
        </div>
    </>
  )
}

export default Main