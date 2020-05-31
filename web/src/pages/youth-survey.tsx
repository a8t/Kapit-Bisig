import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"
import Link from "../components/Link"
import KapitBisigHero from "../components/hero"
import KBLogo from "../images/kapitbisig-logo.svg"
import g from "../images/g.png"

const KBLogoCircle = (
  <div
    className="bg-gray-100 border-white rounded-full w-16 h-16 absolute flex justify-center items-center mx-auto"
    style={{
      top: "-2rem",
      left: 0,
      right: 0,
      width: "4rem",
      height: "4rem",
    }}
  >
    <img src={KBLogo} className="w-10 mx-auto " />
  </div>
)

const SurveyHeader = () => (
  <header className="bg-gray-400">
    <section
      className="py-24 sm:max-height-60vh flex items-center text-white relative overflow-y-hidden bg-gray-800"
      style={{
        borderBottomRightRadius: "20% 50px",
      }}
    >
      <div className="container">
        <Title color="white" className="text-6xl self-start relative">
          Kapit-Bisig Youth Survey
        </Title>
        <Subtitle color="white" className="self-start max-w-2xl">
          Are you a Filipino youth in Canada?
          <br />
          Fill out the survey today to be entered into the raffle.
        </Subtitle>
      </div>
    </section>
  </header>
)

const BlockQuote = () => (
  <blockquote className="relative block self-center max-w-sm ml-auto mt-auto">
    <span
      className="text-6xl -ml-4 -mt-1 text-white mr-2 hidden sm:block absolute top-0 z-1 leading-none"
      aria-hidden="true"
    >
      &ldquo;
    </span>

    <p className="mb-4 text-3xl italic z-10 relative">
      The Filipino Canadian Students Association thinks this is a great idea!
    </p>

    <cite className="flex items-center z-10">
      <img
        alt="Avatar of nickd"
        className="w-12 h-12 mr-4 rounded-full bg-neutral-500"
        src={g}
      />
      <div className="flex flex-col">
        <span className="mb-1 text-lg font-bold">Georelle Mendoza</span>
        <span className="mb-1 text-md ">President, FILCASA</span>
      </div>
    </cite>
  </blockquote>
)

const YouthSurveyPage = () => {
  return (
    <Layout>
      <SEO title="Youth Survey | Kapit-Bisig Canada" />

      <SurveyHeader />

      <section className="bg-gray-800">
        <div
          className="bg-gray-400 py-24 relative flex flex-col "
          style={{
            borderTopLeftRadius: "20% 50px",
          }}
        >
          {KBLogoCircle}
          <div className="container grid grid-cols-2">
            <article className=" max-w-2xl ">
              <Subtitle color="dark">
                Filipino community youth and student organizations are coming
                together to ensure that we are safe and healthy.
              </Subtitle>
              <Paragraph>
                We are launching a survey for Filipino youth to:
                <ul className="ml-8 list-disc">
                  <li>
                    Study and understand the impacts of COVID-19 on Filipino
                    youth and their families in Canada
                  </li>
                  <li>
                    Identify specific concerns or needs we can respond to and
                    address
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                This network commits to serving our communities. We hope to
                gather as much information as possible to inform us on how to
                provide resources and support each other in this time of crisis.
              </Paragraph>
              <Paragraph>
                All answers to this survey will be confidential. Upon your
                consent, information will only be used to follow-up with regards
                to the survey and getting involved in community efforts
                responding to COVID-19.
              </Paragraph>
            </article>
            <BlockQuote />
          </div>
        </div>
      </section>

      {/* survey embed section */}
      <section className="container py-8 bg-white">
        <iframe
          className="airtable-embed -mt-24 z-10 relative rounded-lg"
          src="https://airtable.com/embed/shrKX3gvA4w5zWwpD?backgroundColor=purple"
          width="100%"
          height="600"
          style={{ background: "white", border: "1px solid #ccc" }}
        ></iframe>
      </section>
    </Layout>
  )
}
export default YouthSurveyPage
