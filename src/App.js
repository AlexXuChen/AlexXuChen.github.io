import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Intro from "./pages/intro";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Navbar from "./components/navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro id="intro"/>
        <Work id="work" />
        <Projects id="projects" />
      </div>
    );
  }
}

export default App;
