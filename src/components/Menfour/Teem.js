import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import {Link} from 'react-router-dom'


function Teem() {

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
                },
            "992" : {
                 items: 3,
                 margin: 30
                },
            "1200" : {
                  items : 4,
                  margin : 30
                }
}};

  return (
    <>  
  <section className="team-four">
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">meet our team</p>
        
        <h3 className="sec-title__title">
          We’ve professional team member <br />
          meet with our agent
        </h3>
       
      </div>
     
      <OwlCarousel className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" {...options}>
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-1.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Brian S. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">CEO &amp; Founder</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-2.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Jackie C. Waldman</Link>
            </h3>
            
            <p className="team-card__designation">Senior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-3.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Tommy B. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">Business Consultant</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-4.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Kelvin E. Shumate</Link>
            </h3>
            
            <p className="team-card__designation">Junior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-1.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Brian S. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">CEO &amp; Founder</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-2.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Jackie C. Waldman</Link>
            </h3>
            
            <p className="team-card__designation">Senior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-3.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Tommy B. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">Business Consultant</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-4.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Kelvin E. Shumate</Link>
            </h3>
            
            <p className="team-card__designation">Junior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-1.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Brian S. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">CEO &amp; Founder</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-2.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Jackie C. Waldman</Link>
            </h3>
            
            <p className="team-card__designation">Senior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-3.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Tommy B. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">Business Consultant</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-4.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Kelvin E. Shumate</Link>
            </h3>
            
            <p className="team-card__designation">Junior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-1.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Brian S. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">CEO &amp; Founder</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-2.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Jackie C. Waldman</Link>
            </h3>
            
            <p className="team-card__designation">Senior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-3.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Tommy B. Brooks</Link>
            </h3>
            
            <p className="team-card__designation">Business Consultant</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
        <div className="item">
          <div className="team-four__card">
            <div className="team-four__card__image">
              <img src="assets/images/team/team-4-4.png"  />
            </div>
            
            <h3 className="team-card__title">
              <Link to="/teamdetails">Kelvin E. Shumate</Link>
            </h3>
            
            <p className="team-card__designation">Junior Manager</p>
            
            <ul className="list-unstyled team-card__social">
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
            
            <Link to="/teamdetails" className="team-four__card__link">
              <i className="far fa-arrow-right" />
            </Link>
            
          </div>
          
        </div>
       
      </OwlCarousel>
    </div>
  
  </section>
    </>
  )
}

export default Teem