import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";

const Blog = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <div className="home-blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Blog Post</span>
            <h2>Read Great Articles from our Blog</h2>
            <p>
              Great articles written and edited by industry expects from real
              world experiences.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog1.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>10 April 2020</li>
                    <li>
                      <a href="#">By Admin</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Joe’s Company Software Development Case</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas in fugit minima modi perspiciatis nam aspernatur
                    porro
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog2.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>10 April 2020</li>
                    <li>
                      <a href="#">By Admin</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Temperature App UX Studies & Development Case</h3>
                    </a>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas in fugit minima modi perspiciatis nam aspernatur
                    porro
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog3.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>10 April 2020</li>
                    <li>
                      <a href="#">By Admin</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>IT Software Company Development Case</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas in fugit minima modi perspiciatis nam aspernatur
                    porro
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog4.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>11 April 2020</li>
                    <li>
                      <a href="#">By Admin</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Restaurant Management & Web Developing</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas in fugit minima modi perspiciatis nam aspernatur
                    porro
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog5.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>11 April 2020</li>
                    <li>
                      <a href="#">By Admin</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Ride Share App UX Studeis & Development Case</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas in fugit minima modi perspiciatis nam aspernatur
                    porro
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog6.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>11 April 2020</li>
                    <li>
                      <a href="#">By Admin</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Parking Management & Web Developing</h3>
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas in fugit minima modi perspiciatis nam aspernatur
                    porro
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
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

export default Blog;
