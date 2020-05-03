import React from "react"
import { Button, Icon } from "bloomer"
import { Columns } from "bloomer/lib/grid/Columns"
import { Link } from "gatsby"

const colors = {
  outline: "bg-gray-100 border border-blue hover:bg-blue-100 text-gray-900 ",
  primary: "bg-blue-500 hover:bg-blue-300 text-white",
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

export const RequestAid = ({ isColor }) => {
  return (
    <CTAButton
      to="/request"
      label="Request help"
      isColor={isColor}
      icon={<Icon className={`fas fa-hands-helping fa-sm `} />}
    />
  )
}

export const Volunteer = ({ isColor }) => {
  return (
    <CTAButton
      to="/volunteer"
      label="Volunteer"
      isColor={isColor}
      icon={<Icon className={`fas fa-hand-holding-heart fa-sm `} />}
    />
  )
}

const CallToAction = ({ size = "small", ...props }) => {
  return (
    <RequestAid
      isSize={size}
      style={{ marginRight: size === "small" ? 8 : 16 }}
    />
  )
}

export default CallToAction
