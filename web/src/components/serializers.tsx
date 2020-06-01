import React from "react"
import Figure from "./Figure"

import { imageUrlFor } from "../lib/image-url"
import PortableText from "./portableText"
import Link from "./Link"

function ImageSection({ node }) {
  const { alt, caption, asset, cta } = node
  if (!asset) {
    return null
  }

  return (
    <div>
      <figure className="max-w-md m-auto flex flex-col justify-center items-centre">
        <img
          src={imageUrlFor(asset)
            .auto("format")
            .width(2000)
            .url()}
          alt={alt}
        />
        <figcaption className="self-center mt-4 text-sm px-4 text-gray-600 italic">
          {caption}
        </figcaption>
      </figure>
    </div>
  )
}

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    figure: ({ node }) => <ImageSection node={node} />,
  },
  marks: {
    internalLink: ({ mark, ...props }) => {
      console.log(props)
      return <Link to={mark.linkDestination} {...props} />
    },
  },
}

export default serializers
