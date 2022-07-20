import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"
import { FaQuoteLeft } from "react-icons/fa"

const Testimonial = () => {
  const testimonialQueryData = useStaticQuery(graphql`
    query testimonialQuery {
      homedefaultJson(jsonId: { eq: "testimonial" }) {
        title
        subtitle
        description
        bgImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 1920, height: 850)
          }
        }
      }
    }
  `)

  const Img =
    testimonialQueryData.homedefaultJson?.bgImage?.childImageSharp
      .gatsbyImageData
  const bgImage = convertToBgImage(Img)
  const title = testimonialQueryData.homedefaultJson?.title
  const subtitle = testimonialQueryData.homedefaultJson?.subtitle
  const description = testimonialQueryData.homedefaultJson?.description
  return (
    <BackgroundImage className="testimonial-bg-images" {...bgImage}>
      <div className="testimonial-area testimonial-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content">
                  <div className="icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="description">{description}</p>
                  <div className="info">
                    <h4 className="title">{title}</h4>
                    <span className="subtitle">{subtitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Testimonial
