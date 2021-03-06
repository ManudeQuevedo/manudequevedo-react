import React from "react"
import { connect } from "react-redux"
import aboutLang from "./about.lang.json"
import Image from '../assets/img/computer.svg'
import Particles from "react-particles-js"
import ParticlesJS from "../assets/particlesjs-about-config.json"
import Ghost from '../assets/img/ghost.png'
import Manu from '../assets/img/manu.jpg'
import '../assets/styles/about.css'

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  };
};

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <img className="about-image" src={Image} alt="Computer" />
            <div className="about-text">
              <h1 className="about-title">
                {aboutLang.header.title[props.lang]}
              </h1>
              <p>{aboutLang.header.text1[props.lang]}</p>
              <div className="grid-1 about-center">
                <img src={Ghost} alt="My dog" />
              </div>
              <p>{aboutLang.header.text2[props.lang]}</p>
              <div className="grid-1 about-center">
                <img src={Manu} alt="Myself" />
              </div>
              <p>{aboutLang.header.text3[props.lang]}</p>
              <Particles className="particle-canvas" params={ParticlesJS} />
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container base-grid">
        <div className="content-basic">
          <h2 className="skills-subtitle">{aboutLang.header.text4[props.lang]}</h2>
          <div className="grid-4">
            <div className="front-end-skills">
              <h3 className="skills-title">
                {aboutLang.skills.title1[props.lang]}
              </h3>
              <ul className="list-item">
                <li>JavaScript ES6+</li>
                <li>jQuery</li>
                <li>SASS</li>
                <li>Bootstrap / Bulma</li>
                <li>CSS Grid / Flexbox</li>
                <li>ReactJS</li>
                <li>React Hooks</li>
                <li>Redux</li>
                <li>Responsive Design</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className="back-end-skills">
              <h3 className="skills-title">
                {aboutLang.skills.title2[props.lang]}
              </h3>
              <ul className="list-item">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>JWT (JSON Web Tokens)</li>
                <li>OAuth</li>
                <li>MongoDB</li>
                <li>RESTful API</li>
                <li>PassportJS</li>
                <li>OOP</li>
              </ul>
            </div>
            <div className="back-end-skills">
              <h3 className="skills-title">
                {aboutLang.skills.title3[props.lang]}
              </h3>
              <ul className="list-item">
                <li>Git / GitHub</li>
                <li>Command Line</li>
                <li>Server Side Rendering</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD / Framer X</li>
                <li>API Integration (Facebook, Google...)</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>Webstorm</li>
                <li>Netlify</li>
              </ul>
            </div>
            <div className="back-end-skills">
              <h3 className="skills-title">
                {aboutLang.skills.title4[props.lang]}
              </h3>
              <ul className="list-item">
                <li>Gatsby</li>
                <li>Python</li>
                <li>AWS/GCP</li>
                <li>UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});
