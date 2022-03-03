import styled from "styled-components"
import { IconStyles } from "./Global.style"
import LogoIconSvg from "../icons/icon_code.svg"
import MenuIconSvg from "../icons/icon_menu.svg"

export const Section = styled.header`
  background: ${({ theme }) => theme.headerBgColor};
  min-height: 42px;
  overflow: hidden;

  a:hover {
    text-decoration: none;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const LogoIcon = styled(LogoIconSvg)`
  ${IconStyles}
`

export const MenuIcon = styled(MenuIconSvg)`
  ${IconStyles}
`

export const Navigation = styled.div`
  a.nav-link {
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.bodyTextColor};
    font-size: 18px;

    &:hover,
    &:active {
      border-bottom: 1px solid ${({ theme }) => theme.bodyTextAccentColor};
      color: ${({ theme }) => theme.bodyTextAccentColor};
      text-decoration: none;
    }
  }

  label {
    display: flex;
    cursor: pointer;
    margin: 0;
  }

  nav {
    max-height: 0;
    width: 100%;
    -webkit-transition: max-height 0.3s;
    -moz-transition: max-height 0.3s;
    -o-transition: max-height 0.3s;
    transition: max-height 0.3s;
  }

  nav ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px 40px;
    list-style-type: none;
    margin: 1.5rem 0 0;
    padding: 0;

    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin: 0;
    }
  }

  nav li {
    display: block;
    text-align: center;
  }

  nav a {
    width: 100%;
  }

  #nav {
    display: none;
  }

  #nav:checked ~ nav {
    max-height: 200px; /* This can be anything bigger than your nav height. The transition duration works with this */
  }

  @media only screen and (min-width: 700px) {
    label {
      display: none;
    }

    nav {
      width: auto;
      max-height: none;
    }

    nav li {
      display: inline-block;
      text-align: left;
    }

    nav a {
      display: inline-block;
      width: auto;
    }
  }
`
