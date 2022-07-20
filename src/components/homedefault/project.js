import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ProjectOne from "../../elements/project/projectOne"

const Project = () => {
  const portfolioData = useStaticQuery(graphql`
    query portfolioDataQuery {
      homedefaultJson(jsonId: { eq: "portfolio" }) {
        title
        subtitle
      }
    }
  `)
  const Title = portfolioData.homedefaultJson?.title
  const Subtitle = portfolioData.homedefaultJson?.subtitle
  return (
    <div className="rn-portfolio-area rn-section-gap bg-color-white portfolio-style-1">
      <div className="container">
        <div className="row mb--10">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="subtitle">{Subtitle}</span>
              <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: Title }}
              ></h2>
            </div>
          </div>
        </div>
        <ProjectOne />
      </div>
    </div>
  )
}
export default Project
