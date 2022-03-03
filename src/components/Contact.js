import React from "react"
import { H2, Button } from "./Global.style"
import { Section, Input, Textarea } from "./Contact.style"

const Contact = () => {
  return (
    <Section className="content-section" id="contact">
      <div className="small-container">
        <H2>Contact me</H2>
        <form action="https://submit-form.com/U5lpInL6" className="margin-top">
          <Input
            aria-label="name"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <Input
            aria-label="email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <Textarea
            aria-label="message"
            id="message"
            name="message"
            placeholder="Message"
            required
            className="margin-bottom"
          ></Textarea>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Section>
  )
}

export default Contact
