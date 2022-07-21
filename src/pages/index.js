import React from "react"
// import BlogPost from "../components/blogPost"
import About from "../components/homedefault/about"
import Banner from "../components/homedefault/banner"
import Project from "../components/homedefault/project"
import Service from "../components/homedefault/service"
// import Testimonial from "../components/homedefault/testimonial"
// import Timeline from "../components/homedefault/timeline"
import Layout from "../components/layout"
import SeoComponent from "../components/seo"
import Contact from "../elements/contact/contact"

const IndexPage = () => (
  <Layout>
    <SeoComponent title="Guy Lillico" />
    <Banner />
    <About />
    <Service />
    <div id="portfolio">
      <Project />
      {/* <Testimonial /> */}
    </div>
    {/* <Timeline /> */}
    {/* <BlogPost /> */}
    <Contact />
  </Layout>
)
export default IndexPage
