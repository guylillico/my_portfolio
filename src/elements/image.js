import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const NonStretchedImage = props => {
  // let normalizedProps = props
  // normalizedProps = { ...normalizedProps.fluid, aspectRatio: 1 }
  // let alignment
  // if (props.align === "right") {
  //   alignment = "0 0 0 auto"
  // } else if (props.align === "left") {
  //   alignment = "0 auto 0 0"
  // } else {
  //   alignment = "0 auto"
  // }

  // if (props.fluid && props.fluid.presentationWidth) {
  //   normalizedProps = {
  //     ...props,
  //     style: {
  //       ...(props.style || {}),
  //       maxWidth: props.fluid.presentationWidth,
  //       margin: alignment,
  //     },
  //   }
  // }

  return <GatsbyImage image={props.image} alt="" />
}

export default NonStretchedImage
