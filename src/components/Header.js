import React from "react"
import { H1, Button } from "./Global.style"
import { Section, Logo, LogoIcon, MenuIcon, Navigation } from "./Header.style"

const Header = () => {
  return (
    <Section className="padding-top" id="about">
      <div className="container">
        <Navigation className="flex-row align-center space-between container">
          <a href="/">
            <Logo>
              <LogoIcon />
              <H1>Brian Grapes</H1>
            </Logo>
          </a>
          <input id="nav" type="checkbox" />
          <label htmlFor="nav">
            <span className="screen-reader-text">Menu</span>
            <MenuIcon />
          </label>
          <nav>
            <ul>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="Resume_BrianGrapes.pdf" className="nav-link">
                  Resume
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
      </div>
    </Section>
  )
}

export default Header
