import React from "react"
import styled from "styled-components"

import { colors } from "../../../Utilities"

const CheckboxStyled = styled.div`
  margin-left: 1.5rem;

  input[type="checkbox"],
  input[type="radio"] {
    opacity: 0;
  }

  input[type="checkbox"] + label::after {
    content: none;
  }

  input[type="checkbox"]:focus + label::before {
    outline: ${colors.colorTertiary} auto 0.2rem;
  }

  input[type="checkbox"]:checked + label::before {
    border: 0.2rem solid ${colors.colorAccent};
  }

  input[type="checkbox"]:checked + label::after {
    content: "";
  }

  input[type="checkbox"]:checked + label {
    color: ${colors.colorAccent};
  }

  label {
    width: 100%;
    display: inline-block;
    position: relative;
    margin-left: 3rem;
    line-height: 1;
    color: ${colors.white};

    @media (min-width: 768px) {
      display: inline;
      margin-left: 0;
      padding-left: 2rem;
    }
  }

  label::before {
    display: inline-block;
    position: absolute;
    top: 0.5rem;
    left: -4rem;
    height: 2.2rem;
    width: 2.2rem;
    border: 0.2rem solid ${colors.colorSecondary};
    content: "";
  }

  @media (min-width: 768px) {
    label::before {
      top: 0.2rem;
      left: -2.5rem;
    }
  }

  label::after {
    display: inline-block;
    position: absolute;
    top: 0.8rem;
    left: -2rem;
    width: 1.3rem;
    height: 0.7rem;
    transform: rotate(-45deg);
    border-left: 0.3rem solid ${colors.colorAccent};
    border-bottom: 0.3rem solid ${colors.colorAccent};
    content: "";
  }
`

const InputCheckbox = ({ id, name, value, label, onChange }) => {
  return (
    <CheckboxStyled>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxStyled>
  )
}

export default InputCheckbox
