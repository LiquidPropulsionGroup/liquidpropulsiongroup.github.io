import React, { useLayoutEffect, useState } from "react"
import AboutData from "../content/about.yaml"
import SEO from '../components/seo'
import Layout from '../components/layout'
import Styles from '../styles/about.module.css'
import OfficerData from '../content/officers.yaml'
import MemberData from '../content/members.yaml'

const About = () => {
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
      <SEO pageTitle='About' />
      <h1>About Us</h1>
      <div>
        {AboutData.map((data, idx) => (
          <div key={`section_${idx}`} className="section">
            {idx % 2 === 0 || width < 1024 ? (
              <>
                <img src={require(`../images/${data.image}`)} alt='' />
                <div className="section-content">
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              </>
            ) : (
                <>
                  <div className="section-content">
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                  </div>
                  <img src={require(`../images/${data.image}`)} alt='' />
                </>
              )}
          </div>
        ))}
        <div className={`${Styles.peopleSection} section`}>
          <h2>Officers</h2>
          <div className={Styles.peopleContainer}>
            {OfficerData.map((data, idx) => (
              <div key={`officer_${idx}`} className={Styles.people}>
                <h4>{data.name}</h4>
                <h5>{data.position}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className={`${Styles.peopleSection} section`}>
          <h2>Members</h2>
          <div className={Styles.peopleContainer}>
            {MemberData.sort((a, b) => a.team > b.team).map((data, idx) => (
              <div key={`member_${idx}`} className={Styles.people}>
                <h4>{data.name}</h4>
                <h5>{data.team}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default About