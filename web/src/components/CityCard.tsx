import React from "react"
import Img from "gatsby-image"

import Link from "../components/Link"

const CityCard = ({ name, provinceName, cityLogoAssetFluid, link }) => {
  return (
    <p>
      <Link to={link}>
        {name}
        {/* <Card
        style={{
          width: 192,
        }}
      >
        <CardHeader>
          <CardHeaderTitle style={{ justifyContent: "center" }}>
            {name}, {provinceName}
          </CardHeaderTitle>
        </CardHeader>
        <CardImage>
          {cityLogoAssetFluid && <Img fluid={cityLogoAssetFluid}></Img>}
        </CardImage>
      </Card> */}
      </Link>
    </p>
  )
}

export default CityCard
