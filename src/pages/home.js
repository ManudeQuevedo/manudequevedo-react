import React from "react"
import "../assets/styles/home.css"
import { connect } from "react-redux"
import homeLang from "./home.lang.json"
import { Link } from "react-router-dom"
import Particles from "react-particles-js"
import ParticlesJS from '../assets/particlesjs-config.json'
import Typewriter from 'typewriter-effect'
import HomeImage from '../assets/img/programmer.svg'

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  }
}

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="base-grid banner-home">
        <div className="content-basic">
          <h1>{homeLang.header.title[props.lang]}</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "JavaScript",
                  "ReactJS",
                  "NodeJS",
                  "HTML",
                  "CSS",
                  "ExpressJS",
                  "MongoDB"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </h2>
          {/* <Particles className="particle-canvas" params={ParticlesJS} /> */}
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div className="card-a">
              <div className="text">
                {homeLang.steps.cards.register.text[props.lang]}
              </div>
              <div className="text">
                {homeLang.steps.cards.register.text2[props.lang]}
              </div>
            </div>
            <div className="card-a">
              <img className="image" src={HomeImage} alt="Programemer" />
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="learnMore base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div className="work-together">
              {homeLang.steps.learn.text1[props.lang]}
              <div className="work-together2">
                {homeLang.steps.learn.text2[props.lang]}
              </div>
            </div>
            <div className="work-together3">
              <Link
                to="/contact"
                className="btn-bigger btn-ghost"
              >
                {homeLang.steps.learn.button[props.lang]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});
