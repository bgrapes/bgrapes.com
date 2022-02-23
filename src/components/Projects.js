import React from "react"
import { Button, H3 } from "./Global.style"
import {
  Section,
  StyledH2,
  Grid,
  Card,
  CardContent,
  Img,
  Tags,
  Tag,
} from "./Projects.style"
import TipCalculatorImg from "../images/project-tip-calculator.jpg"
import AdviceGeneratorImg from "../images/project-advice-generator.jpg"
import SocialProofSectionImg from "../images/project-social-proof-section.jpg"
import TestimonialsGridSectionImg from "../images/project-testimonials-grid-section.jpg"
import OrderSummaryComponentImg from "../images/project-order-summary-component.jpg"

const Project = ({ children, codeLink, demoLink, image, title, tags }) => {
  return (
    <Card>
      <a href={demoLink} target="_blank" rel="noreferrer noopener">
        <Img src={image} alt={title} width="552" height="301" />
      </a>
      <CardContent>
        <H3>{title}</H3>
        <p className="margin-top">{children}</p>
        <Tags className="margin-bottom">
          {tags &&
            tags.map(tag => {
              return <Tag key={tag}>{tag}</Tag>
            })}
        </Tags>
        <a href={demoLink} target="_blank" rel="noreferrer noopener">
          <Button className="margin-right">Live Demo</Button>
        </a>
        <a href={codeLink} target="_blank" rel="noreferrer noopener">
          <Button className="muted-button">View Code</Button>
        </a>
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  return (
    <Section className="content-section" id="projects">
      <div className="container">
        <StyledH2>Selected Projects</StyledH2>
        <Grid className="padding-top">
          <Project
            codeLink="https://github.com/bgrapes/frontendmentor-projects/tree/master/tip-calculator"
            demoLink="https://bgrapes-tip-calculator.surge.sh/"
            image={TipCalculatorImg}
            tags={["JavaScript", "HTML/CSS"]}
            title="Tip Calculator"
          >
            A JavaScript app that calculates the tip on a bill and then splits
            the total among the number of people.
          </Project>
          <Project
            codeLink="https://github.com/bgrapes/frontendmentor-projects/tree/master/advice-generator-app"
            demoLink="https://bgrapes-advice-generator-app.surge.sh/"
            image={AdviceGeneratorImg}
            tags={["JavaScript", "REST APIs", "HTML/CSS"]}
            title="Advice Generator"
          >
            Get a quick snippet of advice from this advice generator. The advice
            comes from the{" "}
            <a
              href="https://api.adviceslip.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Advice Slip JSON API
            </a>
            .
          </Project>
          <Project
            codeLink="https://github.com/bgrapes/frontendmentor-projects/tree/master/social-proof-section"
            demoLink="https://bgrapes-social-proof-section.surge.sh/"
            image={SocialProofSectionImg}
            tags={["HTML/CSS"]}
            title="Social Proof Section"
          >
            An example reviews section for a marketing site using CSS flexbox.
          </Project>
          <Project
            codeLink="https://github.com/bgrapes/frontendmentor-projects/tree/master/testimonials-grid-section"
            demoLink="https://bgrapes-testimonials-grid.surge.sh/"
            image={TestimonialsGridSectionImg}
            tags={["HTML/CSS", "CSS Grid"]}
            title="Testimonials Grid Section"
          >
            An example testimonials section to demonstrate CSS grid.
          </Project>
          <Project
            codeLink="https://github.com/bgrapes/frontendmentor-projects/tree/master/order-summary-component"
            demoLink="https://bgrapes-order-summary.surge.sh/"
            image={OrderSummaryComponentImg}
            tags={["HTML/CSS"]}
            title="Order Summary Component"
          >
            A simple order summary component.
          </Project>
          {/* <Project
            codeLink="https://github.com/bgrapes/jammming"
            demoLink="http://jammming.bg.surge.sh/"
            image={JammmingImg}
            tags={["React", "JavaScript", "HTML/CSS"]}
            title="Jammming"
          >
            Jammming
          </Project>
          <Project
            codeLink="https://github.com/bgrapes/ravenous"
            demoLink="https://ravenous-bg.surge.sh/"
            image={RavenousImg}
            tags={["React", "JavaScript", "REST APIs", "HTML/CSS"]}
            title="Ravenous"
          >
            Ravenous
          </Project> */}
        </Grid>
      </div>
    </Section>
  )
}

export default Projects
