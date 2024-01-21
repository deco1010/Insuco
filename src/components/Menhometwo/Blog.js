import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
        <section className="blog-three">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">get every updates</p>
              
                <h3 className="sec-title__title count-box">
                    Read our latest news &amp; blog
                </h3>
                
                </div>
                
                <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4">
                    <div className="blog-card-three">
                    <div className="blog-card-three__image">
                        <img src="assets/images/blog/blog-3-1.jpg"  />
                    </div>
                   
                    <ul className="blog-card-three__meta list-unstyled">
                        <li>
                        <Link to="#">September 25. 2022</Link>
                        </li>
                        <li>
                        <Link to="#">By Admin</Link>
                        </li>
                    </ul>
                   
                    <div className="blog-card-three__category">
                        <Link to="#">Life insurance</Link>
                    </div>
                    
                    <h3 className="blog-card-three__title">
                        <Link to="/blogdetails">
                        Rise Of Design Thinking Problems Strategy Development{" "}
                        </Link>
                    </h3>
                    
                    <div className="blog-card-three__btns">
                        <Link to="/blogdetails" className="thm-btn blog-card-three__btn" >
                        <span>
                            Read More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                        
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-md-12 col-lg-4">
                    <div className="blog-card-three">
                    <div className="blog-card-three__image">
                        <img src="assets/images/blog/blog-3-2.jpg"  />
                    </div>
                   
                    <ul className="blog-card-three__meta list-unstyled">
                        <li>
                        <Link to="#">September 25. 2022</Link>
                        </li>
                        <li>
                        <Link to="#">By Admin</Link>
                        </li>
                    </ul>
                   
                    <div className="blog-card-three__category">
                        <Link to="#">car insurance</Link>
                    </div>
                    
                    <h3 className="blog-card-three__title">
                        <Link to="/blogdetails">
                        Spinning Up Multiple WordPress Sites Locally With DevKinsta
                        </Link>
                    </h3>
                    
                    <div className="blog-card-three__btns">
                        <Link
                        to="/blogdetails"
                        className="thm-btn blog-card-three__btn" >
                        <span>
                            Read More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                        
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-md-12 col-lg-4">
                    <div className="blog-card-three">
                    <div className="blog-card-three__image">
                        <img src="assets/images/blog/blog-3-1.jpg"  />
                    </div>
                   
                    <ul className="blog-card-three__meta list-unstyled">
                        <li>
                        <Link to="#">September 25. 2022</Link>
                        </li>
                        <li>
                        <Link to="#">By Admin</Link>
                        </li>
                    </ul>
                   
                    <div className="blog-card-three__category">
                        <Link to="#">Life insurance</Link>
                    </div>
                    
                    <h3 className="blog-card-three__title">
                        <Link to="/blogdetails">
                        Rise Of Design Thinking Problems Strategy Development{" "}
                        </Link>
                    </h3>
                    
                    <div className="blog-card-three__btns">
                        <Link to="/blogdetails" className="thm-btn blog-card-three__btn" >
                        <span>
                            Read More
                            <i className="far fa-arrow-right" />
                        </span>
                        </Link>
                        
                    </div>
                    
                    </div>
                    
                </div>
               
                </div>
                
            </div>
        </section>
        
    </>
  )
}

export default Blog