import React from "react"
import { Link } from "gatsby"
import PageData from "../content/pages.yaml"
import Styles from '../styles/layout.module.css'
import FlexLayout from '../components/flexlayout'
import Logo from '../images/logo.png'
import ContactLinks from '../components/contactLinks'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <header className={Styles.header}>
        <FlexLayout justify='space-between' align='center'>
          <FlexLayout align='center'>
            <img src={Logo} alt='LPG Logo'/>
            <Link to="/" >
              Liquid Propulsion Group
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
        <FlexLayout align='center'>
          <img src={Logo} alt='LPG Logo' />
          <Link to="/" >
            Liquid Propulsion Group
          </Link>
        </FlexLayout>
        <ContactLinks />
      </footer>
    </div>
  )
}