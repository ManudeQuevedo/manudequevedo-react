import React from "react"
import { connect } from "react-redux"
import contactLang from "./contact.lang.json"
import contactImage from '../assets/img/contact.svg'
import Particles from "react-particles-js"
import ParticlesJS from "../assets/particlesjs-contact-config.json"
import '../assets/styles/contact.css'

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  }
}

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="wrapper">
          <div className="info">
            <h1>
              {contactLang.header.title[props.lang]}{" "}
              <span className="italyc-text">
                {contactLang.header.title2[props.lang]}
              </span>
            </h1>
          </div>
          <img className="contact-image" src={contactImage} alt="Contact" />
          <Particles className="particle-canvas" params={ParticlesJS} />
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <div className="title">
            <p className="text">{contactLang.header.subtitle[props.lang]}</p>
          </div>
          <div className="grid-1">
            <h1>Form is here</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
})
