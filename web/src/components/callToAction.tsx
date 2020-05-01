import React from "react"
import { Button, Icon } from "bloomer"
import { Columns } from "bloomer/lib/grid/Columns"
import { Link } from "gatsby"

export const RequestAid = props => {
  return (
    <Link to="/request">
      <Button className="is-rounded" id="btn-spaced" {...props}>
        {/* Call to action button icon */}
        <span>Request help</span>
        <Icon className="fas fa-hands-helping fa-sm" />
      </Button>
    </Link>
  )
}

export const Volunteer = props => {
  return (
    <Link to="/volunteer">
      <Button className="is-rounded" id="btn-spaced" {...props}>
        {/* Call to action button icon */}
        <span>Volunteer</span>
        <Icon className="fas fa-hand-holding-heart fa-sm" />
      </Button>{" "}
    </Link>
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
