import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Brand = () => {
  const brandQueryData = useStaticQuery(graphql`
    query brandQuery {
      homedefaultJson(jsonId: { eq: "brand" }) {
        brandGroup {
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 160, height: 65)
            }
          }
        }
      }
    }
  `)
  const BrandImages = brandQueryData?.homedefaultJson?.brandGroup
  return (
    <div className="rn-brand-area ptb--70 bg-color-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-list-wrapper">
              {BrandImages.map((data, index) => (
                <div className="single-image" key={index}>
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
  )
}
export default Brand
