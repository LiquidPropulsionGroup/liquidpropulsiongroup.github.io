import React, { useLayoutEffect, useState } from "react"
import SEO from '../components/seo'
import Layout from '../components/layout'
import LiftImg from '../images/lift.svg'
import ContactLinks from '../components/contactLinks'
import Styles from '../styles/contact.module.css'

const Contact = () => {
  const [width, setWidth] = useState(2060)

  useLayoutEffect(() => (
    setWidth(window.innerWidth)
  ), [])

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
      <SEO pageTitle='Contact' />
      <h1>Contact Us</h1>
      <div className={`${Styles.contactSection} section`}>
        <img src={LiftImg} alt='Lift off' />

        <div className="section-content">
          <h3>Questions? Feel free to contact us!</h3>
          <div className={Styles.contactLinksWrapper}>
            <ContactLinks showNames={true} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Contact