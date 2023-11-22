import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";

import Footer from "../components/_App/Footer";

const CaseStudies = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Case Studies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
      />

      <div className="home-case ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Case Studies</span>
            <h2>Use Cases & Possible Solutions</h2>
            <p>
              Not sure about the solution you might need? Below are use-cases
              and possible solutions with industry best practices that might
              give you clues around existing issues you might want to solve.
            </p>
          </div>

          <div className="row case-list">
            <div className="col-lg-4 col-sm-6">
              <div className="single-case">
                <div className="case-img">
                  <Link href="/case-studies-details">
                    <a>
                      <img
                        src="/images/case-studies/case-studies1.jpg"
                        alt="case"
                      />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <Link href="/case-studies-details">
                    <a>
                      <h3>Joe’s Company Software Development Case</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, coloni is to nsectetur
                    adipiscing elit, sed do eiudvi smod tempor incididunt ipsum
                    dolor.
                  </p>

                  <Link href="/case-studies-details">
                    <a className="line-bnt">View Project Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 item">
              <div className="single-case">
                <div className="case-img">
                  <Link href="/case-studies-details">
                    <a>
                      <img
                        src="/images/case-studies/case-studies2.jpg"
                        alt="case"
                      />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <Link href="/case-studies-details">
                    <a>
                      <h3>Ride Share App UX Studies & Development Case</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, coloni is to nsectetur
                    adipiscing elit, sed do eiudvi smod tempor incididunt ipsum
                    dolor.
                  </p>

                  <Link href="/case-studies-details">
                    <a className="line-bnt">View Project Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-case">
                <div className="case-img">
                  <Link href="/case-studies-details">
                    <a>
                      <img
                        src="/images/case-studies/case-studies3.jpg"
                        alt="case"
                      />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <Link href="/case-studies-details">
                    <a>
                      <h3>Restaurant Management & Web Developing</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, coloni is to nsectetur
                    adipiscing elit, sed do eiudvi smod tempor incididunt ipsum
                    dolor.
                  </p>

                  <Link href="/case-studies-details">
                    <a className="line-bnt">View Project Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-case">
                <div className="case-img">
                  <Link href="/case-studies-details">
                    <a>
                      <img
                        src="/images/case-studies/case-studies4.jpg"
                        alt="case"
                      />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <Link href="/case-studies-details">
                    <a>
                      <h3>IT Software Company Development Case</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, coloni is to nsectetur
                    adipiscing elit, sed do eiudvi smod tempor incididunt ipsum
                    dolor.
                  </p>

                  <Link href="/case-studies-details">
                    <a className="line-bnt">View Project Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-case">
                <div className="case-img">
                  <Link href="/case-studies-details">
                    <a>
                      <img
                        src="/images/case-studies/case-studies5.jpg"
                        alt="case"
                      />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <Link href="/case-studies-details">
                    <a>
                      <h3>Parking Management & Web Developing</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, coloni is to nsectetur
                    adipiscing elit, sed do eiudvi smod tempor incididunt ipsum
                    dolor.
                  </p>

                  <Link href="/case-studies-details">
                    <a className="line-bnt">View Project Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-case">
                <div className="case-img">
                  <Link href="/case-studies-details">
                    <a>
                      <img
                        src="/images/case-studies/case-studies5.jpg"
                        alt="case"
                      />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <Link href="/case-studies-details">
                    <a>
                      <h3>Temperature App UX Studies & Development Case</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, coloni is to nsectetur
                    adipiscing elit, sed do eiudvi smod tempor incididunt ipsum
                    dolor.
                  </p>

                  <Link href="/case-studies-details">
                    <a className="line-bnt">View Project Details</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link page-links" href="#">
                      <i className="bx bx-chevrons-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bx bx-chevrons-right"></i>
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
  );
};

export default CaseStudies;
