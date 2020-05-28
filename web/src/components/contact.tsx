import React, { useState } from "react"
import { Subtitle, Paragraph } from "./ds/typography"
import Link from "./Link"

const Field = ({ children }) => {
  return <div className="mb-4" children={children} />
}

const Label = (props: JSX.IntrinsicElements["label"]) => {
  return (
    <label
      {...props}
      className="block text-gray-700 text-sm font-bold mb-2"
    ></label>
  )
}

const Input = (props: JSX.IntrinsicElements["input"]) => {
  return (
    <input
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></input>
  )
}

const TextArea = (props: JSX.IntrinsicElements["textarea"]) => {
  return (
    <textarea
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  )
}

const CheckboxInput = ({ label, checked, onChange }) => {
  return (
    <label className="-ml-2 block text-gray-700 font-bold cursor-pointer hover:bg-gray-100 p-2 mr-2 flex flex-row items-center">
      <input
        className="mr-2 leading-tight"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm">{label}</span>
    </label>
  )
}

export default function ContactForm() {
  const [acknowledgedHotline, setAcknowledgedHotline] = useState(false)
  const [acknowledgedForms, setAcknowledgedForms] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // If we don't have one of the required fields, disable the button.
  const isButtonDisabled = !(
    acknowledgedHotline &&
    acknowledgedForms &&
    name &&
    email
  )
  return (
    <>
      <Subtitle>Contact Us</Subtitle>

      <Paragraph>
        If you have questions or inquiries, please continue to fill out the form
        below.
      </Paragraph>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <CheckboxInput
          checked={acknowledgedHotline}
          onChange={() => {
            setAcknowledgedHotline(!acknowledgedHotline)
          }}
          label={
            <>
              I don't need urgent help from the{" "}
              <Link to="/hotline" style={{ fontWeight: "bold" }}>
                24/7 volunteer hotline
              </Link>
            </>
          }
        />
        <CheckboxInput
          checked={acknowledgedForms}
          onChange={() => {
            setAcknowledgedForms(!acknowledgedForms)
          }}
          label={
            <>
              The <Link to="/request">request form</Link> and{" "}
              <Link to="volunteer">volunteer form</Link> don't cover my inquiry.
            </>
          }
        />

        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        <label style={{ visibility: "hidden" }}>
          Don’t fill this out if you're human:{" "}
          <input name="bot-field" type="hidden" />
        </label>
        <Field>
          <Label>Your name</Label>

          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Your email</Label>
          <Input
            type="text"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            disabled={isButtonDisabled}
            className={`bg-blue-500  text-white px-4 py-2 border-r-3 rounded-full 
              ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-300 focus:bg-blue-300"
              }`}
            type="submit"
          >
            Submit
          </button>
        </Field>
      </form>
    </>
  )
}
