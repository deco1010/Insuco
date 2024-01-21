import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/images/logo-light.png'


function Header() {
    
    const [Show, setShow] = useState()
    const [Mobile, setMobile] = useState()
    const [Home, setHome] = useState(false)
    const [Page, setPage] = useState(false)
    const [Insurances, setInsurances] = useState(false)
    const [Portfolio, setPortfolio] = useState(false)
    const [Blog, setBlog] = useState(false)
    const [Btnshow, setBtnshow] = useState(false);

  return (
    <>
         <header className="main-header-two main-header-two--home-1">
            <nav className="main-menu-two sticky-header">
                <div className="container-fluid">
                <div className="main-menu-two__left">
                    <Link to="/" className="main-header__logo">
                        <img src={Img}  />
                    </Link>
                    <Link to="#" className="main-header__toggler mobile-nav__toggler" onClick={() => setMobile(true)}>
                    <span />
                    <span />
                    <span />
                    </Link>
                </div>
                
                <ul className="main-menu__list">
                    <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                    <ul>
                        <li>
                        <Link to="/">Home one</Link>
                        </li>
                        <li>
                        <Link to="/hometwo">Home two</Link>
                        </li>
                        <li>
                        <Link to="/homethree">Home three</Link>
                        </li>
                        <li>
                        <Link to="/homefour">Home four</Link>
                        </li>
                        <li className="menu-item-has-children">
                        <Link to="/">Header styles</Link>
                        <ul>
                            <li>
                            <Link to="/">Header one</Link>
                            </li>
                            <li>
                            <Link to="/hometwo">Header two</Link>
                            </li>
                            <li>
                            <Link to="homethree">Header three</Link>
                            </li>
                            <li>
                            <Link to="/homefour">Header four</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/about">Pages</Link>
                    <ul>
                        <li>
                        <Link to="/about">About us</Link>
                        </li>
                        <li>
                        <Link to="/team">Team</Link>
                        </li>
                        <li>
                        <Link to="/teamdetails">Team details</Link>
                        </li>
                        <li>
                        <Link to="/faqs">Faq</Link>
                        </li>
                        <li>
                        <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                        <Link to="/error">Error 404</Link>
                        </li>
                    </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/insurances">Insurances</Link>
                    <ul>
                        <li>
                        <Link to="/insurances">Insurances</Link>
                        </li>
                        <li>
                        <Link to="/insurancesdetails">Insurances details</Link>
                        </li>
                    </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/portfoliogrid">Portfolio</Link>
                    <ul>
                        <li>
                        <Link to="/portfoliogrid">Portfolio grid</Link>
                        </li>
                        <li>
                        <Link to="/portfoliomasonary">Portfolio masonary</Link>
                        </li>
                        <li>
                        <Link to="/portfoliodetails">Portfolio details</Link>
                        </li>
                    </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/blog">Blog</Link>
                    <ul style={{ display : "block"}}>
                        <li>
                        <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                        <Link to="/blogdetails">Blog details</Link>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                
                <div className="main-menu-two__right">
                    <Link to="#" className="main-menu-two__search search-toggler">
                    <i className="far fa-search" onClick={() => {setBtnshow(true)}}/>
                    </Link>
                    <Link to="/contact" className="thm-btn">
                    <span>
                        Get a Quote <i className="far fa-arrow-right" />
                    </span>
                    </Link>

                    <Link to="#" className="main-menu__toggler side-drawer__toggler" onClick={() => setShow(true)}>
                    <span />
                    <span />
                    <span />
                    </Link>
                </div>
                
                </div>
            </nav>

            <nav className="main-menu-two sticky-header sticky-header--cloned">
                <div className="container-fluid">
                    <div className="main-menu-two__left">
                    <Link to="/" className="main-header__logo">
                        <img src="assets/images/logo-light.png" />
                    </Link>
                    <Link to="#" className="main-header__toggler mobile-nav__toggler" onClick={() => setMobile(true)}>
                        <span />
                        <span />
                        <span />
                    </Link>
                    </div>
                   
                    <ul className="main-menu__list">
                    <li className="menu-item-has-children current">
                        <Link to="/">Home</Link>
                        <ul>
                        <li className="current">
                            <Link to="/">Home one</Link>
                        </li>
                        <li>
                            <Link to="/hometwo">Home two</Link>
                        </li>
                        <li>
                            <Link to="/homethree">Home three</Link>
                        </li>
                        <li>
                            <Link to="homefour">Home four</Link>
                        </li>
                        <li className="menu-item-has-children current">
                            <Link to="/">Header styles</Link>
                            <ul>
                            <li className="current">
                                <Link to="/">Header one</Link>
                            </li>
                            <li>
                                <Link to="/hometwo">Header two</Link>
                            </li>
                            <li>
                                <Link to="/homethree">Header three</Link>
                            </li>
                            <li>
                                <Link to="/homefour">Header four</Link>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/teamdetails">Team details</Link>
                        </li>
                        <li>
                            <Link to="/faqs">Faq</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/error">Error 404</Link>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link to="/insurances">Insurances</Link>
                        <ul>
                        <li>
                            <Link to="/insurances">Insurances</Link>
                        </li>
                        <li>
                            <Link to="/insurancesdetails">Insurances details</Link>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link to="/portfoliogrid">Portfolio</Link>
                        <ul>
                        <li>
                            <Link to="/portfoliogrid">Portfolio grid</Link>
                        </li>
                        <li>
                            <Link to="/portfoliomasonary">Portfolio masonary</Link>
                        </li>
                        <li>
                            <Link to="/portfoliodetails">Portfolio details</Link>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link to="/blog">Blog</Link>
                        <ul>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/blogdetails">Blog details</Link>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    </ul>
                    
                    <div className="main-menu-two__right">
                    <Link to="#" className="main-menu-two__search search-toggler">
                        <i className="far fa-search" onClick={() => {setBtnshow(true)}}/>
                    </Link>
                    <Link to="/contact" className="thm-btn">
                        <span>
                        Get a Quote <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                    
                    <Link to="#" className="main-menu__toggler side-drawer__toggler" onClick={() => setShow(true)}>
                        <span />
                        <span />
                        <span />
                    </Link>
                    </div>
                    
                </div>
            </nav>

        </header>

        {Mobile && 
            <div className={`mobile-nav__wrapper ${"expanded"}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" />
            
                <div className="mobile-nav__content">
                <Link to="#" className="mobile-nav__close mobile-nav__toggler" onClick={() => setMobile(false)}>
                    <span />
                    <span />
                </Link>
                <div className="logo-box">
                    <Link to="/" aria-label="logo image">
                    <img src="assets/images/logo-light.png" alt="Insuco" />
                    </Link>
                </div>
                
                <div className="mobile-nav__container">

                    <ul className="mobile-menu__list">
                        <li className="menu-item-has-children current">
                        <Link to="/" onClick={()=> setHome(!Home)}>
                            Home
                            <button aria-label="dropdown toggler">
                            <i className="fa fa-angle-down" />
                            </button>
                        </Link>
                        {Home && 
                            <ul style={{ display: "block" }}> 
                                <li className="current">
                                <Link to="/">Home one</Link>
                                </li>
                                <li>
                                <Link to="/hometwo">Home two</Link>
                                </li>
                                <li>
                                <Link to="/homethree">Home three</Link>
                                </li>
                                <li>
                                <Link to="/homefour">Home four</Link>
                                </li>
                                <li className="menu-item-has-children current">
                                <Link to="/" className="expanded" > Header styles
                                    <button aria-label="dropdown toggler">
                                    <i className="fa fa-angle-down" />
                                    </button>
                                </Link>
                                <ul>
                                    <li className="current">
                                    <Link to="/">Header one</Link>
                                    </li>
                                    <li>
                                    <Link to="/hometwo">Header two</Link>
                                    </li>
                                    <li>
                                    <Link to="/homethree">Header three</Link>
                                    </li>
                                    <li>
                                    <Link to="/homefour">Header four</Link>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        }
                        </li>
                        <li className="menu-item-has-children">
                        <Link to="#" onClick={()=> setPage(!Page)}> 
                        Pages
                            <button aria-label="dropdown toggler">
                                <i className="fa fa-angle-down" />
                            </button>
                        </Link>

                        {Page && 
                            <ul style={{ display: "block" }}>
                                <li>
                                <Link to="/about">About us</Link>
                                </li>
                                <li>
                                <Link to="/team">Team</Link>
                                </li>
                                <li>
                                <Link to="/teamdetails">Team details</Link>
                                </li>
                                <li>
                                <Link to="/faqs">Faq</Link>
                                </li>
                                <li>
                                <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                <Link to="/error">Error 404</Link>
                                </li>
                            </ul>
                        }
                        </li>

                        <li className="menu-item-has-children">
                        <Link to="#" onClick={()=> setInsurances(!Insurances)}>
                            Insurances
                            <button aria-label="dropdown toggler">
                            <i className="fa fa-angle-down" />
                            </button>
                        </Link>
                        {Insurances && 
                            <ul style={{ display: "block" }}>
                                <li>
                                <Link to="/insurances">Insurances</Link>
                                </li>
                                <li>
                                <Link to="/insurancesdetails">Insurances details</Link>
                                </li>
                            </ul>
                        }
                        </li>
                        <li className="menu-item-has-children">
                        <Link to="#" onClick={()=> setPortfolio(!Portfolio)} > Portfolio
                            <button aria-label="dropdown toggler">
                                <i className="fa fa-angle-down" />
                            </button>
                        </Link>
                        {Portfolio && 
                            <ul style={{ display: "block" }}>
                                <li>
                                <Link to="/portfoliogrid">Portfolio grid</Link>
                                </li>
                                <li>
                                <Link to="/portfoliomasonary">Portfolio masonary</Link>
                                </li>
                                <li>
                                <Link to="/portfoliodetails">Portfolio details</Link>
                                </li>
                            </ul>
                        }
                        </li>
                        <li className="menu-item-has-children">
                        <Link to="#" onClick={()=> setBlog(!Blog)} > Blog
                            <button aria-label="dropdown toggler">
                            <i className="fa fa-angle-down" />
                            </button>
                        </Link>
                        {Blog && 
                            <ul style={{ display: "block" }} >
                                <li>
                                <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                <Link to="/blogdetails">Blog details</Link>
                                </li>
                            </ul>
                        }
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                
                <ul className="list-unstyled footer-one__widget__contact">
                    <li>
                    <i className="far fa-envelope-open" />
                    <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                    </li>
                    <li>
                    <i className="far fa-phone-plus" />
                    <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                    </li>
                </ul>
                
                <ul className="list-unstyled footer-one__widget__social">
                    <li>
                    <Link to="#">
                        <i className="fab fa-facebook-f" />
                    </Link>
                    </li>
                    <li>
                    <Link to="#">
                        <i className="fab fa-twitter" />
                    </Link>
                    </li>
                    <li>
                    <Link to="#">
                        <i className="fab fa-linkedin-in" />
                    </Link>
                    </li>
                    <li>
                    <Link to="#">
                        <i className="fab fa-instagram" />
                    </Link>
                    </li>
                </ul>
                
                </div>
                
            </div> 
         }

        {Show && 
            <div className={`side-drawer__wrapper ${"expanded"}`}>
                <div className="side-drawer__overlay side-drawer__toggler" />
                
                <div className="side-drawer__content">
                <Link to="#" className="side-drawer__close side-drawer__toggler" onClick={() => setShow(false)}>
                    <span />
                    <span />
                </Link>
                <div className="logo-box">
                    <Link to="/" aria-label="logo image">
                    <img src="assets/images/logo-light.png" alt="Insuco" />
                    </Link>
                </div>
            
                <div className="footer-one__widget">
                    <h3 className="footer-one__widget__title">About</h3>
                    
                    <p className="footer-one__widget__text">
                    We denounce righteous indignations dislike men beguiled and
                    demoralized charms of pleasure moment
                    </p>
                    
                    <ul className="list-unstyled footer-one__widget__social">
                    <li>
                        <Link to="#">
                        <i className="fab fa-facebook-f" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                        <i className="fab fa-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                        <i className="fab fa-linkedin-in" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                        <i className="fab fa-instagram" />
                        </Link>
                    </li>
                    </ul>
                    
                </div>
                
                <div className="footer-one__widget">
                    <h3 className="footer-one__widget__title">Gallery</h3>
                    
                    <ul className="list-unstyled footer-one__widget__gallery">
                    <li>
                        <Link to="assets/images/resources/footer-g-1.jpg" className="img-popup" >
                        <img src="assets/images/resources/footer-g-1.jpg"  />
                        <span className="footer-one__widget__gallery__hover">
                            <i className="fab fa-instagram" />
                        </span>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="assets/images/resources/footer-g-2.jpg"
                        className="img-popup" >
                        <img src="assets/images/resources/footer-g-2.jpg"  />
                        <span className="footer-one__widget__gallery__hover">
                            <i className="fab fa-instagram" />
                        </span>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="assets/images/resources/footer-g-3.jpg" className="img-popup" >
                        <img src="assets/images/resources/footer-g-3.jpg"  />
                        <span className="footer-one__widget__gallery__hover">
                            <i className="fab fa-instagram" />
                        </span>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="assets/images/resources/footer-g-4.jpg" className="img-popup" >
                        <img src="assets/images/resources/footer-g-4.jpg"  />
                        <span className="footer-one__widget__gallery__hover">
                            <i className="fab fa-instagram" />
                        </span>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="assets/images/resources/footer-g-5.jpg" className="img-popup" >
                        <img src="assets/images/resources/footer-g-5.jpg"  />
                        <span className="footer-one__widget__gallery__hover">
                            <i className="fab fa-instagram" />
                        </span>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="assets/images/resources/footer-g-6.jpg" className="img-popup" >
                        <img src="assets/images/resources/footer-g-6.jpg"  />
                        <span className="footer-one__widget__gallery__hover">
                            <i className="fab fa-instagram" />
                        </span>
                        
                        </Link>
                    </li>
                    </ul>
                    
                </div>
                
                <div className="footer-one__widget">
                    <h3 className="footer-one__widget__title">Contact</h3>
                    <ul className="list-unstyled footer-one__widget__contact">
                    <li>
                        <i className="far fa-envelope-open" />
                        <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                    </li>
                    <li>
                        <i className="far fa-phone-plus" />
                        <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                    </li>
                    </ul>
                    
                </div>
                
                </div>
                
            </div> 
         }

        {Btnshow && 
            <div className={`search-popup ${"active"}`} onClick={() => setBtnshow(false)}>
                
            <div className="search-popup__overlay search-toggler" />
                <div className="search-popup__content">
                    <form action="#">
                    <label htmlFor="search" className="sr-only">
                        search here
                    </label>
                    
                    <input type="text" id="search" placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="thm-btn">
                        <span>
                        <i className="far fa-search" />
                        </span>
                    </button>
                    </form>
                </div>
            </div>
        }


    </>
  )
}

export default Header