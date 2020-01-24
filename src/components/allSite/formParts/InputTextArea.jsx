import React from "react"
import styled from "styled-components"
import { colors, fontSizer } from "../../../Utilities"

const TextareaStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 3rem;

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

  textarea {
    width: 100%;
    padding: 1rem 2rem;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: 0.2rem solid rgba(0, 0, 0, 0.05);
    background-color: ${colors.white};

    &::placeholder {
      color: ${colors.ironGrey};
    }
  }
`

const InputTextArea = ({
  name,
  placeholder,
  label,
  errors,
  value,
  onChange,
  required,
  rows,
  textColor,
}) => {
  return (
    <TextareaStyled textColor={textColor}>
      <label id="input-fields-label" htmlFor={name}>
        {label}
      </label>
      {errors.findIndex(error => {
        if (error.idref === name) {
          return true
        }
        return false
      }) === -1 ? (
        ""
      ) : (
        <p id="field-error-message">Required Field</p>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        errors={errors}
      />
    </TextareaStyled>
  )
}

export default InputTextArea
