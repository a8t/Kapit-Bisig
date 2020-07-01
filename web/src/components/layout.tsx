// configure fontawesome
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
config.autoAddCss = false
library.add(fab, fas)

// configure i18n
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import youthSurvey_en from "./i18n/en/youth-survey.json"
import youthSurvey_tg from "./i18n/tg/youth-survey.json"
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      youthSurvey: youthSurvey_en,
    },
    tg: {
      youthSurvey: youthSurvey_tg,
    },
  },
  // lng: "en",

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MainFooter from "./footer"
import Navbar from "./navbar"

const Layout = ({ children, className = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: sanitySiteConfig {
        title
      }
    }
  `)

  return (
    <div className={"min-h-screen flex flex-col " + className}>
      <Navbar siteTitle={data.site.title} />
      <main className="flex-grow">{children}</main>
      <MainFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
