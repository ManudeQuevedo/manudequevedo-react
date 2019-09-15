import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import store from "../../store"
import { connect } from "react-redux"
import navLang from "./navbar.lang.json"
import "./navbar.styles.css"

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if (!location) return false
  const { pathname } = location
  return pathname === "/"
}

const mapStateToProps = state => {
  return {
    lang: state.get("lang").get("value")
  }
}

// Set up the languages and code to be recognized
const allLanguages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" }
]

export default connect(mapStateToProps)(props => {
  const [isTop, setIsTop] = useState(true)
  // Get all language options to be displayed on the <select> tag
  const options = allLanguages.map(language => {
    return <option value={language.code}>{language.name}</option>
  })

  document.addEventListener("scroll", () => {
    if ((window.scrollY === 0) !== isTop) {
      setIsTop(window.scrollY === 0)
    }
  })

  useEffect(() => {
    setIsTop(window.scrollY === 0)
  }, [])

  useEffect(() => {
    const menu = document.getElementById("menu-responsive")
    const menuBurger = document.getElementById("burger-buttom")
    menuBurger.addEventListener(
      "click",
      e => {
        let isActive = menuBurger.classList.contains("is-active")
        if (isActive) {
          menuBurger.classList.remove("is-active")
          menu.classList.remove("is-active")
        } else {
          menuBurger.classList.add("is-active")
          menu.classList.add("is-active")
        }
      },
      []
    )

    menu.addEventListener("click", e => {
      menuBurger.classList.remove("is-active")
      menu.classList.remove("is-active")
    })
  }, [])

  return (
    <React.Fragment>
      <nav className={`top-menu ${isTop ? "" : "no-top"}`}>
        <div className="top-menu-wrapper">
          <div className="logo" />
          <div className="hamburger--3dxy" id="burger-buttom">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
          <div className="menuItems">
            <NavLink to="/">{navLang.menu.home[props.lang]}</NavLink>
            <NavLink to="/about">
              <span>{navLang.menu.about.main[props.lang]}</span>
            </NavLink>
            <NavLink to="/projects">
              {navLang.menu.projects[props.lang]}
            </NavLink>
            <NavLink to="/contact">
              <span>{navLang.menu.contact.main[props.lang]}</span>
            </NavLink>
            <div className="lang-select">
              <select
                onChange={e => {
                  store.dispatch({
                    type: "TOGGLE-LANG",
                    language: e.target.value
                  });
                }}
              >
                {options}
              </select>
            </div>
          </div>
        </div>
        <div className="menuItems-responsive" id="menu-responsive">
          <div>
            <div className="menuItems-top-margin">
              <NavLink to="/" isActive={checkActive}>
                {navLang.menu.home[props.lang]}
              </NavLink>
              <NavLink to="/about">
                {navLang.menu.about.main[props.lang]}
              </NavLink>
              <NavLink to="/projects">
                {navLang.menu.projects[props.lang]}
              </NavLink>
              <NavLink to="/contact">
                {navLang.menu.contact.main[props.lang]}
              </NavLink>
              <div className="lang-select">
                <select
                  onChange={e => {
                    store.dispatch({
                      type: "TOGGLE-LANG",
                      language: e.target.value
                    });
                  }}
                >
                  {options}
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
})