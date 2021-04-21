import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Intro from "./pages/intro";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Stack from "./pages/stack";
import Navbar from "./components/navbar";

import "./App.css";

class App extends Component {
  render() {
  return (
    <div>
      <Router basename='/'>
      <div className="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand navName" href="#">
            <img
              src={require("./res/profile.jpg")}
              className="profile d-inline-block align-top"
              alt=""
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                    Alexander Xu Chen
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/work">
                  Work
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/projects">
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
      </div>
        <Route exact path='/' component={Intro}/>

        <Route path='/work' component={Work}/>

        <Route path='/projects' component={Projects}/>

        <Route path='/stack' component={Stack}/>
      </Router>
      </div>
    );
  }
}

export default App;
