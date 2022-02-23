import React from "react"
import { H1, Button } from "./Global.style"
import { Section, Logo, Navigation } from "./Header.style"
import LogoIcon from "../images/icon_code.svg"
import MenuIcon from "../images/icon_menu.svg"

const Header = () => {
  return (
    <Section className="container padding-top" id="about">
      <Navigation className="flex-row align-center space-between container">
        <a href="/">
          <Logo>
            <img src={LogoIcon} alt="" />
            <H1>Brian Grapes</H1>
          </Logo>
        </a>
        <input id="nav" type="checkbox" />
        <label htmlFor="nav">
          <img src={MenuIcon} alt="Toggle menu" />
        </label>
        <nav>
          <ul>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#projects">
                <Button className="no-margin-bottom">View Work</Button>
              </a>
            </li>
          </ul>
        </nav>
      </Navigation>
    </Section>
  )
}

export default Header
