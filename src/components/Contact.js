import React from "react"
import { H2, Button } from "./Global.style"
import { Section } from "./Contact.style"

const Contact = () => {
  return (
    <Section className="content-section" id="contact">
      <div className="small-container">
        <H2>Contact me</H2>
        <form action="https://submit-form.com/U5lpInL6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Section>
  )
}

export default Contact
