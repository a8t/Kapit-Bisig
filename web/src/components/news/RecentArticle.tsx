import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import { Subtitle, Paragraph } from "../ds"
import Link from "../Link"
import CategoryChip from "./CategoryChip"
import { insertBetween } from "../../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function RecentArticle({
  title,
  previewText,
  _createdAt,
  slug,
  mainImage,
  categories,
}) {
  return (
    <article className="shadow-sm rounded-md sm:flex bg-white overflow-hidden border-gray-200 border-2">
      <div className="h-64 sm:w-48 bg-gray-200">
        {mainImage ? (
          <Img
            fluid={mainImage.asset.fluid}
            className="w-full h-full sm:w-48"
          />
        ) : (
          <div className="flex justify-center items-center w-full h-full bg-gray-200">
            <strong className="text-6xl text-gray-500">KB</strong>
          </div>
        )}
      </div>
      <section className="p-4 flex flex-col flex-grow">
        <div className="flex space-x-2 text-gray-600 text-sm mb-2">
          <time>{moment(_createdAt).format("MMM D, YYYY")}</time>
          <span>•</span>
          <span>
            <FontAwesomeIcon icon="folder" className="mr-1" />
            {categories.length > 0
              ? insertBetween(
                  categories.map(({ title, slug }) => (
                    <Link to={`/news/categories/${slug.current}`}>{title}</Link>
                  )),
                  ", "
                )
              : "Uncategorized"}
          </span>
        </div>
        <Subtitle>
          <Link to={`/news/${slug.current}`} className="text-blue-500">
            {title}
          </Link>
        </Subtitle>

        {previewText}

        <Link to={`/news/${slug.current}`} className="mt-auto pt-8">
          Read More &#187;
        </Link>
      </section>
    </article>
  )
}
