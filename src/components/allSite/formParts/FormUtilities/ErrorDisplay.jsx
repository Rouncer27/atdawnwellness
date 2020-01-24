import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import * as errorWarning from "../../../elements/lottieAnimations/error-cross.json"

import { colors, buttonOne } from "../../../Utilities"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: errorWarning.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const ErrorDisplayStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.colorPrimary};
  z-index: 999999999;

  .warning-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .warning-content {
    align-self: center;
    max-width: 50rem;
    padding: 3rem;
    background: #fff;
    border-radius: 0.5rem;
    text-align: center;

    button {
      ${buttonOne};
    }
  }
`

const fixTheFormErrors = (stateSetter, formStatus) => {
  stateSetter({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
  })
}

const ErrorDisplay = ({ formStatus, stateSetter }) => {
  return (
    <ErrorDisplayStyled>
      <div className="warning-wrapper">
        <div className="warning-content">
          <Lottie options={defaultOptions} height={200} width={200} />
          <p>
            There were some errors in your form. Please fix the necessary fields
            and try again. Thank you!
          </p>
          <button
            onClick={() => {
              fixTheFormErrors(stateSetter, formStatus)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </ErrorDisplayStyled>
  )
}

export default ErrorDisplay
