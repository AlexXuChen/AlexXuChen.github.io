import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Intro from "./pages/intro"
import Projects from "./pages/projects"
import Work from "./pages/work"
import Stack from "./pages/stack"

import './App.css';

function App() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Intro />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/stack">
            <Stack />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
