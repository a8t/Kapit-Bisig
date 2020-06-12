import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"
import Link from "../components/Link"
import KapitBisigHero from "../components/hero"
import KBLogo from "../images/kapitbisig-logo.svg"
import g from "../images/g.png"
import nicole from "../images/nicole.png"
import Helmet from "react-helmet"

const KBLogoCircle = (
  <div
    className="bg-gray-100 border-white rounded-full w-16 h-16 absolute flex justify-center items-center mx-auto shadow-sm"
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
  <header className="pt-32 pb-20 sm:max-height-60vh flex items-center text-white relative overflow-y-hidden bg-gray-800">
    <section className="container flex flex-col">
      <Title color="white" className="lg:text-6xl self-start relative">
        Kapit-Bisig Filipino Youth Network: COVID-19 Survey
      </Title>
      <Subtitle color="white" className="self-start max-w-2xl">
        <span className="text-xl lg:text-2xl font-normal">
          Help community organizations best serve your community,
          <br />
          enter a $50 gift card raffle.
        </span>
      </Subtitle>

      <Link
        to="#survey"
        className=" self-start text-xs sm:text-sm mt-2 bg-white p-2 px-6 shadow-xl border-2 rounded-full z-50 flex justify-center items-center"
      >
        Start Survey
      </Link>
    </section>
  </header>
)

const BlockQuote = ({
  quote,
  avatar = null,
  authorName,
  authorDescription,
}) => (
  <blockquote className="grid bg-white shadow-xl p-12 max-w-xl mx-auto relative">
    <span
      className="text-6xl -ml-5 -mt-2 text-white mr-2 hidden sm:block absolute top-0 z-1 leading-none"
      aria-hidden="true"
      style={{
        textShadow: `
          3px 3px 0 rgba(0,0,0,0.11),
          -1px -1px 0 rgba(0,0,0,0.11),  
         1px -1px 0 rgba(0,0,0,0.11),
         -1px 1px 0 rgba(0,0,0,0.11),
          1px 1px 0 rgba(0,0,0,0.11)`,
        top: 50,
        left: 50,
      }}
    >
      &ldquo;
    </span>

    <p className="mb-4 sm:text-xl lg:text-lg 2xl:text-xl italic z-10 relative self-start ">
      {quote}
    </p>

    <footer className="flex items-center z-10">
      <div className="w-12 h-12 mr-4 rounded-full shadow-md overflow-hidden bg-gray-400">
        {avatar && (
          <img
            alt={`Avatar of ${authorName}`}
            className="w-full h-full object-cover"
            src={avatar}
          />
        )}
      </div>

      <div className="flex flex-col">
        <span className="mb-1 sm:text-lg font-bold">{authorName}</span>
        <span className="text-sm sm:text-md ">{authorDescription}</span>
      </div>
    </footer>
  </blockquote>
)

