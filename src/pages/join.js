import React from "react"
import JoinData from "../content/join.yaml"
import SEO from '../components/seo'
import Layout from '../components/layout'
import RoadmapImg from '../images/roadmap.svg';
import Styles from '../styles/join.module.css'

const Join = () => (
  <Layout>
    <SEO pageTitle='Join' />
    <h1>Join Us</h1>
    <div>
      {JoinData.map((data, idx) => (
        <div key={`section_${idx}`} className="section">
          {idx % 2 === 0 ? (
            <>
              {data.image &&
                <img src={require(`../images/${data.image}`)} alt='' />
              }
              <div className="section-content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                {data.bullets &&
                  <ul className={Styles.joinBullets}>
                    {data.bullets.map((data, idx) => (
                      <li key={`section-content-list-${idx}`}>{data}</li>
                    ))}
                  </ul>
                }
              </div>
            </>
          ) : (
              <>
                <div className="section-content">
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  {data.bullets &&
                    <ul className={Styles.joinBullets}>
                      {data.bullets.map((data, idx) => (
                        <li key={`section-content-list-${idx}`}>{data}</li>
                      ))}
                    </ul>
                  }
                </div>
                {data.image &&
                  <img src={require(`../images/${data.image}`)} alt='' />
                }
              </>
            )}
        </div>
      ))}
      <div className={`${Styles.roadmapSection} section`}>
        <h2>Roadmap</h2>
        <div className={Styles.roadmapContainer}>
          <img src={RoadmapImg} alt='roadmap' />
        </div>
      </div>
    </div>
  </Layout>
)
export default Join