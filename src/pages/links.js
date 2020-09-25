import React, { Component } from "react";
//import { Link } from "react-scroll";

import "./styles.css";

class Links extends Component {
  render() {
    return (
     <div className="bg-dark text-center" id="links">
        <div className="links">
          <a href="https://www.linkedin.com/in/alexander-xu-chen/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin text-light"></i>
          </a>
          <a href="https://github.com/AlexXuChen/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-light"></i>
          </a>
          <a href="https://drive.google.com/file/d/1P7TS9SrixlECz5mv2zvhw4HBp-clj-j4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <i class="far fa-file-alt text-light"></i>
          </a>
          <a href="mailto:alexxu.chen@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">
            <i class="far fa-envelope text-light"></i>
          </a>
          <a href="https://devpost.com/AlexXuChen" target="_blank" rel="noopener noreferrer">
            <i class='fas fa-code text-light'></i>
          </a>
          <a href="https://www.facebook.com/people/Alex-Chen/100005588077292" target="_blank" rel="noopener noreferrer">
            <i class='fab fa-facebook text-light'></i>
          </a>
          {/* <a href="https://instagram.com/alexxuchen/" target="_blank">
            <i class="fab fa-instagram text-light"></i>
          </a> */}
        </div>
      </div>
    )
  }
}

export default Links