import React from 'react';
import './App.css';
import Links from "./pages/links"
import Intro from "./pages/intro"
import Projects from "./pages/projects"

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Links></Links>
    </div>
  );
}

export default App;
