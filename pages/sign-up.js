import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
      />

      <div className="signup-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="signup-form">
                <div className="section-tittle text-center">
                  <h2>Sign Up</h2>
                  <p>With your social network</p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <a className="box-btn google" href="#" target="_blank">
                        <i className="bx bxl-google-plus"></i> Google
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <a className="box-btn facebook" href="#" target="_blank">
                        <i className="bx bxl-facebook"></i> Facebook
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <a className="box-btn twitter" href="#" target="_blank">
                        <i className="bx bxl-twitter"></i> Twitter
                      </a>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 ">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="User Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          I agree with{" "}
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="box-btn signup-btn">
                        Sign Up
                      </button>
                    </div>

                    <div className="col-12 text-center">
                      <p className="al-acc">
                        Already have an account?{" "}
                        <Link href="/sign-in">
                          <a>Sign In</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
