import React, { useState } from "react"
import styled from "styled-components"
import { medWrapper, headlineOne, bodyCopy, buttonOne } from "../../Utilities"

import InputText from "../allSite/formParts/InputText"
import InputTextArea from "../allSite/formParts/InputTextArea"
import { submitTheForm } from "../allSite/formParts/FormUtilities/formFunctions"

const FeedbackSection = styled.section`
  margin: 3rem auto;
  .wrapper {
    ${medWrapper};

    background: #c3e6d7;

    @media (min-width: 768px) {
      padding: 5rem;
    }

    @media (min-width: 1025px) {
      padding: 10rem;
    }
  }

  .title {
    width: 100%;

    @media (min-width: 768px) {
      text-align: center;
    }

    h2 {
      ${headlineOne};
      color: #338383;
    }
  }

  .content {
    width: 100%;

    p {
      ${bodyCopy};
      color: #505b61;
    }
  }

  .button {
    width: 100%;

    a {
      ${buttonOne};
    }
  }

  .form {
    width: 100%;

    .form-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    .form-submit {
      margin-top: 2.5rem;

      button {
        ${buttonOne};
        display: inline-block;
        text-transform: uppercase;
      }
    }
  }
`

const Feedback = ({ data }) => {
  const [formData, updateFormData] = useState({
    fbName: "",
    fbNumber: "",
    fbEmail: "",
    fbMessage: "",
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

  console.log("feedback:", formData)
  console.log("feedback:", formStatus)

  const title = data.acf._adw_contact_feed_title
  const content = data.acf._adw_contact_feed_content
  const btnText = data.acf._adw_contact_feed_btn_text
  const btnUrl = data.acf._adw_contact_feed_btn_url
  return (
    <FeedbackSection>
      <div className="wrapper">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="button">
          <a target="_blank" rel="noopener noreferrer" href={btnUrl}>
            {btnText}
          </a>
        </div>
        <div className="form">
          <form
            onSubmit={e => {
              handleOnSubmit(e, 287, formData, updateFormStatus)
            }}
          >
            <div className="form-wrapper">
              <InputText
                name="fbName"
                type="text"
                placeholder="Your Full Name"
                label="Your Full Name"
                value={formData.fbName}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                width="half"
                formSide="left"
                textColor=""
              />
              <InputText
                name="fbNumber"
                type="text"
                placeholder="Phone"
                label="Phone"
                value={formData.fbNumber}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                width="half"
                formSide="right"
                textColor=""
              />
              <InputText
                name="fbEmail"
                type="email"
                placeholder="Email"
                label="Email"
                value={formData.fbEmail}
                onChange={handleOnChange}
                errors={formStatus.errors}
                required={false}
                width="full"
                formSide="full"
                textColor=""
              />
              <InputTextArea
                name="fbMessage"
                placeholder="Message"
                label="Message"
                value={formData.fbMessage}
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
    </FeedbackSection>
  )
}

export default Feedback
