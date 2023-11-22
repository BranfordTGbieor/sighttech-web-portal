import React from 'react';
import Link from 'next/link';

const CaseStudies = () => {
    return (
        <div className="home-case ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Case Studies</span>
                    <h2>Have a Look Our Work Showcase</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                </div>

                <div className="row case-list">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-case">
                            <div className="case-img">
                                <Link href="/case-studies-details">
                                    <a>
                                        <img src="/images/case-studies/case-studies1.jpg" alt="case"/>
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="/case-studies-details">
                                    <a>
                                        <h3>Joe’s Company Software Development Case</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>

                                <Link href="/case-studies-details">
                                    <a className="line-bnt">
                                        View Project Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 item">
                        <div className="single-case">
                            <div className="case-img">
                                <Link href="/case-studies-details">
                                    <a>
                                        <img src="/images/case-studies/case-studies2.jpg" alt="case"/>
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="/case-studies-details">
                                    <a>
                                        <h3>Ride Share App UX Studies & Development Case</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>

                                <Link href="/case-studies-details">
                                    <a className="line-bnt">
                                        View Project Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-case">
                            <div className="case-img">
                                <Link href="/case-studies-details">
                                    <a>
                                        <img src="/images/case-studies/case-studies3.jpg" alt="case"/>
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="/case-studies-details">
                                    <a>
                                        <h3>Restaurant Management & Web Developing</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>

                                <Link href="/case-studies-details">
                                    <a className="line-bnt">
                                        View Project Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-case">
                            <div className="case-img">
                                <Link href="/case-studies-details">
                                    <a>
                                        <img src="/images/case-studies/case-studies4.jpg" alt="case"/>
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="/case-studies-details">
                                    <a>
                                        <h3>IT Software Company Development Case</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>

                                <Link href="/case-studies-details">
                                    <a className="line-bnt">
                                        View Project Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-case">
                            <div className="case-img">
                                <Link href="/case-studies-details">
                                    <a>
                                        <img src="/images/case-studies/case-studies5.jpg" alt="case"/>
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="/case-studies-details">
                                    <a>
                                        <h3>Parking Management & Web Developing</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>

                                <Link href="/case-studies-details">
                                    <a className="line-bnt">
                                        View Project Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-case">
                            <div className="case-img">
                                <Link href="/case-studies-details">
                                    <a>
                                        <img src="/images/case-studies/case-studies5.jpg" alt="case"/>
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="/case-studies-details">
                                    <a>
                                        <h3>Temperature App UX Studies & Development Case</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>

                                <Link href="/case-studies-details">
                                    <a className="line-bnt">
                                        View Project Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="case-btn text-center">
                    <p>We Have More Amazing Cases. <Link href="/case-studies"><a href="#">View More</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;