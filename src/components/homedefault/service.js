import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ProgressBar } from "react-bootstrap"
import ServiceOne from "../../elements/service/serviceOne"

const Service = () => {
  const bgshapeImages = useStaticQuery(graphql`
    query BgshapeImagesQuery {
      file(relativePath: { eq: "bg/bg-image-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1920)
        }
      }
      homedefaultJson(jsonId: { eq: "skill" }) {
        title
        description
      }
    }
  `)
  const Title = bgshapeImages.homedefaultJson?.title
  const Description = bgshapeImages.homedefaultJson?.description
  return (
    <div className="service-area bg-color-extra03 rn-section-gap" id="services">
      {/* Start Service Area  */}
      <div className="rn-service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb--30">
                <span className="subtitle">SERVICES</span>
                <h2 className="title">What I Do</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceOne
              column="col-lg-4 col-md-6 col-12"
              serviceStyle="service-style-1 mt--30"
            />
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Skill Area  */}
      <div className="rn-counterup-area counterup-style-1 rn-section-gapTop">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="left-content">
                <h3
                  className="title"
                  dangerouslySetInnerHTML={{ __html: Title }}
                ></h3>
                <p className="description">{Description}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
              <div className="progressbar-area">
                <div className="progress-bar--1">
                  <div className="single-progress">
                    <h6 className="title">Front End Development</h6>
                    <ProgressBar now={90} />
                    <span className="label">90%</span>
                  </div>
                  <div className="single-progress">
                    <h6 className="title">Brand Identity</h6>
                    <ProgressBar now={77} />
                    <span className="label">72%</span>
                  </div>
                  <div className="single-progress">
                    <h6 className="title">Javascript</h6>
                    <ProgressBar now={89} />
                    <span className="label">89%</span>
                  </div>
                  <div className="single-progress">
                    <h6 className="title">React</h6>
                    <ProgressBar now={89} />
                    <span className="label">89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Skill Area  */}
    </div>
  )
}
export default Service
