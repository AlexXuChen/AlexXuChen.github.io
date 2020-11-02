import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Intro from "./pages/intro";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Stack from "./pages/stack";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <div>
    <Navbar />
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path='/' render={() => 
                            (<Intro />)}/>

            <Route exact path='/work' render={() => 
                            (<Work />)}/>

            <Route exact path='/projects' render={() => 
                            (<Projects />)}/>

            <Route exact path='/stack' render={() => 
                            (<Stack />)}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
