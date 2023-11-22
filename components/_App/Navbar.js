import React from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

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
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
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
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
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
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        About
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/solutions" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Solutions
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/case-studies" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Case Studies
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact-us" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="others-options d-flex align-items-center ms-auto">
                  <div className="nav-right">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control search"
                          placeholder="Search..."
                        />
                      </div>
                      <button type="submit">
                        <i className="bx bx-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <ul className="navbar-nav text-right">
                  <li className="nav-item">
                    <Link href="/sign-in">
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
