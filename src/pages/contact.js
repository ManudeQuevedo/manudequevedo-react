import React from "react"
import { connect } from "react-redux"
import contactLang from "./contact.lang.json"
import contactImage from '../assets/img/contact.svg'
import Particles from "react-particles-js"
import ParticlesJS from "../assets/particlesjs-contact-config.json"
import Facebook from "../assets/img/facebook.png"
import Pinterest from "../assets/img/pinterest.png"
import Twitter from '../assets/img/twitter.png'
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
          <div className="grid-2">
            <div className="contact-email">
              <h1>{contactLang.header.email[props.lang]}</h1>
              <a
                href="mailto:hola@manudequevedo.com"
                className="btn btn-ghost callToAction"
                rel="noopener noreferrer"
                target="_blank"
              >
                hola@manudequevedo.com
              </a>
            </div>
            <div className="contact-social">
              <h1>{contactLang.header.social[props.lang]}</h1>
              <a
                href="https://twitter.com/ManudeQuevedo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Twitter} alt="twitter logo" />
              </a>
              <a
                href="https://www.facebook.com/elmanumx/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Facebook} alt="facebook logo" />
              </a>
              <a
                href="https://www.pinterest.com.mx/manudequevedo/overview/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Pinterest} alt="pinterest logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
})
