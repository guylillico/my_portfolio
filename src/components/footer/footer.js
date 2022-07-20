import React, { useEffect, useState } from "react"

const Footer = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <footer className="rn-footer-area bg-color-black ptb--60">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <p className="copyright-text">
              © {new Date().getFullYear()} Guy Lillico. All rights reserved.
            </p>
          </div>
          <div className="col-lg-3">
            <div className="back-to-top">
              <div
                className="backtop"
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={handleClick}
              >
                <span className="top"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
