import React, { Component } from "react";
import Typist from 'react-typist'
// import { Link } from "react-scroll";

import "./styles.css";


class Intro extends Component {
  render() {
    return (
        <div className="intro">
            <div className="introText">
                <Typist avgTypingDelay={40} cursor={{ hideWhenDone: true }}>
                    <p>Hi there, my name is {' '}
                        <span className="highlight">Alexander Xu Chen</span>
                        .</p>
                    <Typist.Delay ms={1000} />
                    <p>
                        <span className="highlight">Software Developer</span> 
                        {' '}studying{' '}
                        <span className="highlight">Computer Science</span>
                        {' '} @ {' '}
                        <span className="highlight">University of Toronto</span>
                        .</p>
                    <Typist.Delay ms={500} />
                    <p>Welcome to my website!</p>
                </Typist>
            </div>
        </div>
    )
  }
}

export default Intro