import React, { Component } from "react";

import "./styles.css";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div class="container-fluid">
          <div class="row flex-row flex-nowrap">
            <div class="col-3">
              <div class="card card-block">Card</div>
            </div>
            <div class="col-3">
              <div class="card card-block">Card</div>
            </div>
            <div class="col-3">
              <div class="card card-block">Card</div>
            </div>
            <div class="col-3">
              <div class="card card-block">Card</div>
            </div>
            <div class="col-3">
              <div class="card card-block">Card</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
