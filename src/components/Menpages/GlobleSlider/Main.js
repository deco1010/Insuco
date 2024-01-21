import React from 'react'
import OwlCarousel from 'react-owl-carousel';


function Main() {

    const options = {
        loop : true,
        items : 2,
        margin : 30,
        autoplay : true,
        autoplayHoverPause : true,
        autoplayTimeout : 5000,
        dots : false,
        nav : false,
        responsive : {
            "0": {
                items : 2,
                margin : 30
            },
            "576": {
                items : 3,
                margin : 30
            },
            "992": {
                items : 3,
                margin : 30
            },
            "1200": {
                items : 4,
                margin : 57
            }
}};

  return (
    <>
        <section className="sponsor-one">
            <div className="container">
                <div className="row gutter-y-30 align-items-center">
                <div className="col-lg-4">
                    <div className="sponsor-one__content">
                    <p className="sponsor-one__tagline">Global clients</p>
                   
                    <h3 className="sponsor-one__title">
                        We’ve more then 1023+ global clients
                    </h3>
                   
                    </div>
                    
                </div>
               
                <div className="col-lg-8">
                    <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel" {...options}>
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-1.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-2.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-3.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-4.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-1.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-2.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-3.png"  />
                        </div>
                        
                    </div>
                   
                    <div className="item">
                        <div className="sponsor-one__item">
                        <img src="assets/images/sponsors/sponsor-1-4.png"  />
                        </div>
                        
                    </div>
                   
                    </OwlCarousel>
                    
                </div>
                
                </div>
                
            </div>
        </section>

    </>
  )
}

export default Main