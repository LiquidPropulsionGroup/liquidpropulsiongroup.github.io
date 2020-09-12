import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlutoImg from '../images/pluto.svg'

// The span is sort of hacky but it's not webdev with some bs-ing ¯\_(ツ)_/¯
// It makes the content section div an even child of Layout so it'd 
// have the blue background. 
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <span /> 
    <div className="section">
      <img src={PlutoImg} alt='pluto' />
      <div className="section-content">
        <h2>404</h2>
        <p>This page is no longer considered a page by the 2009 IAC... Sorry</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
