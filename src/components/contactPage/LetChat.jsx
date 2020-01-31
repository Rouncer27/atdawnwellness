import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import InputText from "../allSite/formParts/InputText"
import InputTextArea from "../allSite/formParts/InputTextArea"
import { medWrapper, headlineOne, buttonOne } from "../../Utilities"
import { submitTheForm } from "../allSite/formParts/FormUtilities/formFunctions"

// models //
import SubmitDisplay from "../allSite/formParts/FormUtilities/SubmitDisplay"
import ErrorDisplay from "../allSite/formParts/FormUtilities/ErrorDisplay"
import SuccessLetsChat from "../allSite/formParts/FormUtilities/SuccessLetsChat"

const LetChatSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .google-map {
    align-self: center;
    width: calc(100% - 5rem);
    margin: 2.5rem;
    border: solid 1.5rem rgba(241, 241, 241, 0.5);

    @media (min-width: 768px) {
      width: calc(100% - 30rem);
      margin: 5rem 15rem;
      border: solid 3rem rgba(241, 241, 241, 0.5);
    }

    @media (min-width: 1025px) {
      width: calc(50% - 10rem);
      margin: 5rem;
      border: solid 3rem rgba(241, 241, 241, 0.5);
    }
  }

  .form-container {
    width: 100%;
    @media (min-width: 1025px) {
      width: 50%;
    }
  }

  .main-title,
  .form-main {
    width: 100%;
  }

  .main-title {
    h2 {
      ${headlineOne};
      margin: 0;
      color: #437a7e;
    }
  }

  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    input,
    textarea {
      background-color: #c3e6d7;
    }
  }

  .form-submit {
    margin-top: 2.5rem;
    margin-right: auto;
    margin-left: 0;

    button {
      ${buttonOne};
      display: inline-block;
    }
  }
`

const LetChat = ({ data }) => {
  const [formData, updateFormData] = useState({
    yourName: "",
    yourNumber: "",
    yourEmail: "",
    yourMessage: "",
  })

  const [formStatus, updateFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  })

  const handleOnChange = e => {
    updateFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = (e, formId, formData, updateFormStatus) => {
    e.preventDefault()
    updateFormStatus({
      ...formStatus,
      submitting: true,
      captachError: false,
    })

    submitTheForm(e, formId, formData, updateFormStatus)
  }

  const title = data.acf._adw_contact_chat_title
  const fluid =
    data.acf._adw_contact_chat_google_image.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_contact_chat_google_image.alt_text
  const googleMapUrl = data.acf._adw_contact_chat_google_url
  return (
    <LetChatSection>
      <div className="wrapper">
        <div className="google-map">
          <a target="_blank" rel="noopener noreferrer" href={googleMapUrl}>
            <Img fluid={fluid} alt={imgAlt} />
          </a>
        </div>
        <div className="form-container">
          <div className="main-title">
            <h2>{title}</h2>
          </div>

          <form
            className="form-main"
            onSubmit={e => {
              handleOnSubmit(e, 7, formData, updateFormStatus)
            }}
          >
            <div className="form-wrapper">
              <InputText
                name="yourName"
                type="text"
                placeholder="Your Full Name"
                label="Your Full Name"
                value={formData.yourName}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                width="full"
                formSide=""
                textColor=""
              />
              <InputText
                name="yourNumber"
                type="text"
                placeholder="Your Phone Number"
                label="Your Phone Number"
                value={formData.yourNumber}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                width="full"
                formSide="full"
                textColor=""
              />
              <InputText
                name="yourEmail"
                type="email"
                placeholder="Your Email"
                label="Your Email"
                value={formData.yourEmail}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                width="full"
                formSide="full"
                textColor=""
              />
              <InputTextArea
                name="yourMessage"
                placeholder="Message"
                label="Message"
                value={formData.yourMessage}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                rows={5}
                textColor=""
              />
              <div className="form-submit">
                <button>submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {formStatus.submitting && <SubmitDisplay />}
      {formStatus.errorWarnDisplay && (
        <ErrorDisplay formStatus={formStatus} stateSetter={updateFormStatus} />
      )}
      {formStatus.success && (
        <SuccessLetsChat
          updateFormData={updateFormData}
          updateFormStatus={updateFormStatus}
        />
      )}
    </LetChatSection>
  )
}

export default LetChat
