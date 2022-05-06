import React from "react"
import { Button } from "./Global.style"
import { Section, Intro, Cta, Photo } from "./Hero.style"
import ProfilePhoto from "../images/profile_photo_square.jpg"

const Hero = () => {
  return (
    <Section className="content-section">
      <div className="container">
        <div className="flex-row align-center">
          <div className="flex-small two-thirds">
            <Intro>
              <strong>Hello!</strong> I'm Brian Grapes. I'm a creative frontend
              engineer using JavaScript with React to solve problems
              independently and collaboratively. I make accessible websites
              using front end technologies with marketing experience to maximize
              conversions. I love CSS and bringing beautiful designs to life.
            </Intro>
            <Cta>
              <a href="#projects">
                <Button className="no-margin-bottom">View Work</Button>
              </a>
            </Cta>
          </div>
          <div className="flex-small one-third">
            <Photo
              src={ProfilePhoto}
              alt="Brian Grapes in Balboa Park, San Diego"
              width="367"
              height="367"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
