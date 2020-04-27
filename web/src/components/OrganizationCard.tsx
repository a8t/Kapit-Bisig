import React from "react"
import { Card, CardFooter, CardHeader, CardHeaderTitle, Icon } from "bloomer"
import Img from "gatsby-image"

import Link from "../components/Link"

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
    <div style={{ paddingBottom: 16 }}>
      <Link to={website ?? phone ?? twitter ?? instagram ?? facebook ?? email}>
        <Card
          style={{
            width: 192,
          }}
        >
          <CardHeader>
            <CardHeaderTitle style={{ justifyContent: "center" }}>
              {name}
            </CardHeaderTitle>
          </CardHeader>
          <CardFooter
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {cityNames.join(", ")}
          {provinceName} */}
            {/* lol this is kind of cursed but it works */}
            {Object.entries({
              website,
              phone,
              twitter,
              instagram,
              facebook,
              email,
            }).map(([type, value]) => (
              <SocialLink type={type} value={value} />
            ))}
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
}

export function SocialLink({ type, value }) {
  const icon = {
    website: "fas fa-globe-americas",
    phone: "fas fa-phone",
    twitter: "fab fa-twitter",
    instagram: "fab fa-instagram",
    facebook: "fab fa-facebook",
    email: "fas fa-email",
  }[type]
  return value && <Icon className={`${icon} fa-sm`} />
}
