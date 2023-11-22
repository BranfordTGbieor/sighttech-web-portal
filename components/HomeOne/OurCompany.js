import React from 'react';
import Link from 'next/link';

const OurCompany = () => {
    return (
        <div className="home-company-area bg-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="company-content">
                            <div className="company-tittle">
                                <span>Our Company</span>
                                <h2> A Little About Us</h2>

                                <p> We are a software startup that specializes in developing high quality software and data reporting systems using modern tools and stacks. 
                                    We have choosen not to reinvent the wheel by utilizing existing methodologies and tools to solve complex business problems.</p>
                            
                                <p> We undertand the technological challenges faced by many institutions across various industries. We are here to provide the most optimal solutions to these challenges.</p>
                            </div>

                            <Link href="/about-us">
                                <a className="box-btn">
                                    Know More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="company-img">
                            <img src="/images/company-img.jpg" alt="company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCompany;