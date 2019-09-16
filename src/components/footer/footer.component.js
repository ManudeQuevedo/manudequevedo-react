import React from "react"
import { connect } from "react-redux"
import footerLang from "./footer.lang.json"
import "./footer.styles.css"

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  }
}

export default connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="footer-bottom base-grid">
        <div className="content-basic">
          <div>
            <div className="footer-copyrights">
              © {new Date().getFullYear()} - <span className="footer-dev">Manu de Quevedo </span>
              {footerLang.header.rights[props.lang]}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
})