import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import * as errorWarning from "../../../elements/lottieAnimations/checked-done.json"

import { colors, buttonOne } from "../../../Utilities"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: errorWarning.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const SuccessDisplayStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.colorSecondary};
  z-index: 999999999;

  .submit-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .submit-content {
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

const clearTheForm = (
  removeFile,
  uncheckAll,
  toggleModelOpen,
  updateFormData,
  updateFormStatus
) => {
  removeFile()
  uncheckAll()
  toggleModelOpen(false)
  updateFormData({
    fullName: "",
    productType: [],
    location: "",
    yourCompany: "",
    phone: "",
    email: "",
    details: "",
    upload: "",
  })
  updateFormStatus({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })
}

const SuccessDisplay = ({
  removeFile,
  uncheckAll,
  toggleModelOpen,
  updateFormData,
  updateFormStatus,
}) => {
  return (
    <SuccessDisplayStyled>
      <div className="submit-wrapper">
        <div className="submit-content">
          <Lottie options={defaultOptions} height={200} width={200} />
          <p>Your form has successfully been submitted!</p>
          <p>Thank you and we will be in touch very soon!</p>
          <button
            onClick={() => {
              clearTheForm(
                removeFile,
                uncheckAll,
                toggleModelOpen,
                updateFormData,
                updateFormStatus
              )
            }}
          >
            Done
          </button>
        </div>
      </div>
    </SuccessDisplayStyled>
  )
}

export default SuccessDisplay
