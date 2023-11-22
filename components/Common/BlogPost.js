import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="home-blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Blog Post</span>
          <h2>Amazing Articles from our Blog</h2>
          <p>
            {" "}
            Great articles written and edited by industry expects from real
            world experiences.{" "}
          </p>
        </div>

        <div className="row justify-content-center">
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
                    <a href="#">By Branford T Gbieor</a>
                  </li>
                </ul>

                <Link href="/blog-details">
                  <a>
                    <h3>Cloud and Modern Systems</h3>
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
                    <a href="#">By Branford T Gbieor</a>
                  </li>
                </ul>

                <Link href="/blog-details">
                  <a>
                    <h3>Agile Software Development</h3>
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
                    <a href="#">By Branford T Gbieor</a>
                  </li>
                </ul>

                <Link href="/blog-details">
                  <a>
                    <h3>Artificial Intelligence & Businesses</h3>
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
        </div>

        <div className="blog-btn text-center">
          <p>
            Read more amazing articles from our{" "}
            <Link href="/blog">
              <a>bog</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
