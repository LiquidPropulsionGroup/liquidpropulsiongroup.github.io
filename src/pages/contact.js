import React from "react"
import SEO from '../components/seo'
import Layout from '../components/layout'
import LiftImg from '../images/lift.svg'
import ContactLinks from '../components/contactLinks'

const Contact = () => (
  <Layout>
    <SEO pageTitle='Contact' />
    <h1>Contact Us</h1>
    <div className="section">
      <div className="section-content">
        <h3>Questions? Feel free to contact us!</h3>
        <ContactLinks showNames={true}/>
      </div>
      <img src={LiftImg} alt='Lift off image' />
    </div>
  </Layout>
)
export default Contact