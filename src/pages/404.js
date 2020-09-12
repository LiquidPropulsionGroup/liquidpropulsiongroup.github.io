import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from '../styles/404.module.css'
import PlutoImg from '../images/pluto.svg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <div className={Styles.nonexistent}>
      <img src={PlutoImg} alt='pluto' />
      <p>You're trying to visit a page that doesn't exist... big sad :( </p>
    </div>
  </Layout>
)

export default NotFoundPage
