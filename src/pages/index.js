import IndexData from '../content/index.yaml'
import Layout from "../components/layout"
import React from "react"
import RocketImg from '../images/rocket.svg'
import RocketSmallImg from '../images/rocket-small.svg'
import SEO from '../components/seo'
import Styles from '../styles/index.module.css'

export default function Home() {

  return (
    <Layout>
      <SEO />
      <div className={Styles.landing}>
        {window.innerWidth < 768 ? (
          <>
            <h1>Liquid Propulsion Group</h1>
            <h2>Making Rocket Engines</h2>
          </>
        ) : (
            <h1>Making Rocket Engines</h1>
          )}
        <img src={window.innerWidth < 1024 ? RocketSmallImg : RocketImg} alt='' />
      </div>
      <div>
        {IndexData.map((data, idx) => (
          <div key={`section_${idx}`} className="section">
            {idx % 2 === 0 || window.innerWidth < 1024  ? (
              <>
                <img src={require(`../images/${data.image}`)} alt='' />
                <div className="section-content">
                  <h2>{data.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                </div>
              </>
            ) : (
                <>
                  <div className="section-content">
                    <h2>{data.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
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