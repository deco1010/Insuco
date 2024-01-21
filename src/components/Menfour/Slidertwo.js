import React from 'react'
import OwlCarousel from 'react-owl-carousel';


function Slidertwo() {

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
                items : 4,
                margin : 30
            },
            "1200": {
                items : 6,
                margin : 57
            }
}};

  return (
    <>
        <section className="sponsor-three">
            <div className="container">
                <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel" {...options}>
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-1.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-2.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-3.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-4.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-5.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-6.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-1.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-2.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-3.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-4.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-5.png"  />
                    </div>
                   
                </div>
               
                <div className="item">
                    <div className="sponsor-one__item">
                    <img src="assets/images/sponsors/sponsor-3-6.png"  />
                    </div>
                   
                </div>
               
                </OwlCarousel>
                
            </div>
        </section>
    </>
  )
}

export default Slidertwo