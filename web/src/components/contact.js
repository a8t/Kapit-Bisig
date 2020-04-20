import React from "react"
import { Link } from "gatsby"
import {
  Subtitle,
  Button,
  Field,
  Label,
  Control,
  TextArea,
  Input,
  Box,
} from "bloomer"

const BoldLink = props => <a style={{ fontWeight: "bold" }} {...props} />

export default function ContactForm() {
  return (
    <>
      <Subtitle>Contact Us</Subtitle>

      <p>
        If you have urgent inquiries, please contact us at our{" "}
        <Link to="/hotline" style={{ fontWeight: "bold" }}>
          24/7 volunteer hotline
        </Link>
        .
      </p>
      <p>
        If you have questions or inquiries outside of our{" "}
        <BoldLink href="https://bit.ly/kapitbisigto-needs">
          help request form
        </BoldLink>{" "}
        or our{" "}
        <BoldLink href="https://bit.ly/kapitbisigto-volunteer">
          volunteer signup form
        </BoldLink>
        , please continue to fill out the form below.
      </p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        <label style={{ visibility: "hidden" }}>
          Don’t fill this out if you're human:{" "}
          <input name="bot-field" type="hidden" />
        </label>
        <Field>
          <Label>Your name</Label>

          <Control>
            <Input
              isColor="primary"
              type="text"
              placeholder="Name"
              name="name"
            />
          </Control>
        </Field>

        <Field>
          <Label>Your email</Label>
          <Control>
            <Input
              isColor="primary"
              type="text"
              placeholder="name@example.com"
              name="email"
            />
          </Control>
        </Field>

        <Field>
          <Label>Message</Label>
          <Control>
            <TextArea
              className={"is-primary"}
              placeholder="Your message"
              name="message"
            />
          </Control>
        </Field>

        <Field>
          <Control>
            <Button isColor="success" type="submit">
              Submit
            </Button>
          </Control>
        </Field>
      </form>
    </>
  )
}
