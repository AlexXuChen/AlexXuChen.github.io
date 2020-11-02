import React, { Component } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/js/dist/util';

import "./styles.css";

class Work extends Component {
  render() {
    return (
      <div className="container" id="work">
        <br />
        <br />
        <br />
        <br />
        {/* Row 1 */}
        <div class="card-deck">
          <div class="card bg-dark text-white">
            <img
              src="https://logos-download.com/wp-content/uploads/2016/04/Bell_logo.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Bell Canada Enterprises</h5>
              <h7 className="title-tag">
                Software Engineering Intern - IoT Application Developer
              </h7>
              <p class="card-text">May 2019 - September 2019</p>
              <hr />
              <h7 className="title-tag">
                Software Engineering Intern - Backend and DevOps Engineer
              </h7>
              <p class="card-text">May 2020 - September 2020</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <br></br>
        <div class="card-deck">
          <div class="card bg-dark text-white">
            <img
              src="https://www.apothecary.ai/apothecary-logo.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Apothecary.ai</h5>
              <h7 className="title-tag">
                Contractor
              </h7>
              <p class="card-text">September 2020 - Present</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
