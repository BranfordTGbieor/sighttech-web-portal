import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <h3 className="widget-title">Search Now</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit"><i className='bx bx-search'></i></button>
                    </form>
                </div>
            </div>

            <div className="widget widget-peru-posts-thumb">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="post-wrap">
                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <div className="time">April 20, 2020</div>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Restaurant Management & Web Developing</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <div className="time">April 21, 2020</div>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Ride Share App UX Studeis & Development Case</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <div className="time">April  22, 2020</div>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Parking Management & Web Developing</a> 
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Archives</h3>
                <div className="post-wrap">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>January <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>February <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>March <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>April <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>May <span>2020</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>June <span>2020</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>
                <div className="post-wrap">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>Business <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Privacy <span>(20)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Technology <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tips <span>(12)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Uncategorized <span>(16)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
 
            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="post-wrap">
                    <div className="tagcloud">
                        <Link href="#">
                            <a>Business (3)</a>
                        </Link>

                        <Link href="#">
                            <a>Privacy (3)</a>
                        </Link>

                        <Link href="#">
                            <a>Technology (2)</a>
                        </Link>

                        <Link href="#">
                            <a>Tips (2)</a>
                        </Link>

                        <Link href="#">
                            <a>Uncategorized (1)</a>
                        </Link>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default BlogSidebar;