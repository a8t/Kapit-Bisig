import React from "react"

export function PageContainer({ className = "", children }) {
  return (
    <section className={"container my-8 text-gray-800 " + className}>
      {children}
    </section>
  )
}

export default PageContainer
