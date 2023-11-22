import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-time'></i>
                            </div>
                            <div className="content">
                                <h3>Opening Hours</h3>
                                <p>Mon - Fri : 9:00 AM - 05:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-location-plus'></i>
                            </div>
                            <div className="content">
                                <h3>Address</h3>
                                <p>Airfield Sinkor, Monrovia, Liberia</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="content">
                                <h3>Phone</h3>
                                <p>(+231) 776-578-735</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;