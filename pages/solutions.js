import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";

const Solutions = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Solutions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />

      <div className="home-service-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Smart Services</span>
            <h2>Technical Solutions We provide</h2>
            <p>
              We provide the best custome solutions to individual client's use-cases.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service2.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Web Development</h3>
                  <p>
                    Using modern technologies and methodologies to develop,
                    deploy and maintain high quality software systems as per
                    business needs.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service1.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Mobile Development</h3>
                  <p>
                    {" "}
                    Develop mobile-native application for both android and ios
                    devices. We also develop mobile based routine and survey
                    data collection tools.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/cloud.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Cloud Services Development</h3>
                  <p>
                    {" "}
                    Modern event-driven cloud native application development,
                    deployment and monitoring using industry best practices and
                    Frameworks.{" "}
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service3.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3> Data Quality Assurance</h3>
                  <p>
                    Optimal decisions require high-quality data. High-quality
                    data means data that represents its underlying real-world
                    phenomena correctly.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/data.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3> Database & Data Warehousing</h3>
                  <p>
                    {" "}
                    Database, data warehousing and data reporting pipelines and
                    integration systems development through the use of power
                    modern tools.{" "}
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/reporting.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Business Intelligence</h3>
                  <p>
                    {" "}
                    Leverage modern tools and services to transform data into
                    actionable insights that inform an organization’s strategic
                    business decisions.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/training.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>IT Training</h3>
                  <p>
                    {" "}
                    We help your team build core technical skills, master the
                    technical aspects of their jobs, and keep up with latest
                    trends and technologies.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/doc.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Technical Documentations</h3>
                  <p>
                    {" "}
                    Standardize existing processes through detailed
                    documentations that provide the most accurate information
                    and delivers great value.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service6.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Network Systems & Monitoring</h3>
                  <p>
                    IT systems setup and maintanace. Enterprise applications
                    configuration, deployment and monitoring to meet business
                    needs.
                  </p>

                  <Link href="/solutions-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="col-lg-12">
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
            </div> */}

            <div className="blog-btn text-center">
              <p>
                Get {" "}
                <Link href="/blog">
                  <a>details</a>
                </Link>{" "}
                on individual solution.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Solutions;
