import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"

const Archive = ({ data, pageContext }) => {
  console.log("Archive", data, pageContext)
  const authorblogs = data.allMarkdownRemark.edges
  const { totalCount } = data.allMarkdownRemark
  const { author } = pageContext
  const pageHeader = `${totalCount} Post${
    totalCount === 1 ? "" : "s"
  } By <span class="theme-color">${author}</span>`
  return (
    <Layout>
      <div className="rn-post-list-page rn-section-gapBottom pt--90 bg-color-white">
        <div className="container">
          <div className="col-lg-12">
            <div className="page-top">
              <h1
                className="title_holder"
                dangerouslySetInnerHTML={{ __html: pageHeader }}
              ></h1>
              <div className="breadcrumbs-area">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li className="active">Archive</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {authorblogs.map(blog => (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={blog.node.fields.slug}
              >
                <Post
                  content={{
                    ...blog.node.fields,
                    ...blog.node.frontmatter,
                    excerpt: blog.node.excerpt,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const allauthorQueryData = graphql`
  query allauthorQuery($author: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { authorId: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
            authorId
          }
          excerpt
          frontmatter {
            author {
              name
            }
            title
            tags
            format
            date(formatString: "MMM Do, YYYY")
            category
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 500, height: 300)
              }
            }
          }
        }
      }
    }
  }
`
export default Archive
