import React from "react"
import clientConfig from "../../client-config"
import BasePortableText from "@sanity/block-content-to-react"
import serializers from "./serializers"

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    className="space-y-4"
    {...clientConfig.sanity}
  />
)

export default PortableText
