import { Link } from "gatsby"
import React from "react"
import Image from "../../../elements/image"
import { BlogThumb } from "./thumbnail.stc"

const Thumbnail = ({ image, path, title }) => {
  const imageSrc = image.childImageSharp
  let blogImage
  if (imageSrc.gatsbyImageData) {
    blogImage = <Image image={imageSrc.gatsbyImageData} alt={title} />
  } else {
    blogImage = <img src={imageSrc} alt={title} />
  }
  return (
    <BlogThumb>
      <Link to={path}>{blogImage}</Link>
    </BlogThumb>
  )
}

Thumbnail.defaultProps = {
  image: {},
}
export default Thumbnail
