import React, { Component } from "react";
import { Link, animateScroll } from "react-scroll";

import "./styles.css";

class Navbar extends Component {
  scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300 });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand navName" href="#">
          <img
            src={require("../res/profile.jpg")}
            className="profile d-inline-block align-top"
            alt=""
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link activeClass="active" className="nav-link" smooth spy to="intro">
                Alexander Xu Chen
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClass="active" className="nav-link" smooth spy to="work">
                Work
              </Link>
            </li>
            <li class="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                smooth
                spy
                to="projects"
              >
                Projects
              </Link>
            </li>
            {/* <li class="nav-item">
            <a class="nav-link" href="/stack">
              Stack
            </a>
          </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
