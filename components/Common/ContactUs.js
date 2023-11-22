import React from 'react';

const ContactUs = () => {
    return (
        <div className="home-contact-area bg-color ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Contact Us</span>
                    <h2>Send Us a Quick Message!</h2>
                    <p>Let us know about your project idea in plain words and we'll figure things out together.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact-img">
                            <img src="/images/contact-img.png" alt="contact" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="content">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" rows="5" required placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn page-btn box-btn">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;