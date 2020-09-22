import React, { useLayoutEffect, useState } from "react"
import JoinData from "../content/join.yaml"
import SEO from '../components/seo'
import Layout from '../components/layout'
// import RoadmapImg from '../images/roadmap.svg';
import ReactMarkdown from "react-markdown"
// import Styles from '../styles/join.module.css'

const Join = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    function handleResize() {
      const DIMENSIONS = [768, 1024, 1280];

      if (DIMENSIONS.some(
        (minWidth) =>
          (width >= minWidth && window.innerWidth < minWidth) ||
          (width < minWidth && window.innerWidth >= minWidth))
      ) {
        setWidth(window.innerWidth)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]);

  return (
    <Layout>
      <SEO pageTitle='Join' />
      <h1>Join Us</h1>
      <div>
        {JoinData.map((data, idx) => (
          <div key={`section_${idx}`} className="section">
            {idx % 2 === 0 || width < 1024 ? (
              <>
                {data.image &&
                  <img src={require(`../images/${data.image}`)} alt='' />
                }
                <div className="section-content">
                  <h2>{data.title}</h2>
                  <ReactMarkdown source={data.content} />
                </div>
              </>
            ) : (
                <>
                  <div className="section-content">
                    <h2>{data.title}</h2>
                    <ReactMarkdown source={data.content} />
                  </div>
                  {data.image &&
                    <img src={require(`../images/${data.image}`)} alt='' />
                  }
                </>
              )}
          </div>
        ))}
        {/* <div className={`${Styles.roadmapSection} section`}>
          <h2>Roadmap</h2>
          <div className={Styles.roadmapContainer}>
            <img src={RoadmapImg} alt='roadmap' />
          </div>
        </div> */}
      </div>
    </Layout>
  )
}
export default Join