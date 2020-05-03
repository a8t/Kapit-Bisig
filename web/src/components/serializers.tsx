import React from "react"
import Figure from "./Figure"

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    link: ({ node }) => {
      console.warn("hi")
      return <a>{node}</a>
    },
  },
}

export default serializers
