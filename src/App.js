import React from 'react';
import './App.css';
import Links from "./pages/links"
import Intro from "./pages/intro"
import Projects from "./pages/projects"
import Navbar from "./components/navbar"
import Work from "./pages/work"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Intro></Intro>
        <Links></Links>
        <Work></Work>
    </div>
  );
}

export default App;
