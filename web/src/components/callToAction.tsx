import React from "react"
import { Icon } from "bloomer"
import Link from "./Link"

const colors = {
  outline: "bg-gray-100 border border-blue hover:bg-blue-100 text-gray-900 ",
  primary: "bg-blue-500 hover:bg-blue-300 text-white",
  white: "bg-white hover:bg-gray-200 text-gray-800",
}

const CTAButton = ({ to, label, icon, isColor = "outline" }) => {
  return (
    <Link to={to}>
      <button
        className={`px-4 py-1 rounded-full flex flex-row ${colors[isColor]}`}
      >
        {/* Call to action button icon */}
        <span>{label}</span>
        <div className="ml-2">{icon}</div>
      </button>
    </Link>
  )
}

export const RequestAid: React.FC<{
  isColor: keyof typeof colors
  link?: string
}> = ({ isColor, link = "/request" }) => {
  return (
    <CTAButton
      to={link}
      label="Request help"
      isColor={isColor}
      icon={<Icon className={`fas fa-hands-helping fa-sm `} />}
    />
  )
}

export const Volunteer: React.FC<{
  isColor: keyof typeof colors
  link?: string
}> = ({ isColor, link = "volunteer" }) => {
  return (
    <CTAButton
      to={link}
      label="Volunteer"
      isColor={isColor}
      icon={<Icon className={`fas fa-hand-holding-heart fa-sm `} />}
    />
  )
}
