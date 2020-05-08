import React from "react"
import { Link } from "gatsby"
import { Subtitle, Paragraph } from "./ds/typography"
const BoldLink = props => <a style={{ fontWeight: "bold" }} {...props} />

const Field = ({ children }) => {
  return <div className="mb-4" children={children} />
}

const Label = props => {
  return (
    <label
      {...props}
      className="block text-gray-700 text-sm font-bold mb-2"
    ></label>
  )
}

const Input = props => {
  return (
    <input
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></input>
  )
}

const TextArea = props => {
  return (
    <textarea
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  )
}

export default function ContactForm() {
  return (
    <>
      <Subtitle>Contact Us</Subtitle>

      <Paragraph>
        If you have urgent inquiries, please contact us at our{" "}
        <Link to="/hotline" style={{ fontWeight: "bold" }}>
          24/7 volunteer hotline
        </Link>
        .
      </Paragraph>
      <Paragraph>
        If you have questions or inquiries outside of our{" "}
        <BoldLink href="https://bit.ly/kapitbisigto-needs">
          help request form
        </BoldLink>{" "}
        or our{" "}
        <BoldLink href="https://bit.ly/kapitbisigto-volunteer">
          volunteer signup form
        </BoldLink>
        , please continue to fill out the form below.
      </Paragraph>
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

          <Input isColor="primary" type="text" placeholder="Name" name="name" />
        </Field>

        <Field>
          <Label>Your email</Label>
          <Input
            isColor="primary"
            type="text"
            placeholder="name@example.com"
            name="email"
          />
        </Field>

        <Field>
          <Label>Message</Label>
          <TextArea
            className={"is-primary"}
            placeholder="Your message"
            name="message"
          />
        </Field>

        <Field>
          <button
            className="bg-blue-500 hover:bg-blue-300 focus:bg-blue-300 text-white px-4 py-2 border-r-3 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </Field>
      </form>
    </>
  )
}
