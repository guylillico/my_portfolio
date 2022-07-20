import { Link } from "gatsby"
import React from "react"
import { slugify } from "../utils/utilityFunctions"
import Linked from "./post-media/linked"
import Thumbnail from "./post-media/thumbnail"
import Authorname from "./post-media/thumbnail/authorname"

const Post = ({ content, column }) => {
  const { slug, date, title, author, excerpt, format, image, link, category } =
    content
  return (
    <div className={`${column}`}>
      <div className="content-block">
        {format === "link" && <Linked link={link} />}
        {(format === "image" || format === "standard") && (
          <div className="post-thubnail">
            <Thumbnail path={`/${slug}`} image={image} title={title} />
          </div>
        )}
        <div className="post-content">
          <div className="blog-meta">
            {date && <span className="date">{date}</span>}
            {author && (
              <span className="author">
                By
                <Authorname author={author} />
              </span>
            )}
            {category && (
              <span className="category">
                <Link to={`/category/${slugify(category)}`}>
                  <span>{category}</span>
                </Link>
              </span>
            )}
          </div>

          {title && (
            <h3 className="title">
              <Link to={`/${slug}`}>{title}</Link>
            </h3>
          )}
          {excerpt && <p className="description">{excerpt}</p>}
          <div className="read-more">
            <Link to={`/${slug}`}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
