import React, { Component } from "react";

import "./styles.css";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
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
                <a class="nav-link" href="/">
                    Alexander Xu Chen
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/work">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/stack">
                  Stack
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
