import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby"
import PageData from "../content/pages.yaml"
import Styles from '../styles/layout.module.css'
import FlexLayout from '../components/flexlayout'
import Logo from '../images/logo.png'
import RotateImg from '../images/rotate.svg'
import ContactLinks from '../components/contactLinks'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const [width, setWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    function handleResize() {
      if (Math.abs(window.innerWidth - width) > 300) {
        setWidth(window.innerWidth);
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]);

  if (width >= 1024)
    return (
      <div className={Styles.layout}>
        <header className={Styles.header}>
          <FlexLayout justify='space-between' align='center'>
            <FlexLayout align='center'>
              <Link to="/">
                <img src={Logo} alt='LPG Logo' />
              </Link>
              <Link to="/">
                <h1>Liquid Propulsion Group</h1>
              </Link>
            </FlexLayout>
            <ul>
              {PageData.map((data, idx) => (
                <ListLink to={data.path} key={`list_link_${idx}`}>{data.title}</ListLink>
              ))}
            </ul>
          </FlexLayout>
        </header>
        {children}
        <footer className={Styles.footer}>
          <div className={Styles.footerContent}>
            <img src={Logo} alt='LPG Logo' />
              Liquid Propulsion Group
            </div>
          <ContactLinks />
          <div className={Styles.creator}>
            <p>Designed & Made by <a href={'https://ellieyhcheng.github.io/'}>Ellie Cheng</a></p>
          </div>
        </footer>
      </div>
    )
  else
    return (
      <DeviceOrientation lockOrientation={'portrait'}>
        <Orientation orientation='portrait' alwaysRender={false}>
          <div className={Styles.layout}>
            <header className={Styles.header}>
              <FlexLayout justify='space-between' align='center'>
                <FlexLayout align='center'>
                  <Link to="/">
                    <img src={Logo} alt='LPG Logo' />
                  </Link>
                  <Link to="/">
                    <h1>Liquid Propulsion Group</h1>
                  </Link>
                </FlexLayout>
                <ul>
                  {PageData.map((data, idx) => (
                    <ListLink to={data.path} key={`list_link_${idx}`}>{data.title}</ListLink>
                  ))}
                </ul>
              </FlexLayout>
            </header>
            {children}
            <footer className={Styles.footer}>
              <div className={Styles.footerContent}>
                <img src={Logo} alt='LPG Logo' />
              Liquid Propulsion Group
            </div>
              <ContactLinks />
              <div className={Styles.creator}>
                <p>Designed & Made by <a href={'https://ellieyhcheng.github.io/'}>Ellie Cheng</a></p>
              </div>
            </footer>
          </div>
        </Orientation>
        <Orientation orientation='landscape' alwaysRender={false}>
          <div className={Styles.layout}>
            <header className={Styles.header}>
              <FlexLayout justify='space-between' align='center'>
                <FlexLayout align='center'>
                  <Link to="/">
                    <img src={Logo} alt='LPG Logo' />
                  </Link>
                  <Link to="/">
                    <h1>Liquid Propulsion Group</h1>
                  </Link>
                </FlexLayout>
                <ul>
                  {PageData.map((data, idx) => (
                    <ListLink to={data.path} key={`list_link_${idx}`}>{data.title}</ListLink>
                  ))}
                </ul>
              </FlexLayout>
            </header>
            <div className={Styles.rotate}>
              <img src={RotateImg} alt='' />
              <p>Please rotate your device.</p>
              <p>This page is best viewed in portrait orientation.</p>
              <p>If this message doesn't disappear after you've rotated to portrait orientation, try refreshing the page.</p>
            </div>
            <footer className={Styles.footer}>
              <div className={Styles.footerContent}>
                <img src={Logo} alt='LPG Logo' />
              Liquid Propulsion Group
            </div>
              <ContactLinks />
              <div className={Styles.creator}>
                <p>Designed & Made by <a href={'https://ellieyhcheng.github.io/'}>Ellie Cheng</a></p>
              </div>
            </footer>
          </div>
        </Orientation>
      </DeviceOrientation>
    )
}