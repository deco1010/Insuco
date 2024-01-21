import React from 'react'
import CountUp from 'react-countup';


function Clints() {
  return (
    <>
        <section className="sponsor-two">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-lg-5">
                    <div className="sponsor-two__image clearfix">
                    <img src="assets/images/sponsors/sponsor-a-1.png"  />
                    </div>
                    
                </div>
               
                <div className="col-lg-7">
                    <div className="sponsor-two__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">Global clients</p>
                      
                        <h3 className="sec-title__title count-box">
                        We’ve more then{" "}
                        <CountUp end={1023} duration={1}> </CountUp>
                        + global clients
                        </h3>
                      
                    </div>
                    
                    <div className="sponsor-two__list__outer">
                        <ul className="list-unstyled sponsor-two__list">
                        <li>
                            <a href="#">
                            <img src="assets/images/sponsors/sponsor-2-1.png"  />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/sponsors/sponsor-2-2.png"  />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <img src="assets/images/sponsors/sponsor-2-3.png"  />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <img src="assets/images/sponsors/sponsor-2-4.png"  />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <img src="assets/images/sponsors/sponsor-2-5.png"  />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <img src="assets/images/sponsors/sponsor-2-6.png"  />
                            </a>
                        </li>
                        </ul>
                       
                    </div>
                    
                    </div>
                   
                </div>
                
                </div>
               
            </div>
          
        </section>
    </>
  )
}

export default Clints