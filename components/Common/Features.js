import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <div className="feature-area bg-color ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contnet">
              <div className="feature-tittle">
                <span>Features</span>
                <h2>What Makes Us Different</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt consectetur, beatae quod eaque reprehenderit non ab
                  quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi
                </p>
              </div>

              <ul>
                <li>
                  <i className="flaticon-correct"></i>
                  Freelancing Training Courses
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  Technological Consultation
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  Updated and Focused Articles
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  First Class IT Training
                </li>
              </ul>

              <Link href="/sign-up">
                <a className="box-btn">Join Our Community</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img">
              <img src="/images/feature-img.png" alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
