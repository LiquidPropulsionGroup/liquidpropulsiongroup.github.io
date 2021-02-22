import IndexData from '../content/index.yaml'
import SlideshowData from '../content/slideshow.yaml'
import Layout from "../components/layout"
import React, { useLayoutEffect, useState } from "react"
import SEO from '../components/seo'
import Styles from '../styles/index.module.css'
import ReactMarkdown from "react-markdown"
import RightArrow from '../images/right-arrow.svg'
import LeftArrow from '../images/left-arrow.svg'

export default function Home() {
  const [width, setWidth] = useState(2060)
  const [slideIdx, setSlideIdx] = useState(0)

  const [numSlides, setNumSlides] = useState(100);

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
    setNumSlides(SlideshowData.length)
  }, [])

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
      <SEO />
      <div className={Styles.landing}>
        <div className={Styles.slideshow}>
          <div className={Styles.arrowWrapper}>
            <div className={Styles.arrow} onClick={() => setSlideIdx((slideIdx) => slideIdx - 1 < 0 ? slideIdx - 1 + numSlides : slideIdx - 1 )}>
              <img src={LeftArrow} alt='' />
            </div>
            <div className={Styles.arrow}>
              <img src={RightArrow} alt='' onClick={() => setSlideIdx((slideIdx) => (slideIdx + 1) % numSlides)}/>
            </div>
          </div>
          {SlideshowData.map((data, idx) => ( 
            <div key={`slide_${idx}`} className={Styles.slide} style={
              { 
                opacity: idx === slideIdx ? 1 : 0, 
                transform: (idx === (slideIdx - 1 < 0 ? slideIdx - 1 + numSlides : slideIdx - 1)) ? `translate(-100%, 0)` : (idx === (slideIdx + 1) % numSlides ? `translate(100%, 0)` : `translate(${100 * (idx - slideIdx)}%, 0px)`)}
              }>
              <img src={require(`../images/${data.image}`)} alt={`${data.caption}`} />
              <p>{data.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {IndexData.map((data, idx) => (
          <div key={`section_${idx}`} className="section">
            {idx % 2 === 0 || width < 1024  ? (
              <>
                <img src={require(`../images/${data.image}`)} alt='' />
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
                  <img src={require(`../images/${data.image}`)} alt='' />
                </>
              )}
          </div>
        ))}
      </div>
    </Layout>
  )
}