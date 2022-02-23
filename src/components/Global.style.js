import styled, { css, createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${({ theme }) => theme.lightGray} !important;
    margin: 0;
    font-family: "Poppins", Arial, Helvetica, sans-serif;

    -webkit-animation: bugfix infinite 1s;

    @-webkit-keyframes bugfix { 
      from { padding: 0; } 
      to { padding: 0; } 
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`

export const HeaderStyles = css`
  color: ${({ theme }) => theme.primary};
  font-family: inherit;
  font-weight: 600;
  margin: 0 !important;
`

export const H1 = styled.h1`
  ${HeaderStyles}
  display: inline-block;
  font-size: 30px;
`

export const H2 = styled.h2`
  ${HeaderStyles}
  font-size: 28px;
`

export const H3 = styled.h2`
  ${HeaderStyles}
  font-size: 22px;
`

export const P = styled.p`
  color: ${({ theme }) => theme.charcoal};
  font-size: 18px;
  font-weight: 300;
  line-height: 2;

  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`

export const Button = styled.button`
  font-family: "Poppins", Arial, Helvetica, sans-serif;

  &.margin-right {
    margin-right: 1rem;
  }
`
