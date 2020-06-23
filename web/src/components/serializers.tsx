import React from "react"
import Figure from "./Figure"

import { imageUrlFor } from "../lib/image-url"
import PortableText from "./portableText"
import Link from "./Link"

import BasePortableText from "@sanity/block-content-to-react"

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

const BlockRenderer = props => {
  const { style = "normal" } = props.node

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "")
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    )
  }

  if (style === "blockquote") {
    return (
      <blockquote
        className="content-blockquote max-w-lg mx-auto my-32"
        style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}
      >
        {props.children}
      </blockquote>
    )
  }
  // Fall back to default handling
  return BasePortableText.defaultSerializers.types.block(props)
}

const PDFRenderer = ({ node }) => {
  return (
    <>
      Click <a href={node.asset.url}> here </a> to download this PDF.
      <object
        data={node.asset.url}
        type="application/pdf"
        style={{ width: "calc(100% + 4rem)" }}
        className="-ml-8 mt-8"
        height="1000"
      >
        <iframe
          src={node.asset.url}
          width="100%"
          style={{ border: "none", minHeight: 500 }}
        >
          <p>
            Your browser does not support PDFs.
            <a href={node.asset.url}>Download the PDF</a>.
          </p>
        </iframe>
      </object>
    </>
  )
}

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    figure: ({ node }) => <ImageSection node={node} />,
    block: BlockRenderer,
    pdf: PDFRenderer,
  },
  marks: {
    internalLink: ({ mark, ...props }) => {
      return <Link to={mark.linkDestination} {...props} />
    },
  },
}

export default serializers
