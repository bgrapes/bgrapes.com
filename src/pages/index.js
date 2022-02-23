import React from "react"
import { Helmet } from "react-helmet"
import "../primitive.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/600.css"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import { GlobalStyle } from "../components/Global.style"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Hello! I'm Brian Grapes. I'm a creative frontend engineer using JavaScript with React to solve problems independently and collaboratively."
        />
        <meta name="author" content="Brian Grapes" />
        <title>Brian Grapes - Frontend Engineer</title>
      </Helmet>
      <Layout />
    </ThemeProvider>
  )
}

export default Home
