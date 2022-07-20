import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../utils/utilityFunctions"

const Authorname = ({ author }) => {
  const authorname = author.name
  return (
    <Link className="author-name" to={`/author/${slugify(authorname)}`}>
      {authorname}
    </Link>
  )
}

export default Authorname
