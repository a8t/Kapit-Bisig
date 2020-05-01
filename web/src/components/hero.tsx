import React, { Component } from "react"
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Button,
  Columns,
  Column,
  Icon,
  Content,
} from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CallToAction from "./callToAction"

const KapitBisigHero = ({ siteTitle, subtitle }) => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 900
              traceSVG: {
                color: "rgba(0,0,0,0)"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Hero isColor="primary" isSize="medium">
      <HeroBody>
        <Container>
          <Columns>
            <Column isSize="1/2">
              <Img
                fluid={logo.childImageSharp.fluid}
                style={{ width: 400, maxWidth: "100%" }}
                alt="Kapit-Bisig Logo"
              />
            </Column>
            <Column
              isSize="1/2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 32,
              }}
            >
              {/* Headline */}
              <Title style={{ marginTop: "auto" }}>{subtitle}</Title>

              <Content>Kapit-Bisig means "linking arms" in Tagalog.</Content>
              <Content>
                Community care and mutual aid are the best way for us to
                overcome the hardship caused by COVID-19.{" "}
                <b>
                  That is why we've organized Kapit-Bisig Laban COVID, a mutual
                  aid network.
                </b>
              </Content>

              {/* Call to action button */}
              <CallToAction size="medium" />
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  )
}

export default KapitBisigHero
