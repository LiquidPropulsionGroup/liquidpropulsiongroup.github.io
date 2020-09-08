import IndexData from '../content/index.yaml'
import Layout from "../components/layout"
import React from "react"
import RocketImg from '../images/rocket.svg'
import SEO from '../components/seo'
import Styles from '../styles/index.module.css'

export default function Home() {

  return (
    <Layout>
      <SEO />
      <div className={Styles.landing}>
        <h1>Making Rocket Engines</h1>
        <img src={RocketImg} alt='' />
      </div>
      <div>
        {IndexData.map((data, idx) => (
          <div key={`section_${idx}`} className={Styles.section}>
            {idx % 2 === 0 ? (
              <>
                <img src={require(`../images/${data.image}`)} alt='' />
                <div className={Styles.sectionContent}>
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              </>
            ) : (
                <>
                  <div className={Styles.sectionContent}>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                  </div>
                  <img src={require(`../images/${data.image}`)} alt='' />
                </>
              )}
          </div>
        ))}
      </div>
    </Layout>
  )
}