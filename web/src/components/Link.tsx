import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default function Link({ to, ...props }) {
  if (!to) {
    return props.children
  }

  if (to.startsWith("/")) {
    return <GatsbyLink to={to} {...props} />
  }

  return (
    <OutboundLink {...props} href={to}>
      {props.children}
    </OutboundLink>
  )
}
