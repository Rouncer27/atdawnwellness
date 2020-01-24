import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import InputText from "../allSite/formParts/InputText"
import InputTextArea from "../allSite/formParts/InputTextArea"
import { medWrapper, headlineOne, buttonOne } from "../../Utilities"

const LetChatSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .google-map {
    width: calc(50% - 10rem);
    margin: 5rem;
    border: solid 3rem rgba(241, 241, 241, 0.5);
  }

  .form-container {
    width: 50%;
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
  const title = data.acf._adw_contact_chat_title
  const fluid =
    data.acf._adw_contact_chat_google_image.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_contact_chat_google_image.alt_text
  return (
    <LetChatSection>
      <div className="wrapper">
        <div className="google-map">
          <Img fluid={fluid} alt={imgAlt} />
        </div>
        <div className="form-container">
          <div className="main-title">
            <h2>{title}</h2>
          </div>

          <form className="form-main">
            <div className="form-wrapper">
              <InputText
                name="fullNameContact"
                type="text"
                placeholder="Your Full Name"
                label="Your Full Name"
                value=""
                onChange=""
                errors=""
                required={true}
                width="full"
                formSide=""
                textColor=""
              />
              <InputText
                name="phoneNumber"
                type="text"
                placeholder="Your Phone Number"
                label="Your Phone Number"
                value=""
                onChange=""
                errors=""
                required={true}
                width="full"
                formSide="full"
                textColor=""
              />
              <InputText
                name="yourEmail"
                type="email"
                placeholder="Your Email"
                label="Your Email"
                value=""
                onChange=""
                errors=""
                required={true}
                width="full"
                formSide="full"
                textColor=""
              />
              <InputTextArea
                name="message"
                placeholder="Message"
                label="Message"
                value=""
                onChange=""
                errors={[]}
                required={true}
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
    </LetChatSection>
  )
}

export default LetChat
