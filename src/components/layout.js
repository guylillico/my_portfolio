import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import HeaderNoSidebar from "../components/header/headerNoSidebar"
import "../scss/style.scss"

const Layout = ({ children }) => {
  return (
    <div className="active-dark-version main-wrapper">
      <Header />
      <HeaderNoSidebar />
      <div className="home-content-wrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
