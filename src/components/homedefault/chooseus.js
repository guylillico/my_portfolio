import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FiArrowRightCircle, FiDatabase, FiLayers } from "react-icons/fi"

const chooseusdata = [
  {
    id: "choose-us-1",
    icon: <FiArrowRightCircle />,
    title: "Fully Responsive",
    description:
      "Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit class aptent taciti sociosqu.",
  },
  {
    id: "choose-us-2",
    icon: <FiLayers />,
    title: "Friendly Support",
    description:
      "Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit class aptent taciti sociosqu.",
  },
  {
    id: "choose-us-3",
    icon: <FiDatabase />,
    title: "Cross Browsing",
    description:
      "Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit class aptent taciti sociosqu.",
  },
]

const Chooseus = () => {
  const chooseusQueryData = useStaticQuery(graphql`
    query chooseusQueryQuery {
      homedefaultJson(jsonId: { eq: "chooseus" }) {
        imagegroup {
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 600, height: 500)
            }
          }
        }
      }
    }
  `)
  const ChooseusImage = chooseusQueryData.homedefaultJson.imagegroup

  return (
    <div className="rn-choose-us-area choose-us-style-01 rn-section-gap bg-color-extra03">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="image-group">
              {ChooseusImage.map((data, index) => (
                <div className="single-image" key={index}>
                  <GatsbyImage
                    image={data.image.childImageSharp.gatsbyImageData}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt_sm--30">
            <div className="inner">
              <div className="feature-list-inner">
                {chooseusdata.map((data, index) => (
                  <div className="feature-list" key={index}>
                    <div className="feature-icon">
                      <i className="icon">{data.icon}</i>
                    </div>
                    <div className="feature-content">
                      <h4 className="title">{data.title}</h4>
                      <p className="description">{data.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chooseus
