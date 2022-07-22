import { graphql, Link, useStaticQuery } from "gatsby"
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
    id: "1",
    icon: <FiMail />,
    label: "Email:",
    text: "guylillico@gmail.com",
  },
  {
    id: "2",
    icon: <FiPhoneIncoming />,
    label: "Phone:",
    text: "+61 415 633 079",
  },
  {
    id: "3",
    icon: <FiMapPin />,
    label: "Location:",
    text: "Perth, Western Australia",
  },
  {
    id: "4",
    icon: <FiBookOpen />,
    label: "University:",
    text: "Murdoch University",
  },
  {
    id: "5",
    icon: <FiBook />,
    label: "Degree:",
    text: "B.MMedia",
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
                        <span className="link">{value.text}</span>
                      </div>
                    ))}
                  </ul>
                )}
                <div className="button-group mt--20">
                  {downloadButton && (
                    <a
                      className="rn-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/docs/guy-lillico-cv-july-2022.pdf"
                    >
                      <span>{downloadButton}</span>
                    </a>
                  )}
                  {linkButton && (
                    <Link className="rn-button" href="/#contact">
                      <span>{linkButton}</span>
                    </Link>
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
