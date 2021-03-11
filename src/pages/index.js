import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import AzureAuthenticationContext from '../azure/azure-authentication-context';
import Welcome from "../components/sections/welcome"

const auth = new AzureAuthenticationContext;
const { account } = auth;

const IndexPage = () => { 
  return (
    <Layout>
    <SEO title="Home" />
    <Navigation />
      <Header />
      { account !== null ?  <Welcome /> : <Features />}
    <GetStarted />
    <Footer />
   </Layout>
  
  )
}


export default IndexPage
