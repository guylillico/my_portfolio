import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Projectcard = ({ image, id, title, category, column }) => {
  let projectImg = <GatsbyImage image={image} alt={title} />
  // if (image.fixed && typeof image.fixed !== "function") {
  //   projectImg = <GatsbyImage image={image.fixed} alt={title} />
  // } else if (image.fluid) {
  //   projectImg = <GatsbyImage image={image} alt={title} /> //<Image fluid={image.fluid} alt={title} />
  // } else {
  //   projectImg = <img src={image.src} alt={title} />
  // }
  return (
    <div className={column}>
      <div className="portfolio">
        <div className="thumbnail">
          <Link to={`/project/${id}`}>{projectImg}</Link>
        </div>
        <div className="content">
          <div className="inner">
            {title && (
              <h4 className="title">
                <Link to={`/project/${id}`}>{title}</Link>
              </h4>
            )}
            {category && <span className="category">{category}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projectcard
