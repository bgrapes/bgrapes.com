import styled from "styled-components"
import { P } from "./Global.style"

export const Section = styled.section`
  background: ${({ theme }) => theme.heroBgColor};
`

export const Intro = styled(P)`
  font-size: 18px;
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
  }

  @media (min-width: 800px) {
    font-size: 22px;
  }
`

export const Cta = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`

export const Photo = styled.img`
  aspect-ratio: attr(width) / attr(height);
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: auto;
  width: 100%;
`
