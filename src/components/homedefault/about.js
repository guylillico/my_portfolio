import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  FiBook,
  FiBookOpen,
  FiMail,
  FiMapPin,
  FiPhoneIncoming,
} from "react-icons/fi"

const infoList = [
  {
    id: "2",
    icon: <FiMapPin />,
    label: "Location:",
    link: "Perth, Western Australia",
  },
  {
    id: "3",
    icon: <FiBookOpen />,
    label: "University:",
    link: "Murdoch University",
  },
  {
    id: "4",
    icon: <FiBook />,
    label: "Degree:",
    link: "B.MMedia",
  },
  {
    id: "4",
    icon: <FiMail />,
    label: "Mail:",
    link: "guylillico@gmail.com",
  },
  {
    id: "4",
    icon: <FiPhoneIncoming />,
    label: "Phone:",
    link: "+61 415 633 079",
  },
]

const About = () => {
  const aboutQueryData = useStaticQuery(graphql`
    query AboutDefaultQuery {
      homedefaultJson(jsonId: { eq: "about" }) {
        title
        description
        downloadButton
        linkButton
        aboutData {
          iconName
          id
          label
          value
        }
      }
      file(relativePath: { eq: "images/banner/person-image-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 395, height: 470)
        }
      }
    }
  `)

  const PortfolioImages = aboutQueryData?.file.childImageSharp.gatsbyImageData
  const title = aboutQueryData.homedefaultJson?.title
  const description = aboutQueryData.homedefaultJson?.description
  const downloadButton = aboutQueryData.homedefaultJson?.downloadButton
  const linkButton = aboutQueryData.homedefaultJson?.linkButton

  return (
    <div
      className="rb-about-area about-style-01 rn-section-gap bg-color-white"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="subtitle">Biography</span>
              <h2 className="title">About Me</h2>
            </div>
          </div>
        </div>
        <div className="row mt--60 mb--30 row--25">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="thumbnail">
              <div className="image">
                <GatsbyImage
                  className="portfolio-images"
                  image={PortfolioImages}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12 mt_md--40 mt_sm--40">
            <div className="inner">
              <div className="content">
                <div className="section-title">
                  {title && (
                    <h3
                      className="title"
                      dangerouslySetInnerHTML={{ __html: title }}
                    ></h3>
                  )}
                  {description && (
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  )}
                </div>
                {infoList && (
                  <ul className="myabout-list">
                    {infoList.map((value, index) => (
                      <div className="list" key={index}>
                        <div className="icon">{value.icon}</div>
                        <span className="label">{value.label}</span>
                        <a className="link" href="#labelvalue">
                          {value.link}
                        </a>
                      </div>
                    ))}
                  </ul>
                )}
                <div className="button-group mt--20">
                  {downloadButton && (
                    <a className="rn-button" href="#downloadbutton">
                      <span>{downloadButton}</span>
                    </a>
                  )}
                  {linkButton && (
                    <a className="rn-button" href="#linkbutton">
                      <span>{linkButton}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
