import React from "react";
import Link from "next/link";

const SmartServices = () => {
  return (
    <div className="home-service-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Smart Services</span>
          <h2>Technical Solutions We provide</h2>
          {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                    </p> */}
        </div>

        <div className="row">
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

          <div className="blog-btn text-center">
            <p>
              See our {" "}
              <Link href="/blog">
                <a>Solutions</a>
              </Link>
              {" "}page for the full list of solutions we provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartServices;
