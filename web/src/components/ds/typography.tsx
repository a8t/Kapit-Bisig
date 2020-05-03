import React from "react"

const mergeClassName = (props, classNamesToAdd) => {
  return {
    ...props,
    className: `${classNamesToAdd} ${props.className}`,
  }
}

export const Title = props => (
  <h1
    {...mergeClassName(
      props,
      "font-sans font-display font-bold  text-4xl mb-5"
    )}
  />
)

export const Subtitle = props => (
  <h1
    {...mergeClassName(props, "font-sans font-display font-bold text-2xl mb-2")}
  />
)

export const Paragraph = props => <p {...mergeClassName(props, "mb-6")} />
