import React, { Component } from "react";

import "./styles.css";

class Links extends Component {
  render() {
    return (
     <div id="links">
        <div className="links">
          <a href="https://www.linkedin.com/in/alexander-xu-chen/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/AlexXuChen/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a href="https://drive.google.com/file/d/1P7TS9SrixlECz5mv2zvhw4HBp-clj-j4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <i class="far fa-file-alt fa-3x"></i>
          </a>
          <a href="mailto:alexxu.chen@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">
            <i class="far fa-envelope fa-3x"></i>
          </a>
          <a href="https://devpost.com/AlexXuChen" target="_blank" rel="noopener noreferrer">
            <i class='fas fa-code fa-3x'></i>
          </a>
          <a href="https://www.facebook.com/people/Alex-Chen/100005588077292" target="_blank" rel="noopener noreferrer">
            <i class='fab fa-facebook fa-3x'></i>
          </a>
          <a href="https://www.instagram.com/cookingcuzcovid/" target="_blank">
            <i class="fab fa-instagram fa-3x"></i>
          </a>
          <a href="https://www.piskelapp.com/user/5946630501564416#" target="_blank">
            <i class="fas fa-palette fa-3x"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Links