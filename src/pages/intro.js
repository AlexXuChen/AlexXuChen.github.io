import React, { Component } from "react";
import Typist from 'react-typist'
// import { Link } from "react-scroll";

import "./styles.css";

class Intro extends Component {
  render() {
    return (
        <div id="intro">
            <Typist>
                <p>Hello!</p>
                <p>My name is Alexander Chen</p>
                <p>Computer Science Student at the University of Toronto St.George Campus</p>
                <p>Welcome to my website!</p>
            </Typist>
        </div>
    )
  }
}

export default Intro