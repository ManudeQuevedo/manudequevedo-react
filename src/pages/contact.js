import React from "react"
import { connect } from "react-redux"
import contactLang from "./contact.lang.json"
import contactImage from '../assets/img/contact.svg'
import Particles from "react-particles-js"
import ParticlesJS from "../assets/particlesjs-contact-config.json"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import '../assets/styles/contact.css'

library.add(faTwitter, faFacebookF, faInstagram);


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
                href="https://twitter.com/ManuDevMx"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="2x"
                  color="#13eba2"
                  className="social-media-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/elmanumx/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  size="2x"
                  color="#13eba2"
                  className="social-media-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/manudevmx/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="2x"
                  color="#13eba2"
                  className="social-media-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
})
