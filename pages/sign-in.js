import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
      />

      <div className="signup-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="signup-form">
                <div className="section-tittle text-center">
                  <h2>Sign In</h2>
                  <p>With your social network</p>
                </div>

                <form>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <a className="box-btn google" href="#" target="_blank">
                        <i className="bx bxl-google"></i> Google
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
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="box-btn signup-btn">
                        Sign In
                      </button>
                    </div>

                    <div className="col-12 text-center">
                      <p className="al-acc">
                        Not a Member{" "}
                        <Link href="/sign-up  ">
                          <a>Sign Up</a>
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

export default SignIn;
