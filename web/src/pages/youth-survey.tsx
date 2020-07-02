import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Helmet from "react-helmet"
import { useTranslation } from "react-i18next"
import Img from "gatsby-image/withIEPolyfill"
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"
import Link from "../components/Link"
import KBLogo from "../images/kapitbisig-logo.svg"
import Transition from "../components/Transition"

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

const SurveyHeader = () => {
  const { t, i18n } = useTranslation("youthSurvey")
  return (
    <header className="pt-32 pb-20 sm:max-height-60vh flex items-center text-white relative overflow-y-hidden bg-gray-800">
      <section className="container flex flex-col">
        <Title color="white" className="lg:text-6xl self-start relative">
          {t("title")}
        </Title>
        <Subtitle color="white" className="self-start max-w-2xl">
          <span className="text-xl lg:text-2xl font-normal">
            {t("subtitle")}
          </span>
        </Subtitle>

        <Link
          to="#survey"
          className=" self-start text-xs sm:text-sm mt-2 bg-white p-2 px-6 shadow-xl border-2 rounded-full z-50 flex justify-center items-center"
        >
          {t("startButton")}
        </Link>
      </section>
    </header>
  )
}
const BlockQuote = ({
  quote,
  avatar = null,
  authorName,
  authorDescription,
}) => {
  const images = useStaticQuery(
    graphql`
      query {
        pride: file(relativePath: { eq: "pride.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 300
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
        cufsa: file(relativePath: { eq: "cufsa.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 300
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
        g: file(relativePath: { eq: "g.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 300
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
        nicole: file(relativePath: { eq: "nicole.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 300
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
    <blockquote className="grid bg-white shadow-xl p-12 max-w-xl mx-auto relative rounded-lg">
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
        <div className="w-12 h-12 mr-4 ">
          {avatar && (
            <Img
              fluid={images[avatar].childImageSharp.fluid}
              className="rounded-full w-12 h-12 object-cover  shadow-md "
              alt={authorName}
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
}

const YouthSurveyPage = () => {
  const [ref, inView, entry] = useInView()
  const { t, i18n } = useTranslation("youthSurvey")
  return (
    <Layout className="bg-gray-200">
      <Helmet htmlAttributes={{ class: "smooth-scroll" }} />
      <SEO title="Youth Survey | Kapit-Bisig Canada" />

      <SurveyHeader />

      <LanguageSwitcher />

      <section className="container pt-20 grid lg:grid-cols-2 gap-16">
        <article className="space-y-8 max-w-xl">
          <Subtitle color="dark">{t("intro.body")}</Subtitle>
          <Paragraph>
            {t("intro.listHeader")}
            <ol className="my-4 space-y-4 list-none flex flex-col items-start">
              {[
                t("intro.listItemUnderstand"),
                t("intro.listItemIdentify"),
                t("intro.listItemCreate"),
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
          <Subtitle>{t("organizers")}</Subtitle>
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
              {t("about.title")}
            </Subtitle>

            <Paragraph>{t("about.raffle")}</Paragraph>

            <Paragraph>{t("about.surveyTime")}</Paragraph>

            <Paragraph>{t("about.leaveSurvey")}</Paragraph>
          </section>

          <section>
            <Subtitle>
              <FontAwesomeIcon icon="user-shield" className="mr-4" />
              {t("privacyAndAccessibility.title")}
            </Subtitle>
            <Paragraph> {t("privacyAndAccessibility.confidential")}</Paragraph>
            <Paragraph>{t("privacyAndAccessibility.accessibliity")}</Paragraph>
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
          src={t("embedLink")}
          width="100%"
          height="600"
          style={{ background: "white", border: "1px solid #ccc" }}
        ></iframe>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 container">
        <BlockQuote
          quote="We’d like thank our community partners for launching this survey, and we look forward to learning more on how we can identify and respond to the needs of our community."
          authorName="Georelle Mendoza"
          authorDescription="President, FILCASA"
          avatar="g"
        />
        <BlockQuote
          quote="We recognize the lack of visibility and spaces for queer and trans Filipino youth to be heard and made sure that the survey can be as inclusive to them."
          authorName="Members"
          authorDescription="Makulay atbp."
          avatar="pride"
        />
        <BlockQuote
          quote="Ang mga hadlang sa mga mapagkukunan na kinakaharap ng mga migranteng undocumented, at mga kabataan uring manggagawa ay maaari lamang matugunan sa pamamagitan ng pag-iisa"
          authorName="Nicole Araneta"
          authorDescription="Chairperson, Anakbayan-Canada"
          avatar="nicole"
        />
        <BlockQuote
          quote="With our kababayans, we want to help extend our reach to Filipino youth and their families to better understand their needs while providing them with services, resources, and support during these difficult times."
          authorName="Kristal Mae Puguan"
          authorDescription="President, Carleton University Filipino Students’ Association"
          avatar="cufsa"
        />
      </section>
      <section className="bg-gray-800 py-12 mt-8">
        <div className=" container justify-start align-start flex flex-col md:flex-row ">
          <img
            src={KBLogo}
            className="h-24 md:h-48 mr-auto md:mr-8  md:ml-auto"
          />
          <div className="max-w-xl  mt-8 md:mt-0 mr-auto">
            <Subtitle color="white">{t("joinUs.title")}</Subtitle>

            <Paragraph color="white">{t("joinUs.invitation")}</Paragraph>
            <Paragraph color="white">
              {t("joinUs.contact")}
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

const LanguageSwitcherOption = ({ onSelect, children }) => {
  return (
    <MenuItem
      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
      role="menuitem"
      onSelect={onSelect}
    >
      {children}
    </MenuItem>
  )
}

function LanguageSwitcher() {
  const { t, i18n } = useTranslation("youthSurvey")

  const createLanguageSwitch = lang => e => {
    i18n.changeLanguage(lang)
    return false
  }

  return (
    <div className="fixed z-50" style={{ right: 16, top: 72 }}>
      <Menu>
        {({ isExpanded }) => (
          <>
            <MenuButton className="pointer text-xs sm:text-sm m-auto bg-white p-3 px-6 shadow-xl border-2 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon="language" className="mr-2" />
              {t("language")}
              <FontAwesomeIcon icon="angle-down" className="ml-2" />
            </MenuButton>
            <Transition
              show={isExpanded}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuList
                portal={false}
                className="absolute right-0 mt-2 w-56 rounded-md shadow-lgrounded-md bg-white shadow-xs py-1"
                // style={{ top: 42 }}
              >
                <LanguageSwitcherOption onSelect={createLanguageSwitch("en")}>
                  English
                </LanguageSwitcherOption>
                <LanguageSwitcherOption onSelect={createLanguageSwitch("tg")}>
                  Tagalog
                </LanguageSwitcherOption>
                {/* <LanguageSwitcherOption onClick={createLanguageSwitch('fr')}>French</LanguageSwitcherOption> */}
              </MenuList>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}
