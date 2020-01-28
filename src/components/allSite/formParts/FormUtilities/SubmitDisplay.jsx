import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"

import { colors, buttonOne } from "../../../../Utilities"

import * as success from "../../../../elelments/lottieAnimations/loading.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const SubmitDisplayStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.colorPrimary};
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

const SubmitDisplay = () => {
  return (
    <SubmitDisplayStyled>
      <div className="submit-wrapper">
        <div className="submit-content">
          <Lottie options={defaultOptions} height={200} width={200} />
          <p>Please stand by.</p>
        </div>
      </div>
    </SubmitDisplayStyled>
  )
}

export default SubmitDisplay
