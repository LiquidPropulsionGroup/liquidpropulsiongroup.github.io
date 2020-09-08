import React from "react"
import { Link } from "gatsby"
import PageData from "../content/pages.yaml"
import Styles from '../styles/layout.module.css'
import FlexLayout from '../components/flexlayout'
import Logo from '../images/logo.png'
import { FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa'
import ContactData from "../content/contact.yaml"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const IconLink = props => (
  <li>
    <a href={props.to}>{props.children}</a>
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
        <ul>
          {ContactData.map((data, idx) => {
            // Icons need to be changed here
            var icon;
            if (data.name === 'Email') {
              icon = <FaEnvelope />;
            } else if (data.name === 'Github') {
              icon = <FaGithub />;
            } else if (data.name === 'Discord') {
              icon = <FaDiscord />
            }
            return <IconLink to={data.link} key={`icon_link_${idx}`}>{icon}</IconLink>
          })}
        </ul>
      </footer>
    </div>
  )
}