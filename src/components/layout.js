import React, { useEffect } from "react"
import Navbar from "./navbar/navbar.component"
import Footer from "./footer/footer.component"

function Layout(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <React.Fragment>
      <Navbar />
      <div className="app-wrapper">{props.children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout