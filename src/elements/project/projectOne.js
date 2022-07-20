import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Projectcard from "./projectcard"

const ProjectOne = () => {
  const ProjectData = useStaticQuery(graphql`
    query ProjectDataQuery {
      allProjectJson(limit: 6) {
        edges {
          node {
            jsonId
            title
            category
            featured_image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 370, height: 340)
              }
            }
          }
        }
      }
    }
  `)

  const projectsData = ProjectData.allProjectJson.edges
  console.log(projectsData)

  return (
    <div className="row row--25">
      {projectsData.map(data => (
        <Projectcard
          key={data.node.jsonId}
          column="col-lg-4 col-md-6 col-12"
          portfolioStyle="portfolio-style-1"
          id={data.node.jsonId}
          image={data.node.featured_image.childImageSharp.gatsbyImageData}
          title={data.node.title}
          category={data.node.category}
        />
      ))}
    </div>
  )
}

export default ProjectOne
