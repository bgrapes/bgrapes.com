import styled from "styled-components"
import { H2 } from "./Global.style"

export const Section = styled.section`
  background: ${({ theme }) => theme.blueGradient};
`

export const StyledH2 = styled(H2)`
  color: ${({ theme }) => theme.lightGray};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
`

export const CardContent = styled.div`
  padding: 2rem;
`

export const Img = styled.img`
  aspect-ratio: attr(width) / attr(height);
  border-radius: 4px 4px 0px 0px;
  height: auto;
  width: 100%;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Tag = styled.div`
  cursor: default;
  display: inline-block;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  font-size: 14px;
  padding: 0.2rem 0.7rem;
  text-transform: uppercase;
  white-space: nowrap;
`