const YouthSurveyPage = () => {
  const [ref, inView, entry] = useInView()
  return (
    <Layout className="bg-gray-200">
      <Helmet htmlAttributes={{ class: "smooth-scroll" }} />
      <SEO title="Youth Survey | Kapit-Bisig Canada" />

      <SurveyHeader />

      {!inView && (
        <Link
          to="#survey"
          className="text-xs sm:text-sm m-auto fixed bg-white p-3 px-6 shadow-xl border-2 rounded-full z-50 flex justify-center items-center"
          style={{ right: 16, bottom: 16 }}
        >
          Go directly to survey
          <FontAwesomeIcon icon="arrow-down" className="ml-4" />
        </Link>
      )}

      <section className="container pt-20 grid lg:grid-cols-2 gap-16">
        <article className="space-y-8 max-w-xl">
          <Subtitle color="dark">
            The situation regarding COVID-19 is worsening and it has a
            significant impact on our Filipino community.
          </Subtitle>
          <Paragraph>
            This survey helps us:
            <ol className="my-4 space-y-4 list-none flex flex-col items-start">
              {[
                "Understand the impacts of COVID-19 on Filipino youth and their families in Canada",
                "Identify specific concerns or needs we can respond to",
                "Create or revise programming to tailor to the needs of our Filipino-Canadian community",
              ].map((str, index) => (
                <li className="flex justify-center items-center">
                  <span className="mr-4 font-bold text-lg">{index + 1}</span>
                  {str}
                </li>
              ))}
            </ol>
          </Paragraph>
        </article>
        <article className="p-8 bg-white shadow-lg">
          <Subtitle>Organizers</Subtitle>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/organizations/anakbayan-canada">Anakbayan Canada</Link>
            </li>
            <li>
              <Link to="/organizations/anakbayan-canada">FILCASA</Link>
            </li>
            <li>
              <Link to="/organizations/makulay">Makulay atbp.</Link>
            </li>
            <li>
              <Link to="/organizations/ucfsa">
                University of Calgary Filipino Students Association
              </Link>
            </li>
            <li>
              <Link to="/organizations/anak-inc">ANAK, Inc</Link>
            </li>
          </ul>
        </article>
      </section>

      <section className="my-24 container">
        <div className="bg-gray-300 text-gray-900 mx-auto pt-12 pb-6 px-8 sm:px-16 md:px-24 md:rounded-lg grid lg:grid-cols-2 gap-12">
          <section>
            <Subtitle>
              <FontAwesomeIcon icon="poll" className="mr-4" />
              About
            </Subtitle>

            <Paragraph>
              After the completion of the survey, participants can opt in to
              enter a raffle to win a $50 gift card.
            </Paragraph>

            <Paragraph>
              The survey should take about 20 minutes to complete.
            </Paragraph>

            <Paragraph>
              You can leave the survey at any time. If you no longer want your
              answers included in the survey after completion, contact us.
            </Paragraph>
          </section>

          <section>
            <Subtitle>
              <FontAwesomeIcon icon="user-shield" className="mr-4" />
              Privacy and Accessibility
            </Subtitle>
            <Paragraph>
              All answers to this survey will be confidential. Personal
              information that identifies you will not be shared.
            </Paragraph>
            <Paragraph>
              If you cannot complete the survey online and would like to do it
              by phone, contact us at our hotline +1 866-275-4046.
            </Paragraph>
          </section>
        </div>
      </section>

      {/* survey embed section */}
      <section
        className="container py-8"
        id="survey"
        style={{ scrollMargin: 60 }}
        ref={ref}
      >
        <iframe
          className="airtable-embed z-10 relative rounded-lg"
          src="https://airtable.com/embed/shrKX3gvA4w5zWwpD?backgroundColor=purple"
          width="100%"
          height="600"
          style={{ background: "white", border: "1px solid #ccc" }}
        ></iframe>
      </section>

      <section className="grid lg:grid-cols-3 gap-8 container">
        <BlockQuote
          quote="We’d like thank our community partners for launching this survey, and we look forward to learning more on how we can identify and respond to the needs of our community."
          authorName="Georelle Mendoza"
          authorDescription="President, FILCASA"
          avatar={g}
        />
        <BlockQuote
          quote="We recognize the lack of visibility and spaces for queer and trans Filipino youth to be heard and made sure that the survey can be as inclusive to them."
          authorName="Members"
          authorDescription="Makulay atbp."
        />
        <BlockQuote
          quote="Ang mga hadlang sa mga mapagkukunan na kinakaharap ng mga migranteng undocumented, at mga kabataan uring manggagawa ay maaari lamang matugunan sa pamamagitan ng pag-iisa"
          authorName="Nicole Araneta"
          authorDescription="Chairperson, Anakbayan-Canada"
          avatar={nicole}
        />
      </section>
      <section className="bg-gray-800 py-12 mt-8">
        <div className=" container justify-start align-start flex flex-col md:flex-row ">
          <img
            src={KBLogo}
            className="h-24 md:h-48 mr-auto md:mr-8  md:ml-auto"
          />
          <div className="max-w-xl  mt-8 md:mt-0 mr-auto">
            <Subtitle color="white">Join us</Subtitle>

            <Paragraph color="white">
              Other organizations and groups are invited to share the survey
              amongst their networks of Filipino youth, and join the network to
              support youth during this time.
            </Paragraph>
            <Paragraph color="white">
              If you would like to get in touch with us, please send an email to{" "}
              <a
                href="mailto:youthsurvey@kapitbisig.ca"
                className=" text-teal-300 font-bold"
              >
                youthsurvey@kapitbisig.ca
              </a>
              .
            </Paragraph>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default YouthSurveyPage
