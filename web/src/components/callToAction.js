import React from "react"
import { Button, Icon } from "bloomer"
import { Columns } from "bloomer/lib/grid/Columns"

export const RequestAid = props => {
  return (
    <Button
      href="https://bit.ly/kapitbisigto-needs"
      target="_blank"
      rel="noopener noreferrer"
      className="is-rounded"
      id="btn-spaced"
      {...props}
    >
      {/* Call to action button icon */}
      <span>Request help</span>
      <Icon className="fas fa-hands-helping fa-sm" />
    </Button>
  )
}

export const Volunteer = props => {
  return (
    <Button
      href="https://bit.ly/kapitbisigto-volunteer"
      target="_blank"
      rel="noopener noreferrer"
      className="is-rounded"
      id="btn-spaced"
      {...props}
    >
      {/* Call to action button icon */}
      <span>Volunteer</span>
      <Icon className="fas fa-hand-holding-heart fa-sm" />
    </Button>
  )
}

const CallToAction = ({ size = "small", ...props }) => {
  return (
    <Columns style={{ marginLeft: 0 }}>
      <RequestAid
        isSize={size}
        style={{ marginRight: size === "small" ? 8 : 16 }}
      />

      <Volunteer isSize={size} isOutlined isColor="white" />
    </Columns>
  )
}

export default CallToAction
