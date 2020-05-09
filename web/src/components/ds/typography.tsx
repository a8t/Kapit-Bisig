import React from "react"

const colors = {
  white: "text-white",
  medium: "text-gray-600",
  dark: "text-gray-800",
}

const mergeClassName = (props, classNamesToAdd) => {
  return {
    ...props,
    className: `${classNamesToAdd} ${props.className}`,
  }
}

export const Title = ({ color = "dark", ...props }) => (
  <h1
    {...mergeClassName(
      props,
      `font-sans font-display font-bold text-4xl mb-5 ${colors[color]}`
    )}
  />
)

export const Subtitle = ({ color = "dark", ...props }) => (
  <h2
    {...mergeClassName(
      props,
      `font-sans font-display font-bold text-2xl mb-2 ${colors[color]}`
    )}
  />
)

export const Paragraph = ({ color = "dark", ...props }) => (
  <p {...mergeClassName(props, `mb-6 ${colors[color]}`)} />
)
