import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Link from "../components/Link"
import { toKebabCase } from "../utils/toKebabCase"
import { Card } from "./ds"

export default function OrganizationCard({
  name,
  cityNames,
  provinceName,
  website,
  phone,
  twitter,
  instagram,
  facebook,
  email,
}) {
  return (
    <div className="max-w-sm">
      <Card
        title={<Link to={`/organizations/${toKebabCase(name)}`}>{name}</Link>}
        titleSize="lg"
      >
        {/* lol this is kind of cursed but it works */}
        {[website, phone, twitter, instagram, facebook, email].some(Boolean) ? (
          <div className="mt-4 space-y-4">
            {Object.entries({
              website,
              phone,
              twitter,
              instagram,
              facebook,
              email,
            }).map(([type, value]) => (
              <SocialLink type={type} value={value} key={value} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-4">Contact info coming soon</p>
        )}
      </Card>
    </div>
  )
}

export function SocialLink({ type, value }) {
  const icon = {
    website: ["fas", "globe-americas"],
    email: ["fas", "envelope-square"],
    phone: ["fas", "phone"],
    twitter: ["fab", "twitter"],
    instagram: ["fab", "instagram"],
    facebook: ["fab", "facebook-square"],
  }[type]

  const label = {
    website: "Website",
    phone: "Phone",
    twitter: "Twitter",
    instagram: "Instagram",
    facebook: "Facebook",
    email: "Email",
  }[type]

  const link = val => {
    if (type === "phone") {
      return `tel:${val}`
    }

    return val
  }
  return (
    value && (
      <Link to={link(value)} className="flex">
        <FontAwesomeIcon icon={icon} /> {label}
      </Link>
    )
  )
}
