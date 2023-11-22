import React from 'react';
import Link from 'next/link';

const BlogPostStyleTwo = () => {
    return (
        <div className="home-blog-area ptb-100 bg-color">
            <div className="container">
                <div className="section-title">
                    <span>Blog Post</span>
                    <h2>Our Regular Blogs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.</p>
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
                                    <li><a href="#">By Admin</a></li>
                                </ul>
                                
                                <Link href="/blog-details">
                                    <a>
                                        <h3>Joe’s Company Software Development Case</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro</p>
                                
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
                                    <li><a href="#">By Admin</a></li>
                                </ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Temperature App UX Studies & Development Case</h3>
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro</p>

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
                                    <li><a href="#">By Admin</a></li>
                                </ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>IT Software Company Development Case</h3>
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro</p>

                                <Link href="/blog-details">
                                    <a className="line-bnt">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="blog-btn text-center">
                    <p>We Have More Usefull Blogs For You. <Link href="/blog"><a>View More</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default BlogPostStyleTwo;