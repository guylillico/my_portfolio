import React from "react"
import { FiExternalLink } from "react-icons/fi"

const Linked = ({ link }) => {
  return (
    <div>
      <FiExternalLink className="icon" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </div>
  )
}

export default Linked
