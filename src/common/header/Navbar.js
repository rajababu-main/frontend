import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const auth = localStorage.getItem("user");
  console.log("auth", auth);
  const history = useHistory();

  const Logout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              {auth ? (
                <>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/pages">pages</Link>
                  </li>
                  <li>
                    <Link to="/user">user account</Link>
                  </li>
                  <li>
                    <Link to="/vendor">vendor account</Link>
                  </li>
                  <li>
                    <Link to="/track">track my order</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link linktxt"
                      onClick={Logout}
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className="nav-item">
                <Link className="nav-link linktxt" to="/signup">Sign Up</Link>
              </li> */}
                  <li className="nav-item">
                    <Link className="nav-link linktxt" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link linktxt" to="/signup">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
