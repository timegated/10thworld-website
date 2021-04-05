import React, { useState, useContext, useEffect } from "react"
import { Link } from 'gatsby';
import { useHeaderContext } from '../../../context/HeaderProvider';
import Checkout from '../../sections/checkout';
import { AuthContext } from '../../../context/AuthProvider';
import AzureAuthButton from '../../../azure/azure-auth-button';
import NavLinks from './navlinks';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Nav,
  NavListWrapper,
  LogoutBtnContainer,
  BtnContainer,
  StyledContainer,
  Hamburger,
  Cancel,
  ImgContainer,
  Toggle
} from "./style"


export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVisible } = useHeaderContext();
  const { context } = useContext(AuthContext);

  const userAccount = context.getAccount();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // useEffect(() => {
  //   context.getAccount();
  // }, []);
  console.log('%c The Context from Navigation', 'font-size: 18px; color: green', context.account);
  console.log('%c the user Account', 'color: yellow; font-size: 18px;', context.getAccount());
  return (
    <Nav isVisible={isVisible}>
      <ImgContainer>
        <Link to="/">
          <StaticImage src="../../../images/ShieldNameBlue.png" alt="10th World Logo" />
        </Link>
      </ImgContainer>
      <Toggle
        mobileMenuOpen={mobileMenuOpen}
        onClick={() => toggleMobileMenu()}
      >
        {mobileMenuOpen ? <Cancel /> : <Hamburger />}
      </Toggle>
      {mobileMenuOpen ? (
        <NavListWrapper>
          <StyledContainer>
            <NavLinks />
          </StyledContainer>
          {userAccount !== undefined ? <Checkout /> : null}
          {userAccount !== undefined ? (
            <LogoutBtnContainer>
              <AzureAuthButton text="logout" userAction={undefined} />
            </LogoutBtnContainer>) : null}
        </NavListWrapper>
      ) : (
        <NavListWrapper open>
          <StyledContainer>
            <NavLinks />
          </StyledContainer>
          <BtnContainer>
            {userAccount !== undefined ? <Checkout /> : null}
            {userAccount !== undefined ? (
              <LogoutBtnContainer>
                <AzureAuthButton text="logout" userAction={undefined} />
              </LogoutBtnContainer>) : null}
          </BtnContainer>
        </NavListWrapper>
      )}

    </Nav>
  )
}