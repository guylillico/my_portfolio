import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FiList } from "react-icons/fi"
import Layout from "../components/layout"
import Image from "../elements/image"

const ProjectDetails = ({ data }) => {
  const projectData = data.projectJson
  const projectImage = data.projectJson?.features
  return (
    <Layout>
      <div className="rn-project-details-area rn-section-gapBottom pt--90 bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="page-top">
                  <h1 className="title_holder">{projectData.title}</h1>
                </div>
                <div className="portfolio-content mt--90 mt_lg--30 mt_md--20 mt_sm--20">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="content-left">
                        <h3>Details</h3>
                        <ul className="list_holder">
                          <li>
                            <span className="icon">
                              <FiList />
                              Category:
                            </span>
                            <span className="projectinfo">
                              {projectData.category}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 mt_md--30 mt_sm--30">
                      <div className="content-left">
                        <p>{projectData.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumbnail mt--90 mt_md--40 mt_sm--40">
                  <Image
                    fluid={
                      projectData.featured_image.childImageSharp.gatsbyImageData
                    }
                  />
                </div>

                <div className="image-group">
                  {projectImage.map((data, index) => (
                    <div className="single-image mt--30" key={index}>
                      <GatsbyImage
                        image={data.image.childImageSharp.gatsbyImageData}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    projectJson(jsonId: { eq: $id }) {
      id
      title
      body
      category
      client
      imgesBY
      featured_image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 2000, height: 1000)
        }
      }
      features {
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 1920, height: 1280)
          }
        }
      }
    }
  }
`
export default ProjectDetails
