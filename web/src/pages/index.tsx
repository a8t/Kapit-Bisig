import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import JoinNetworkCard from "../components/JoinNetworkCard"
import { RequestAid, Volunteer } from "../components/callToAction"
import { Card, Title, Subtitle, Paragraph } from "../components/ds"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

export const query = graphql`
  fragment SanityImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteConfig {
      title
      subtitle
      url
      frontpage {
        id
      }
    }
  }
`

const whyItems = [
  {
    title: "Lend a hand",
    text: "Help deliver urgently needed resources and services",
    icon: "hand-holding-heart",
  },
  {
    title: "Get informed",
    text: "Gather and disseminate important information",
    icon: "info-circle",
  },
  {
    title: "Engage peers",
    text: "Bring a campaign of collective care for everyone",
    icon: "user-friends",
  },
  {
    title: "Build together",
    text: "Collaborate with grassroots orgs  and service institutions",
    icon: "users",
  },
]

const IndexPage = ({ data }) => {
  const { site } = data

  return (
    <Layout>
      <SEO title="Kapit-Bisig" />
      <Hero siteTitle={site.title} subtitle={site.subtitle} />
      <section className="bg-gray-200 py-8 relative">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
          style={{ height: 80, transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            style={{ bottom: -1 }}
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container -mt-2 flex flex-col md:flex-row items-start space-y-8  sm:mb-12">
          <div className="w-full  lg:w-1/3 -mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-32 sm:mr-20">
            <JoinNetworkCard />
          </div>
          <section className="w-full sm:w-auto lg:w-1/2 flex flex-col md:ml-auto">
            <Title color="medium">Join Kapit-Bisig today.</Title>
            <ul
              className="grid md:grid-cols-2 gap-8"
              style={{ height: "min-content" }}
            >
              {whyItems.map(({ title, text, icon }) => {
                return (
                  <li className="w-full bg-white p-4 rounded-md shadow-md md:rounded-none md:p-0 md:rounded-none md:bg-transparent md:shadow-none ">
                    <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <FontAwesomeIcon
                        icon={icon as FontAwesomeIconProps["icon"]}
                        size="lg"
                        className="text-gray-700"
                      />
                    </div>
                    <Subtitle>{title}</Subtitle>
                    <Paragraph className="mb-auto" color="medium">
                      {text}
                    </Paragraph>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </section>
      {/* <section className="container py-8 md:py-20">
        <Title>How does it work?</Title>
        <p className="w-1/2">
          To sign up for the Kapit-Bisig COVID Response mutual aid network, you
          can fill out one of the two forms below.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 py-8">
          <Card title="I Need Help">
            I'm going through some hard times. I'm struggling financially,
            emotionally, or physically. I'm facing loss of work or other
            hardship.
            <div style={{ marginTop: 16 }}></div>
            <RequestAid isColor="primary" />
          </Card>
          <Card title="I Want To Help">
            I have additional means. I can offer time, resources, skills, or
            knowledge. I want to give back to my community.
            <div style={{ marginTop: 16 }}></div>
            <Volunteer isColor="outline" />
          </Card>
        </div>
      </section> */}
    </Layout>
  )
}

export default IndexPage
