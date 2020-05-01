import React from "react"
import { Link as GatsbyLink } from "gatsby"

export default function Link({ to, ...props }) {
  if (!to) {
    return props.children
  }

  if (to.startsWith("/")) {
    return <GatsbyLink to={to} {...props} />
  }

  return (
    <a {...props} href={to}>
      {props.children}
    </a>
  )
}
