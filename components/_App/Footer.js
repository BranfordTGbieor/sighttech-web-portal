import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="content">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/images/sighttechnologies2.png"
                        alt="logo"
                        width="150"
                        height="70"
                      />
                    </a>
                  </Link>
                </div>
                <p>Don't miss out on events. Subscribe for major updates.</p>
                <div className="subscribe">
                  <form className="newsletter-form">
                    <input
                      type="email"
                      id="emails"
                      className="form-control"
                      placeholder="Your Email"
                      name="EMAIL"
                      required
                    />
                    <button className="box-btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>

                <ul className="social">
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
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="content ml-15">
                <h3>Our Service</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/case-studies-details">
                      <a>Data Reporting</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies-details">
                      <a>Network & Monitoring</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies-details">
                      <a> Web and Mobile Apps</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies-details">
                      <a>Data Quality Assurance</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies-details">
                      <a> Technical Training</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies-details">
                      <a>Cloud Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="content">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/faq">
                      <a>FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a href="#">Career</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sign-up">
                      <a>SignUp</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privecy-policy">
                      <a>Privacy & Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="content contacts">
                <h3 className="ml-40">Contact</h3>
                <ul className="footer-list foot-social">
                  <li>
                    <a href="tel:+1975456789">
                      <i className="bx bx-phone"></i> (+231) 776-578-735
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@zoko.com">
                      <i className="bx bxs-envelope"></i>{" "}
                      info@sighttechnologies.net
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@sighttechnologies.net">
                      <i className="bx bxs-envelope"></i>{" "}
                      sight.technologies@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-map"></i> Airfield Sinkor, Monrovia,
                    Liberia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="menu">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions">
                      <a>Solutions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies">
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <p className="right">
                  Copyright &copy; {currentYear} Sight. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
