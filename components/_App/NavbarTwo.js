import React from 'react';
import Link from '../../utils/ActiveLink';

const NavbarTwo = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area three">
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/sighttechnologies.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav text-left">
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Home
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo Three</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-us" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Solutions
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/solutions" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Solutions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/solutions-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Solutions Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Case Studies
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/case-studies" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Case Studies</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/case-studies-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Case Studies Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
  
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Pages
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Team</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                                </Link>
                                            </li>
  
                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sign-in" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/sign-up" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                </Link>
                                            </li>
  
                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Blog
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact-us" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-options d-flex align-items-center ms-auto">
                                    <div className="nav-right">
                                        <form>
                                            <div className="input-group">
                                                <input type="text" className="form-control search" placeholder="Search..." />
                                            </div>
                                            <button type="submit">
                                                <i className="bx bx-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    
                                    <div className="nav-btn">
                                        <Link href="#">
                                            <a className="box-btn">Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarTwo;
