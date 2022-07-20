import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import {
  FaLinkedinIn
} from "react-icons/fa"
import Scrollspy from "react-scrollspy"

// Start Header Area
const Header = () => {
  const headerQuery = useStaticQuery(graphql`
    query headerQuery {
      allMenuJson {
        nodes {
          title
          path
        }
      }
      file(relativePath: { eq: "images/logo/desktop-light-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  const arloLogo = headerQuery.file.childImageSharp.gatsbyImageData

  return (
    <Fragment>
      <header className="rn-header header-with-sidebar d-none d-xl-block">
        <div className="header-inner">
          {/* Header Logo  */}
          <div className="logo">
            <Link to="/">
              <GatsbyImage image={arloLogo} alt="" />
            </Link>
          </div>

          <div className="mainmenu-inner">
            <div className="mainmenu">
              <Scrollspy
                className="mainmenu"
                items={[
                  "home",
                  "about",
                  "services",
                  "portfolio",
                  "news",
                  "contact",
                ]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a className="nav-link menu-hover-link" href="/#home">
                    <span className="hover-item">
                      <span data-text="Home">Home</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-hover-link" href="/#about">
                    <span className="hover-item">
                      <span data-text="About">About</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-hover-link" href="/#services">
                    <span className="hover-item">
                      <span data-text="Services">Services</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-hover-link" href="/#portfolio">
                    <span className="hover-item">
                      <span data-text="Portfolio">Portfolio</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-hover-link" href="/#news">
                    <span className="hover-item">
                      <span data-text="News">News</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-hover-link" href="/#contact">
                    <span className="hover-item">
                      <span data-text="Contact">Contact</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>

          {/* Start Header Bottom  */}
          <div className="header-bottom">
            <ul className="social-icons">
              {/* <li>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/guylillico/">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  )
}
// End Header Area

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

//  <li><a href="behance.com"><FaBehance /></a></li>
//  <li><a href="facebook.com"><FaFacebookF /></a></li>
// <li><a href="instagram.com"><FaInstagram /></a></li>
