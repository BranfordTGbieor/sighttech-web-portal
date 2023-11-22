import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <h1>
                                        Create Value Through Digitalization
                                    </h1>
                                    <p>
                                        We help you use digital technologies to change your business processes and provide new revenue and value-producing opportunities.
                                    </p>
                                    <div className="banner-btn">
                                        <Link href="/contact-us">
                                            <a className="box-btn">Message Us</a>
                                        </Link>
                                        <Link href="/about-us">
                                            <a className="box-btn border-btn">Know More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img">
                                    <img src="/images/banner-img-1.png" alt="banner-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			
            <div className="home-shape">
                <div className="shape1">
                    <img src="/images/shape/shape1.png" alt="shape" />
                </div>
                <div className="shape2">
                    <img src="/images/shape/shape2.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape/shape3.png" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape/shape4.png" alt="shape" />
                </div>
                <div className="shape5">
                    <img src="/images/shape/shape5.png" alt="shape" />
                </div>
                <div className="shape6">
                    <img src="/images/shape/shape6.png" alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;