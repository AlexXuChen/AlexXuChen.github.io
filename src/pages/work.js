import React, { Component } from "react";
import { Http, FreeBreakfastOutlined, WebAssetOutlined, CodeOutlined, SupervisorAccount } from '@material-ui/icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

import RedHat from '../res/work/redhat.bmp';
import Apothecary from '../res/work/apothecary.bmp';
import Bell from '../res/work/bell.bmp';
import Starbucks from '../res/work/starbucks.bmp';
import CSSU from '../res/work/cssu.bmp';

class Work extends Component {
  render() {
    return (
      <div id="work">
        <br />
        <br />
        <br />
        <br />
        <VerticalTimeline className="vertical-timeline-custom-line">

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={ <CodeOutlined/> }
        >
          <div className="timeline-info">
              <img className="timeline-pic" src={RedHat} alt="RedHat"/>
            <div className="timeline-text">
              <h3 className="vertical-timeline-element-title">Red Hat Software</h3>
              <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
            </div>
          </div>
          <p>Software Developer Intern</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(245,245,245) ", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(245,245,245)" }}
          date="Sep 2020 - Dec 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WebAssetOutlined/>}
        >
        <div className="timeline-info">
          <img className="timeline-pic" src={Apothecary} alt="Apothecary.ai"/>
            <div className="timeline-text">
              <h3 className="vertical-timeline-element-title">Apothecary.ai</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco Bay Area, CA</h4>
            </div>
          </div>
          <p>Frontend Developer Co-op</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2020 - Aug 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Http/>}
        >
          <div className="timeline-info">
            <img className="timeline-pic" src={Bell} alt="Bell"/>
            <div className="timeline-text">
              <h3 className="vertical-timeline-element-title">Bell Canada Enterprises</h3>
              <h4 className="vertical-timeline-element-subtitle">Greater Toronto Area, ON</h4>
            </div>
          </div>
          <p> 
            Backend Developer Intern 
            <br/>
            Network IoT 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(245,245,245) ", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(245,245,245)" }}
          date="Sep 2019 - Apr 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SupervisorAccount/>}
        >
          <div className="timeline-info">
            <img className="timeline-pic" src={CSSU} alt="CSSU"/>
            <div className="timeline-text">
              <h3 className="vertical-timeline-element-title">CSSU</h3>
              <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
            </div>
          </div>
          <p> 
            Office Ops 
            <br/>
            University of Toronto, St. George
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2019 - Aug 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Http/>}
        >
          <div className="timeline-info">
            <img className="timeline-pic" src={Bell} alt="Bell"/>
            <div className="timeline-text">
              <h3 className="vertical-timeline-element-title">Bell Canada Enterprises</h3>
              <h4 className="vertical-timeline-element-subtitle">Greater Toronto Area, ON</h4>
            </div>
          </div>
          <p> 
            Software Engineering Intern 
            <br/>
            Network IoT 
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(245,245,245) ", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(245,245,245)" }}
            date="Jun 2017 - Aug 2018"
            dateStyle={{ color: "#fff" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FreeBreakfastOutlined/>}
          >
            <div className="timeline-info">
              <img className="timeline-pic" src={Starbucks} alt="Starbucks"/>
              <div className="timeline-text">
                <h3 className="vertical-timeline-element-title">Starbucks</h3>
                <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
              </div>
            </div>
            <p>
              Partner
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    );
  }
}

export default Work;
