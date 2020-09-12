import React from "react"
import { FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa'
import ContactData from "../content/contact.yaml"
import Styles from '../styles/contactLinks.module.css'

const IconLink = props => (
  <li>
    <a href={props.to}>{props.children}</a>
  </li>
)

export default function Layout({ showNames }) {
  return (
    <ul className={Styles.contactLinks}>
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
        return (
          <li className={showNames ? Styles.contactLinkName : Styles.contactLinkNoName}>
            <a href={data.link}>
              {icon} {showNames && data.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}