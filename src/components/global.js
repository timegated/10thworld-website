import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`
export const FlexContainer = styled.section`
  display: flex;
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: column;
  }
`;