import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const Pricing = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
            /> 

            <div className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>What We Offer</span>
                        <h2>Our Pricing Plan For You</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse.</p>
                    </div> 

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing">
                                <div className="pricing-top-heading">
                                    <h3>Weeky</h3>
                                    <p>Build A Website</p>
                                </div>

                                <span>$100</span>

                                <ul>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        10GB Storage Space
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        50GB Bandwidth
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        10 Free Sub-Domains
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        10GB Storage Space
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        50GB Bandwidth
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        10 Free Sub-Domains
                                    </li>
                                </ul>

                                <Link href="#">
                                    <a className="box-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing">
                                <div className="pricing-top-heading">
                                    <h3>Monthly</h3>
                                    <p>Build A Website</p>
                                </div>

                                <span>$159</span>

                                <ul>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        80GB Storage Space
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        90GB Bandwidth
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        10 Free Sub-Domains
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                    70GB Storage Space
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        50GB Bandwidth
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Sub-Domains
                                    </li>
                                </ul>

                                <Link href="#">
                                    <a className="box-btn">Get Started</a>
                                </Link>

                                <strong className="popular">Popular</strong>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing">
                                <div className="pricing-top-heading">
                                    <h3>Yearly</h3>
                                    <p>Build A Website</p>
                                </div>

                                <span>$399</span>

                                <ul>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Storage Space
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Bandwidth
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Sub-Domains
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Storage Space
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Bandwidth
                                    </li>
                                    <li>
                                        <i className="bx bx-badge-check"></i>
                                        Unlimited Domains
                                    </li>
                                </ul>
                                
                                <Link href="#">
                                    <a className="box-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            <Footer />
        </>
    )
}

export default Pricing;