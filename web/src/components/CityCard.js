import React from "react"
import { Card, CardImage, CardHeader, CardHeaderTitle } from "bloomer"
import Img from "gatsby-image"

const CityCard = ({ city, link = null }) => {
  const {
    city: cityName,
    province,
    form,
    cityLogo: { asset },
  } = city

  return (
    <a href={link || form}>
      <Card
        style={{
          width: 192,
        }}
      >
        <CardHeader>
          <CardHeaderTitle style={{ justifyContent: "center" }}>
            {cityName}, {province}
          </CardHeaderTitle>
        </CardHeader>
        <CardImage>
          <Img fluid={asset.fluid}></Img>
        </CardImage>
      </Card>
    </a>
  )
}

export default CityCard
