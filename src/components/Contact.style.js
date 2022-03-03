import styled from "styled-components"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.bodyBgColor};
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.inputBgColor};
`

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.inputBgColor};
`
