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
                    <p>I'm a {' '}
                        <span className="highlight">Software Developer</span> 
                        {' '} studying {' '}
                        <span className="highlight">Computer Science</span>
                        {' '} at the {' '}
                        <span className="highlight">University of Toronto</span>
                        .</p>
                    <Typist.Delay ms={500} />
                    <p>Welcome to my website!</p>
                </Typist>
            </div>
            <div className="profileContainer">
                <img className="profile" src={require('../res/profile.jpg')} alt="profile"/>
            </div>
        </div>
    )
  }
}

export default Intro