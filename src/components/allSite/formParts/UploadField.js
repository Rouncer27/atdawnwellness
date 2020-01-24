import React from "react"
import styled from "styled-components"

import { fontSizer, colors } from "../../../Utilities"

const InputFieldStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 6.5rem;

  @media (min-width: 768px) {
    ${props =>
      props.width === "half"
        ? "width: calc(50% - 2rem); margin: 0;"
        : "width: calc(100%); margin: 0;"};
  }

  label#input-fields-label {
    ${fontSizer(1.2, 1.4, 76.8, 150, 2)};
    display: block;
    width: 100%;
    color: ${colors.grey};
  }

  p#field-error-message {
    ${fontSizer(1.2, 1.4, 76.8, 150, 2)};
    position: absolute;
    top: 1.5rem;
    left: 0rem;
    color: ${colors.strongRed} !important;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 10;
  }

  input {
    width: 100%;
    padding: 1rem 2rem;
    box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 0.2rem;
    background-color: ${colors.white};

    &::placeholder {
      color: ${colors.ironGrey};
    }

    &:focus {
    }
  }
`

const UploadField = ({ width, name, onChange, required, errors, formSide }) => {
  let errorMessage = ""
  return (
    <InputFieldStyled width={width} formSide={formSide}>
      <label id="input-fields-label" htmlFor={name}>
        Upload Your AOI: file type - zip
        <br />
        please zip your files before uploading
        <br />
        Max File size 1MB
      </label>
      {errors &&
      errors.findIndex(error => {
        if (error.idref === name) {
          errorMessage = error.message
          return true
        }
        return false
      }) === -1 ? (
        false
      ) : (
        <p id="field-error-message">&#42;&#42; {errorMessage} &#42;&#42;</p>
      )}
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        accept=".zip"
        required={required}
      />
    </InputFieldStyled>
  )
}

export default UploadField
