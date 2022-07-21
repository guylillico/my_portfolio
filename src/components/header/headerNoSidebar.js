import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment, useEffect, useState } from "react"
import Scrollspy from "react-scrollspy"
import Logo from "../../assets/images/logo/guy-lillico-logo.svg"

// Start Header Area
const HeaderNoSidebar = () => {
  const headerQuerySidebar = useStaticQuery(graphql`
    query headerQuerySidebarQuery {
      allMenuJson {
        nodes {
          title
          path
        }
      }
    }
  `)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  useEffect(() => {
    if (!isOverlayOpen) {
      document
        .querySelector(".trigger-popup-menu")
        .classList.remove("overlay-wrapper-open")
      document
        .querySelector(".hambergur-menu")
        .classList.remove("hambergur-menu-open")
    }
  })

  const onMenuToggleClick = () => {
    setIsOverlayOpen(prevState => !prevState)
    document
      .querySelector(".trigger-popup-menu")
      .classList.toggle("overlay-wrapper-open")
    document
      .querySelector(".hambergur-menu")
      .classList.toggle("hambergur-menu-open")
  }

  return (
    <Fragment>
      <header className="rn-header header-default header-transparent d-block d-xl-none">
        <div className="header-inner">
          {/* Header Logo  */}
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Guy Lillico" />
              </Link>
            </div>
          </div>
          {/* Main Menu  */}
          <div
            className="header-right"
            role="button"
            tabIndex={0}
            onClick={onMenuToggleClick}
            onKeyDown={onMenuToggleClick}
          >
            <div className="hambergur-menu">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          {/* Start Social Area  */}
        </div>
      </header>
      <div className="trigger-popup-menu">
        <div className="menu_full">
          <div className="menu_wrapper">
            <Scrollspy
              className="popup_mainmenu"
              items={[
                "home",
                "about",
                "service",
                "portfolio",
                "news",
                "contact",
              ]}
              currentClassName="is-current"
              offset={-200}
            >
              <li>
                <a
                  className="menu-hover-link"
                  href="/#home"
                  onClick={onMenuToggleClick}
                >
                  <span className="hover-item">
                    <span data-text="Home">Home</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="menu-hover-link"
                  href="/#about"
                  onClick={onMenuToggleClick}
                >
                  <span className="hover-item">
                    <span data-text="About">About</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="menu-hover-link"
                  href="/#services"
                  onClick={onMenuToggleClick}
                >
                  <span className="hover-item">
                    <span data-text="Services">Services</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="menu-hover-link"
                  href="/#portfolio"
                  onClick={onMenuToggleClick}
                >
                  <span className="hover-item">
                    <span data-text="Portfolio">Portfolio</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="menu-hover-link"
                  href="/#news"
                  onClick={onMenuToggleClick}
                >
                  <span className="hover-item">
                    <span data-text="News">News</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="menu-hover-link"
                  href="/#contact"
                  onClick={onMenuToggleClick}
                >
                  <span className="hover-item">
                    <span data-text="Contact">Contact</span>
                  </span>
                </a>
              </li>
            </Scrollspy>
          </div>
          <div
            className="trigger_closer"
            role="button"
            tabIndex={0}
            onClick={onMenuToggleClick}
            onKeyDown={onMenuToggleClick}
          >
            <span className="text">Close</span>
            <span className="icon"></span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
// End Header Area

HeaderNoSidebar.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderNoSidebar.defaultProps = {
  siteTitle: ``,
}

export default HeaderNoSidebar
