import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CallToAction, { RequestAid } from "./callToAction"
import { Title, Paragraph } from "./ds/typography"

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
    <section className="py-20 text-white bg-blue hero">
      <div className="container m-auto flex flex-col md:flex-row md:items-end">
        <div className="flex-0 w-full md:w-1/2">
          <Img
            fluid={logo.childImageSharp.fluid}
            style={{
              width: 400,
              maxWidth: "100%",
              // objectFit: "contain",
              // objectPosition: "bottom center",
            }}
            alt="Kapit-Bisig Logo"
          />
        </div>
        <div className="w-full max-w-md md:w-1/2 md:max-w-full text-white mt-6 flex flex-col justify-start">
          {/* Headline */}
          <Title color="white">{subtitle}</Title>

          <Paragraph color="white">
            Kapit-Bisig means "linking arms" in Tagalog.
          </Paragraph>
          <Paragraph color="white">
            Community care and mutual aid are the best way for us to overcome
            the hardship caused by COVID-19.{" "}
            <b>
              That is why we've organized Kapit-Bisig Laban COVID, a mutual aid
              network.
            </b>
          </Paragraph>

          {/* Call to action button */}
          <RequestAid isColor="outline" />
        </div>
      </div>
    </section>
  )
}

export default KapitBisigHero
