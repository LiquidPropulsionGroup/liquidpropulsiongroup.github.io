import React from "react"
import AboutData from "../content/about.yaml"
import SEO from '../components/seo'
import Layout from '../components/layout'

const About = () => (
  <Layout>
    <SEO pageTitle='About' />
    {AboutData.map((data, index) => (
      <div key={`section_${index}`}>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    ))}
  </Layout>
)
export default About