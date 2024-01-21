import React from 'react'
import OwlCarousel from 'react-owl-carousel';

	const options = {
		loop : true,
		nav : false,
		dots : true,
		autoplay : true,
		autoplayHoverPause : true,
		autoplayTimeout : 5000,
		items : 1,
		margin : 0,
		smartSpeed : 700 

		}
	

function Slidertwo() {
  return (
    <>
        <section className="testimonials-two">
			<img src="assets/images/background/testi-2-bg-1.jpg" className="testimonials-two__bg" />
			<div className="container">
				<div className="sec-title text-start">
					<p className="sec-title__tagline">Clients testimonials</p>
					<h3 className="sec-title__title count-box">What customer say us</h3>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<OwlCarousel className="thm-owl__carousel owl-with-shadow owl-carousel owl-theme owl-dot-one" {...options} >
							<div className="item">
								<div className="testimonials-card-two" style={{"--accent-color":"#1da1f2"}}>
									<div className="testimonials-card-two__top">

										<div className="testimonials-card-two__info">
											<div className="testimonials-card-two__image">
												<img src="assets/images/resources/testi-2-1.png" />
											</div>
											<div className="testimonials-card-two__info__content">
												<h3 className="testimonials-card-two__name">Richard M. Pappas</h3>
												
												<p className="testimonials-card-two__designation">Senior Manager</p>
												
											</div>
										</div>

										<div className="testimonials-card-two__review">
											<div className="testimonials-card-two__icon">
												<i className="fab fa-twitter"></i>
											</div>
											<div className="testimonials-card-two__review__content">
												<h3 className="testimonials-card-two__review__title">Quality Services</h3>
											
												<p className="testimonials-card-two__stars">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</p>
												
											</div>
										</div>
									</div>

									<div className="testimonials-card-two__content">Sed ut perspiciatis unde omnis iste
										natus
										voluptatem accusantium doloremque laudantium totarem aperiam eaquey quae abillo
										inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
									
								</div>
							</div>
							<div className="item">
								<div className="testimonials-card-two" style={{"--accent-color":"#1da1f2"}} >
									<div className="testimonials-card-two__top">

										<div className="testimonials-card-two__info">
											<div className="testimonials-card-two__image">
												<img src="assets/images/resources/testi-2-1.png" />
											</div>
											<div className="testimonials-card-two__info__content">
												<h3 className="testimonials-card-two__name">Richard M. Pappas</h3>
												
												<p className="testimonials-card-two__designation">Senior Manager</p>
												
											</div>
										</div>

										<div className="testimonials-card-two__review">
											<div className="testimonials-card-two__icon">
												<i className="fab fa-twitter"></i>
											</div>
											<div className="testimonials-card-two__review__content">
												<h3 className="testimonials-card-two__review__title">Quality Services</h3>
											
												<p className="testimonials-card-two__stars">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</p>
												
											</div>
										</div>
									</div>

									<div className="testimonials-card-two__content">Sed ut perspiciatis unde omnis iste
										natus
										voluptatem accusantium doloremque laudantium totarem aperiam eaquey quae abillo
										inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
									
								</div>
							</div>
							<div className="item">
								<div className="testimonials-card-two" style={{"--accent-color":"#1da1f2"}}>
									<div className="testimonials-card-two__top">

										<div className="testimonials-card-two__info">
											<div className="testimonials-card-two__image">
												<img src="assets/images/resources/testi-2-1.png" />
											</div>
											<div className="testimonials-card-two__info__content">
												<h3 className="testimonials-card-two__name">Richard M. Pappas</h3>
												
												<p className="testimonials-card-two__designation">Senior Manager</p>
												
											</div>
										</div>

										<div className="testimonials-card-two__review">
											<div className="testimonials-card-two__icon">
												<i className="fab fa-twitter"></i>
											</div>
											<div className="testimonials-card-two__review__content">
												<h3 className="testimonials-card-two__review__title">Quality Services</h3>
											
												<p className="testimonials-card-two__stars">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</p>
												
											</div>
										</div>
									</div>

									<div className="testimonials-card-two__content">Sed ut perspiciatis unde omnis iste
										natus
										voluptatem accusantium doloremque laudantium totarem aperiam eaquey quae abillo
										inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
									
								</div>
							</div>
							<div className="item">
								<div className="testimonials-card-two" style={{"--accent-color":"#1da1f2"}}>
									<div className="testimonials-card-two__top">

										<div className="testimonials-card-two__info">
											<div className="testimonials-card-two__image">
												<img src="assets/images/resources/testi-2-1.png" />
											</div>
											<div className="testimonials-card-two__info__content">
												<h3 className="testimonials-card-two__name">Richard M. Pappas</h3>
												
												<p className="testimonials-card-two__designation">Senior Manager</p>
												
											</div>
										</div>

										<div className="testimonials-card-two__review">
											<div className="testimonials-card-two__icon">
												<i className="fab fa-twitter"></i>
											</div>
											<div className="testimonials-card-two__review__content">
												<h3 className="testimonials-card-two__review__title">Quality Services</h3>
											
												<p className="testimonials-card-two__stars">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</p>
												
											</div>
										</div>
									</div>

									<div className="testimonials-card-two__content">Sed ut perspiciatis unde omnis iste
										natus
										voluptatem accusantium doloremque laudantium totarem aperiam eaquey quae abillo
										inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
									
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

export default Slidertwo