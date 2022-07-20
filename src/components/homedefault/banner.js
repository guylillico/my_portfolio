import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"
import TextLoop from "react-text-loop"

const Banner = () => {
  const bannerQueryData = useStaticQuery(graphql`
    query BannerDefaultQuery {
      homedefaultJson(jsonId: { eq: "main-banner" }) {
        title
        subtitle
        bgImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      file(relativePath: { eq: "images/banner/person-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 200)
        }
      }
    }
  `)

  const Img =
    bannerQueryData?.homedefaultJson?.bgImage?.childImageSharp?.gatsbyImageData

  const BannerImage = convertToBgImage(Img)
  const PortfolioImages =
    bannerQueryData?.file?.childImageSharp?.gatsbyImageData
  const Title = bannerQueryData?.homedefaultJson?.title
  // const SubTitle = bannerQueryData?.homedefaultJson?.subtitle

  return (
    <div className="rn-slider-area" id="home">
      {/* Start Single Slider  */}
      <BackgroundImage
        className="rn-slide slider-style-01 banner-fixed-height"
        {...BannerImage}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content text-center">
                    <div className="thumbnail">
                      <GatsbyImage
                        className="portfolio-images"
                        image={PortfolioImages}
                        alt=""
                      />
                    </div>
                    <h1
                      className="title"
                      dangerouslySetInnerHTML={{ __html: Title }}
                    ></h1>
                    <h4 className="subtitle">
                      I'm a
                      <TextLoop mask={true}>
                        <span>Front End Developer</span>
                        <span>UI Designer</span>
                        <span>Freelancer</span>
                      </TextLoop>{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="black-bg-overlay"></div>
        {/* <a className="angle-down-btn" href="#">
          <i className="xcon-angle-double-down"></i>
        </a> */}
      </BackgroundImage>
      {/* End Single Slider  */}
    </div>
  )
}
export default Banner
