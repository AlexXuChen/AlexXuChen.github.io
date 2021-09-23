import React, { Component } from "react";

import "./styles.css";

import AchievementHub from "../res/projects/achievementhub.png";
import ArcticMiners from "../res/projects/arcticminers.jpg";
import BellSmartCity from "../res/projects/bellsmartcity.png";
import Desperado from "../res/projects/desperado.png";
import PixelPencil from "../res/projects/pixelpenciljs.jpg";
import RoboDropper from "../res/projects/robodropper.jpg";
import SafeBet from "../res/projects/safebet.jpg";
import TwilioChatBot from "../res/projects/twiliochatbot.png";
import Doctor from "../res/projects/doctor.jpeg";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div class="projectCards container-fluid">
          <div class="row flex-row flex-nowrap">
            <div class="card-columns">
              <div class="card">
                <img
                  class="card-img-top"
                  src={BellSmartCity}
                  alt="BellSmartCity"
                />
                <div class="card-body">
                  <h5 class="card-title">Bell Smart City</h5>
                  <h7 className="title-tag">Markham Smart City Pilot</h7>
                  <p class="card-text">
                    A city wide solution that integrates IoT to optimize city
                    operations.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://business.bell.ca/shop/medium-large/internet-of-things/smart-cities"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                </div>
              </div>

              <div class="card">
                <img
                  class="card-img-top"
                  src={AchievementHub}
                  alt="AchievementHub"
                />
                <div class="card-body">
                  <h5 class="card-title">AchievementHub</h5>
                  <p class="card-text">
                    A web-based application for users to share game achievements
                    from multiple gaming platforms.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://quiet-meadow-93883.herokuapp.com/"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                  <a
                    href="https://github.com/csc309-fall-2020/team30"
                    class="btn btn-lg"
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>

              <div class="card p-3">
                <img class="card-img-top" src={Desperado} alt="Desperado" />
                <div class="card-body">
                  <h5 class="card-title">Desperado</h5>
                  <h7 className="title-tag">Android Mobile Game</h7>
                  <p class="card-text">
                    A game made in Java and XML with a SQL backend for user
                    tracking and data. Implements fundamental design patterns
                    and model view presenter architecture.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://github.com/faarisali/desperado-android"
                    class="btn btn-lg"
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>

              <div class="card">
                <img
                  class="card-img-top"
                  src={ArcticMiners}
                  alt="ArcticMiners"
                />
                <div class="card-body">
                  <h5 class="card-title">Arctic Miners</h5>
                  <h7 className="title-tag">
                    UoftHacks VII Winner/Best Blockchain Build
                  </h7>
                  <p class="card-text">
                    An Angular visualizer to simplify and display Ethereum
                    ERC721 Tokens using Smart Contracts and Web3.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://devpost.com/software/blockchaingame"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                  <a
                    href="https://github.com/flodesi/Arctic-Miner"
                    class="btn btn-lg"
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>

              <div class="card p-3">
                <img
                  class="card-img-top"
                  src={PixelPencil}
                  alt="PixelPenciljs"
                />
                <div class="card-body">
                  <h5 class="card-title">PixelPencil.js</h5>
                  <p class="card-text">
                    Open-source JS library to add a pixel painting canvas to
                    webpages.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://pixelpenciljs.herokuapp.com/"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                  <a
                    href="https://github.com/csc309-fall-2020/js-library-chenal14"
                    class="btn btn-lg"
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>

              <div class="card">
                <img
                  class="card-img-top"
                  src={TwilioChatBot}
                  alt="TwilioChatBot"
                />
                <div class="card-body">
                  <h5 class="card-title">Twilio CPaaS Solutions</h5>
                  <h7 className="title-tag">Twilio Online Developer Program</h7>
                  <p class="card-text">
                    Prototyped SMS Chatbot and Survey using Twilio provided
                    phone number for direct user communication, powered by
                    regular expressions.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://www.twilio.com/bots"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                </div>
              </div>

              <div class="card p-3">
                <img class="card-img-top" src={SafeBet} alt="SafeBet" />
                <div class="card-body">
                  <h5 class="card-title">SafeBet</h5>
                  <h7 className="title-tag">Hack the 6ix 2019</h7>
                  <p class="card-text">
                  A vanilla HTML, JS web app hosted with a Node.js instance designed to monitor driving
                habits based on an algorithm trained with Amazon SageMaker to report realtime data.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://devpost.com/software/safe_bet"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                  <a
                    href="https://github.com/AlexXuChen/safe_bet"
                    class="btn btn-lg"
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={RoboDropper} alt="RoboDropper" />
                <div class="card-body">
                  <h5 class="card-title">Robo-Dropper</h5>
                  <h7 className="title-tag">
                    Pueblo Science Hackathon for Science Education Winner
                  </h7>
                  <p class="card-text">
                    A custom built Arduino board programmed with C++ to automate
                    an application relevant and beneficial to 3rd world
                    education.
                  </p>
                </div>
                <div className="button-container">
                  <a
                    href="https://www.artsci.utoronto.ca/news/hackathon-science-education-hacking-better-world?fbclid=IwAR0T7zmL5y94kUCAwGm61Thg08iLqUJiyj7BvgP7fm5xFYEy1xx_UfL-Mxo"
                    class="btn btn-outline-dark btn-lg"
                    role="button"
                    aria-pressed="true"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
