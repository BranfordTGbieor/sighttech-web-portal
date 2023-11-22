import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
      <header className="header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 d-none d-lg-block">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="/images/sighttechnologies.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-md-12">
              <div className="header-content-right">
                <ul className="header-contact">
                  <li>
                    <a href="tel:+1123456789">
                      <i className="bx bxs-phone-call"></i> (+231) 776-578-735
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@sighttechnologiesgroup.com">
                      <i className="bx bxs-envelope"></i>{" "}
                      info@sighttechnologiesgroup.com
                    </a>
                  </li>
                </ul>

                <ul className="header-social">
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
                    <a href="https://mail.google.com/" target="_blank">
                      <i className="bx bxs-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default TopHeader;