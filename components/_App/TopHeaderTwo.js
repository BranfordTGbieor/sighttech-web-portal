import React from 'react';

const TopHeaderTwo = () => {
    return (
        <header className="header-area header-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-7">
                        <div className="header-content-right">
                            <ul className="header-contact">
                                <li>
                                    <a href="tel:+1123456789">
                                        <i className="bx bxs-phone-call"></i> +1 123 456 789
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hello@zoko.com">
                                        <i className="bx bxs-envelope"></i> hello@zoko.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5">
                        <div className="header-content-right text-right">
                            <ul className="header-social">
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopHeaderTwo;