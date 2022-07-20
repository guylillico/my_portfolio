import { Link } from "gatsby"
import React from "react"
import Image from "../elements/image"
import { slugify } from "../utils/utilityFunctions"

const Blog = ({ title, date, author, path, image, excerpt, category }) => {
  return (
    <div className="content-block">
      <div className="post-thubnail">
        {image && (
          <Link to={`/${path}`}>
            <Image image={image} alt={title} />
          </Link>
        )}
      </div>

      <div className="post-content">
        <div className="blog-meta">
          {date && <span className="date">{date}</span>}
          {author && (
            <span className="author">
              By
              <Link className="author-name" to={`/author/${slugify(author)}`}>
                {author}
              </Link>
            </span>
          )}
          {category && (
            <span className="category">
              <Link to={`/category/${slugify(category)}`}>{category}</Link>
            </span>
          )}
        </div>
        {title && (
          <h3 className="title">
            <Link to={`/${path}`}>{title}</Link>
          </h3>
        )}
        {excerpt && <p className="description">{excerpt}</p>}
        <div className="read-more">
          <Link to={`/${path}`}>
            <span>Read More...</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Blog
