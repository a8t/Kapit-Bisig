import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { RequestAid } from "./callToAction"

import { Subtitle } from "./ds"

const JoinNetworkCard = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "kb-volunteers.png" }) {
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
  `)

  const color = "purple-800"
  return (
    <blockquote
      className={`w-full shadow-xl rounded-lg overflow-hidden bg-${color} flex flex-col sm:flex-row md:flex-col z-10 relative`}
    >
      <Img
        fluid={cardImage.childImageSharp.fluid}
        className="bg-white w-full md:w-full"
        style={{ maxHeight: 400 }}
        alt="Kapit-Bisig Logo"
        objectFit="cover"
        objectPosition="27% 40%"
      />
      <div className="relative p-8 w-full max-w-md sm:w-2/3 md:w-full">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block hidden sm:visible"
          style={{ height: 95, top: -94 }}
        >
          <polygon
            points="-30,95 583,95 583,65"
            className={`text-${color} fill-current`}
          ></polygon>
        </svg>
        <Subtitle color="white">Why join our network?</Subtitle>
        <p className="text-md font-light mt-2 text-gray-100 mb-6">
          When communities come together, we can support those most in need.
          Whether you can offer a little or a lot, joining means being connected
          and aware.
        </p>
        <RequestAid isColor="outline" />
      </div>
    </blockquote>
  )
}

export default JoinNetworkCard
