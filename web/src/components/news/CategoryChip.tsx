import React from "react"
import Link from "../Link"

export default function CategoryChip({ title, description, slug, color }) {
  return (
    <Link to={`/news/categories/${slug.current}`}>
      <div
        className={`group relative px-4 py-2 rounded-lg my-2 ${
          color ? null : "bg-gray-700 "
        } text-white self-start hover:text-gray-100 focus:text-gray-100 hover:shadow-md focus:shadow-md border hover:border-gray-600 focus:border-gray-600`}
        style={{ background: color.hex }}
      >
        {title}
        {/* <div className="hidden group-hover:block absolute bottom-0">
        {description}
      </div> */}
      </div>
    </Link>
  )
}
