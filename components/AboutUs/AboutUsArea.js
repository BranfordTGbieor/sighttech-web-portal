import React from "react";

const AboutUsArea = () => {
  return (
    <div className="home-company-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="company-content">
              <div className="company-tittle">
                <span>About Us</span>
                <h2>Know About Us</h2>

                <h3>Our Mission</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the rea dable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more or less
                  normal distribution of letters, as opposed to using Content
                  here,content here normal distribution.
                </p>

                <h3>Our Vision</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form variations passages.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="company-img">
              <img src="/images/about-img-2.jpg" alt="company" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsArea;
