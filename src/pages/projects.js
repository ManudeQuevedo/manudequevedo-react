import React from "react"
import { connect } from "react-redux"
import Image from "../assets/img/building.svg"
import "../assets/styles/about.css"
import Particles from "react-particles-js"
import ParticlesJS from "../assets/particlesjs-projects-config.json"
import projectLang from './projects.lang.json'
import '../assets/styles/projects.css'

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  }
}

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <img className="project-image" src={Image} alt="Computer" />
            <div className="about-text">
              <h1 className="blue">{projectLang.header.title[props.lang]}</h1>
              <Particles className="particle-canvas" params={ParticlesJS} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
})