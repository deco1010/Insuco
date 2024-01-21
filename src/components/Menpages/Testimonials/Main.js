import React from 'react'
import OwlCarousel from 'react-owl-carousel';


function Main() {

    const options = {
        items : 1,
        margin : 0,
        loop : true,
        dots : true,
        smartSpeed : 700,
        nav : false,
        responsive : {
                "0": {
                     items: 1,
                     margin: 0
                    },
                "576" : {
                      items: 2,
                      margin: 30
                    }
}};
  return (
    <>
        <section className="testimonials-one testimonials-one--about">
            <div className="container">
                <img src="assets/images/resources/testi-c-1-2.jpg" className="testimonials-one__bg wow fadeInUp"
					data-wow-duration="1500ms" />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-start">
                            <p className="sec-title__tagline">our testimonials</p>
                            <h3 className="sec-title__title">
                                What our Clients Say <br />
                                About Us
                            </h3>
                        </div>

                        <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" {...options}>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#1da1f2"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-1.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Richard Pappas</h3>
                                    
                                    <p className="testimonials-card__designation">Senior Manager</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content"> We denounce righteo dislike men to
                                    beguiled demoralized charms pleasurecy
                                    the moment desire they cannot foresee
                                    trouble wise man therefore always</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-twitter" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Quality Services</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#e60023"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-2.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Scott Y. Garbutt</h3>
                                    
                                    <p className="testimonials-card__designation">CEO &amp; Founder</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content">On the other handce denounce with righteous
                                    indignation and dislike me who are so beguiled and demoralized by the charms of
                                    pleasure the moment</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-pinterest-p" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Experience Team</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#1da1f2"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-1.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Richard Pappas</h3>
                                    
                                    <p className="testimonials-card__designation">Senior Manager</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content"> We denounce righteo dislike men to
                                    beguiled demoralized charms pleasurecy
                                    the moment desire they cannot foresee
                                    trouble wise man therefore always</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-twitter" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Quality Services</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#e60023"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-2.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Scott Y. Garbutt</h3>
                                    
                                    <p className="testimonials-card__designation">CEO &amp; Founder</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content">On the other handce denounce with righteous
                                    indignation and dislike me who are so beguiled and demoralized by the charms of
                                    pleasure the moment</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-pinterest-p" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Experience Team</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#1da1f2"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-1.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Richard Pappas</h3>
                                    
                                    <p className="testimonials-card__designation">Senior Manager</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content"> We denounce righteo dislike men to
                                    beguiled demoralized charms pleasurecy
                                    the moment desire they cannot foresee
                                    trouble wise man therefore always</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-twitter" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Quality Services</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#e60023"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-2.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Scott Y. Garbutt</h3>
                                    
                                    <p className="testimonials-card__designation">CEO &amp; Founder</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content">On the other handce denounce with righteous
                                    indignation and dislike me who are so beguiled and demoralized by the charms of
                                    pleasure the moment</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-pinterest-p" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Experience Team</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#1da1f2"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-1.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Richard Pappas</h3>
                                    
                                    <p className="testimonials-card__designation">Senior Manager</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content"> We denounce righteo dislike men to
                                    beguiled demoralized charms pleasurecy
                                    the moment desire they cannot foresee
                                    trouble wise man therefore always</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-twitter" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Quality Services</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-card" style={{"--accent-color":"#e60023"}}>
                                <div className="testimonials-card__top">
                                    <div className="testimonials-card__image">
                                    <img src="assets/images/resources/testi-1-2.png"  />
                                    </div>
                                    <div className="testimonials-card__top__content">
                                    <h3 className="testimonials-card__name">Scott Y. Garbutt</h3>
                                    
                                    <p className="testimonials-card__designation">CEO &amp; Founder</p>
                                   
                                    </div>
                                </div>
                                <div className="testimonials-card__content">On the other handce denounce with righteous
                                    indignation and dislike me who are so beguiled and demoralized by the charms of
                                    pleasure the moment</div>
                                <div className="testimonials-card__bottom">
                                    <div className="testimonials-card__icon">
                                    <i className="fab fa-pinterest-p" />
                                    </div>
                                    <div className="testimonials-card__bottom__content">
                                    <h3 className="testimonials-card__review">Experience Team</h3>
                                   
                                    <p className="testimonials-card__stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </p>
                                  
                                    </div>
                                </div>
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