import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Testimonials = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
            /> 

            <div className="testimonials-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>What Our Clients Say</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-testimonials">
                                <div className="testimonials-head">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3 col-5">
                                            <div className="testimonials-img">
                                                <img src="/images/testimonials/testimonial-1.jpg" alt="testimonials" />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-7">
                                            <div className="content">
                                                <h2>Denial Doe</h2>
                                                <span>Marketer</span>
                                                <ul className="rate">
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="testimonials-foot">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-testimonials">
                                <div className="testimonials-head">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3 col-5">
                                            <div className="testimonials-img">
                                                <img src="/images/testimonials/testimonial-2.jpg" alt="testimonials" />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-7">
                                            <div className="content">
                                                <h2>Evana Doe</h2>
                                                <span>Founder</span>
                                                <ul className="rate">
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="testimonials-foot">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-testimonials">
                                <div className="testimonials-head">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3 col-5">
                                            <div className="testimonials-img">
                                                <img src="/images/testimonials/testimonial-3.jpg" alt="testimonials" />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-7">
                                            <div className="content">
                                                <h2>Smith Doe</h2>
                                                <span>Web Designer</span>
                                                <ul className="rate">
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="testimonials-foot">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-testimonials">
                                <div className="testimonials-head">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3 col-5">
                                            <div className="testimonials-img">
                                                <img src="/images/testimonials/testimonial-4.jpg" alt="testimonials" />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-7">
                                            <div className="content">
                                                <h2>Maria Doe</h2>
                                                <span>Founder CEO</span>
                                                <ul className="rate">
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="testimonials-foot">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-testimonials">
                                <div className="testimonials-head">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3 col-5">
                                            <div className="testimonials-img">
                                                <img src="/images/testimonials/testimonial-5.jpg" alt="testimonials" />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-7">
                                            <div className="content">
                                                <h2>Dew Doe</h2>
                                                <span>Graphic Designer</span>
                                                <ul className="rate">
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="testimonials-foot">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-testimonials">
                                <div className="testimonials-head">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3 col-5">
                                            <div className="testimonials-img">
                                                <img src="/images/testimonials/testimonial-6.jpg" alt="testimonials" />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-7">
                                            <div className="content">
                                                <h2>Keat Smith</h2>
                                                <span>Designer</span>
                                                <ul className="rate">
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                    <li> <i className="bx bxs-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="testimonials-foot">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div> 
                        
                        {/* Pagination */}
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link page-links" href="#">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <Footer />
        </>
    )
}

export default Testimonials;