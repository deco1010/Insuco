import React from 'react'
import { Link } from 'react-router-dom'

function Bredcom() {
  return (
    <>
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(assets/images/background/page-header-bg-1-1.jpg)" }} />
            
            <div className="container text-start">
                <h2 className="page-header__title">Blog Details</h2>
                
                <ul className="list-unstyled breadcrumb-one">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span>Blog Details</span>
                </li>
                </ul>
            
            </div>
            
        </section>

    </>
  )
}

export default Bredcom