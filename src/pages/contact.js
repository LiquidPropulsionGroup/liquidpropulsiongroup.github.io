import React from "react"
import ContactData from "../content/contact.yaml"
import SEO from '../components/seo'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <SEO pageTitle='Contact' />
    <hi>Contact Us</hi>
    <ul>
      {ContactData.map((data, index) => (
        <li key={`contact_${index}`}>
          <a href={data.link}>{data.name}</a>
        </li>
      ))}
    </ul>
  </Layout>
)
export default Contact