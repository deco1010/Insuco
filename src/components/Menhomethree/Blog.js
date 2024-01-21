import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
        <section className="blog-two">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">get every updates</p>
                
                <h3 className="sec-title__title">Read our latest news &amp; blog</h3>
                
                </div>
               
                <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-8">
                    <div className="row gutter-y-30">
                    <div className="col-md-6">
                        <div className="blog-card-two">
                        <div className="blog-card-two__image">
                            <img src="assets/images/blog/blog-2-1.jpg"  />
                        </div>
                        
                        <div className="blog-card-two__content">
                            <ul className="list-unstyled blog-card-two__meta">
                            <li className="blog-card-two__meta__category">
                                <Link to="#">Life insurance</Link>
                            </li>
                            <li className="blog-card-two__meta__comments">
                                <Link to="#">
                                <i className="far fa-comment-lines" />
                                Comments (3)
                                </Link>
                            </li>
                            </ul>
                           
                            <h3 className="blog-card-two__title">
                            <Link to="/blogdetails">
                                Organize Product-Related Assets And Collaborate Better
                            </Link>
                            </h3>
                          
                            <Link className="blog-card-two__link" to="/blogdetails">
                            <span>Read More</span>
                            <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                       
                        </div>
                        
                    </div>
                   
                    <div className="col-md-6">
                        <div className="blog-card-two">
                        <div className="blog-card-two__image">
                            <img src="assets/images/blog/blog-2-2.jpg"  />
                        </div>
                        
                        <div className="blog-card-two__content">
                            <ul className="list-unstyled blog-card-two__meta">
                            <li className="blog-card-two__meta__category">
                                <Link to="#">Car insurance</Link>
                            </li>
                            <li className="blog-card-two__meta__comments">
                                <Link to="#">
                                <i className="far fa-comment-lines" />
                                Comments (3)
                                </Link>
                            </li>
                            </ul>
                           
                            <h3 className="blog-card-two__title">
                            <Link to="/blogdetails">
                                The Conference Platform We Use For Our Online Events Hopin
                            </Link>
                            </h3>
                          
                            <Link className="blog-card-two__link" to="/blogdetails">
                            <span>Read More</span>
                            <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                       
                        </div>
                        
                    </div>
                   
                    </div>
                   
                </div>
                
                <div className="col-md-12 col-lg-4">
                    <div className="blog-two__right">
                    <div className="blog-card-two">
                        <div className="blog-card-two__content">
                        <ul className="list-unstyled blog-card-two__meta">
                            <li className="blog-card-two__meta__category">
                            <Link to="#">Life insurance</Link>
                            </li>
                            <li className="blog-card-two__meta__comments">
                            <Link to="#">
                                <i className="far fa-comment-lines" />
                                Comments (3)
                            </Link>
                            </li>
                        </ul>
                       
                        <h3 className="blog-card-two__title">
                            <Link to="/blogdetails">
                            Smashing is Podcast Episode With Adam Argy VisBug
                            </Link>
                        </h3>
                      
                        <Link className="blog-card-two__link" to="/blogdetails">
                            <span>Read More</span>
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                       
                    </div>
                    
                    <div className="blog-card-two">
                        <div className="blog-card-two__content">
                        <ul className="list-unstyled blog-card-two__meta">
                            <li className="blog-card-two__meta__category">
                            <Link to="#">Health insurance</Link>
                            </li>
                            <li className="blog-card-two__meta__comments">
                            <Link to="#">
                                <i className="far fa-comment-lines" />
                                Comments (3)
                            </Link>
                            </li>
                        </ul>
                       
                        <h3 className="blog-card-two__title">
                            <Link to="/blogdetails">
                            Frustrating Design Patterns Need Fixing: Birthday
                            </Link>
                        </h3>
                      
                        <Link className="blog-card-two__link" to="/blogdetails">
                            <span>Read More</span>
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                       
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