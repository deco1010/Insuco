import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from '../components/Home/Main'
import About from '../components/Pages/Main'
import Team from '../components/Team/Main'
import Teamdeatils from '../components/Teamdetails/Main'
import Faqs from '../components/Faq/Main'
import Pricing from '../components/Pricing/Main'
import Error from '../components/Error/Main'
import Insurance from '../components/Insurance/Main';
import Insurancedeatils from '../components/Insurancesdetails/Main'
import Portfolio from '../components/Portfolio/Main'
import Portfoliomasonary from '../components/Masonary/Main'
import Portfoliodetails from '../components/Portfoliodetails/Main'
import Blog from '../components/Blog/Main'
import Blogdetails from '../components/Blogdetails/Main' 
import Contact from '../components/Contact/Main'
import Hometwo from '../components/Hometwo/Main'
import Homethree from '../components/Homethree/Main'
import Homefour from '../components/Homefour/Main'

function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamdetails" element={<Teamdeatils />} />
          <Route path="/faqs" element={<Faqs/>} />
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/error" element={<Error/>} /> 
          <Route path="/insurances" element={<Insurance/>} /> 
          <Route path="/insurancesdetails" element={<Insurancedeatils/>} /> 
          <Route path="/portfoliogrid" element={<Portfolio/>} />  
          <Route path="/portfoliomasonary" element={<Portfoliomasonary/>} />  
          <Route path="/portfoliodetails" element={<Portfoliodetails/>} />   
          <Route path="/blog" element={<Blog/>} /> 
          <Route path="/blogdetails" element={<Blogdetails/>} />   
          <Route path="/contact" element={<Contact/>} />  
          <Route path="/hometwo" element={<Hometwo/>} />  
          <Route path="/homethree" element={<Homethree/>} />   
          <Route path="/homefour" element={<Homefour/>} />  

        </Routes>
    </>
  )
}

export default Index