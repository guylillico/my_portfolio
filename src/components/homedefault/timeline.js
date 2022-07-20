import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Timeline = () => {
  const TimelineData = useStaticQuery(graphql`
    query TimelineQuery {
      file(relativePath: { eq: "images/banner/envato.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 111, height: 21)
        }
      }
    }
  `)
  const envatoImages = TimelineData.file.childImageSharp.gatsbyImageData
  return (
    <div className="timeline-area rn-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="subtitle">TIMELINE</span>
              <h2 className="title">Work History</h2>
            </div>
          </div>
        </div>
        <div className="row mt--10 row--25">
          {/* Start Single Timeline  */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-timeline">
              <div className="inner">
                <div className="time">
                  <span>2017 - Current</span>
                </div>
                <GatsbyImage
                  className="envato-images"
                  image={envatoImages}
                  alt=""
                />
                <span className="job">Full Stack Developer</span>
                <p>
                  With 20 years experience as a professional Web developer, I
                  have acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Timeline  */}

          {/* Start Single Timeline  */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-timeline">
              <div className="inner">
                <div className="time">
                  <span>2014 - 2017</span>
                </div>
                <GatsbyImage
                  className="envato-images"
                  image={envatoImages}
                  alt=""
                />
                <span className="job">Web Developer</span>
                <p>
                  With 20 years experience as a professional Web developer, I
                  have acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Timeline  */}

          {/* Start Single Timeline  */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-timeline">
              <div className="inner">
                <div className="time">
                  <span>2012 - 2014</span>
                </div>
                <GatsbyImage
                  className="envato-images"
                  image={envatoImages}
                  alt=""
                />
                <span className="job">Systems Analyst</span>
                <p>
                  With 20 years experience as a professional Web developer, I
                  have acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Timeline  */}

          {/* Start Single Timeline  */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-timeline">
              <div className="inner">
                <div className="time">
                  <span>2010 - 2012</span>
                </div>
                <GatsbyImage
                  className="envato-images"
                  image={envatoImages}
                  alt=""
                />
                <span className="job">Graphic Designer</span>
                <p>
                  With 20 years experience as a professional Web developer, I
                  have acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Timeline  */}
        </div>
      </div>
    </div>
  )
}

export default Timeline
