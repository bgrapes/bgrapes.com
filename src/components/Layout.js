import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
