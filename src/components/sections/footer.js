import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
import { Container } from "../global";
import vikingLogo2 from '../../images/ShieldOnlyBlue.png';


const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
    <BrandContainer>
        <LogoImg src={vikingLogo2} alt="10th world shield logo mini"/>
    </BrandContainer>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Self-Hosting</li>
          <li>Community</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <Link to="/blog">Blog</Link>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>The Service</span>
        <ul>
          <Link to="/about">About Us</Link>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.black.light};
  margin: 80px 0 0;
  padding: 0 0 80px;
  position: relative;
  width: 100%;
  bottom: 0;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const LogoImg = styled.img`
  
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 32px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.white.regular};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.white.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }

  a {
    color: ${({ theme }) => theme.color.white.regular};
    text-decoration: none;
  }
`

export default Footer
