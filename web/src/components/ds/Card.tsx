import React from "react"
import { Subtitle, Paragraph } from "./typography"

export const Card = ({ title, titleSize = "2xl", children }) => {
  return (
    <div className="rounded border border-gray-300 shadow-lg">
      <h2
        className={`p-4 py-2 bg-gray-200 mb-2 font-display font-bold text-grey-800 text-${titleSize}`}
      >
        {title}
      </h2>
      <Paragraph className="px-4">{children}</Paragraph>
    </div>
  )
}
