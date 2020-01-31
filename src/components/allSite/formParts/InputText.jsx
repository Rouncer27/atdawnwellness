import React from "react"
import styled from "styled-components"

import { fontSizer, colors } from "../../../Utilities"

const InputFieldStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 3rem;

  @media (min-width: 768px) {
    ${props =>
      props.inputWidth === "half"
        ? "width: calc(50% - 2rem); margin: 0 1rem;"
        : "width: calc(100%); margin: 0;"};
    ${props =>
      props.formSide === "right"
        ? "width: calc(50% - 1rem); margin-right: 0;"
        : "margin-right: 1rem;"}
    ${props =>
      props.formSide === "left"
        ? "width: calc(50% - 1rem); margin-left: 0;"
        : "margin-left: 1rem;"}
    ${props =>
      props.inputWidth === "full" ? "width: calc(100%); margin: 0;" : ""};   
  }

  label#input-fields-label {
    ${fontSizer(1.2, 1.4, 76.8, 150, 2)};
    display: block;
    width: 100%;
    color: ${props =>
      props.textColor === "white" ? colors.white : colors.grey};
  }

  p#field-error-message {
    ${fontSizer(1.2, 1.4, 76.8, 150, 2)};
    position: absolute;
    top: 0.75rem;
    left: 0rem;
    color: red !important;
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
      color: ${colors.black};
    }

    &:focus {
    }
  }
`

const InputText = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  errors,
  required,
  width,
  formSide,
  textColor,
}) => {
  let errorMessage = ""
  return (
    <InputFieldStyled
      inputWidth={width}
      formSide={formSide}
      textColor={textColor}
    >
      <label id="input-fields-label" htmlFor={name}>
        {label}
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
        <p id="field-error-message">{errorMessage}</p>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        errors={errors}
      />
    </InputFieldStyled>
  )
}

export default InputText
