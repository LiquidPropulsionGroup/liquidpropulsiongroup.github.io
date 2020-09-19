import React from "react"
import { FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa'
import ContactData from "../content/contact.yaml"
import Styles from '../styles/contactLinks.module.css'
import anime from 'animejs/lib/anime.es.js';

const wiggle = (e) => {
  anime({
    targets: e.currentTarget,
    keyframes: [
      {rotate: -5},
      {rotate: 5},
      {rotate: 0},
    ],
    duration: 400,
    easing: 'easeOutElastic(2, 5)'
  });
}

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
          <li className={showNames ? Styles.contactLinkName : Styles.contactLinkNoName} key={`contact-link-${idx}`}>
            <a href={data.link}  onMouseOver={showNames ? wiggle : null} onFocus={showNames ? wiggle : null}>
              {icon} {showNames && data.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}