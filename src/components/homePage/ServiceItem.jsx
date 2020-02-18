import React from "react"
import styled from "styled-components"
import { headlineTwo, colors, bodyCopy } from "../../Utilities"

import StonesSvg from "../../elelments/svgs/StonesSvg"
import PelvicSvg from "../../elelments/svgs/PelvicSvg"
import NaturopathSvg from "../../elelments/svgs/NaturopathSvg"

const ServiceItemStyled = styled.div`
  text-align: center;

  @media (min-width: 1025px) {
    width: calc(33.33% - 3rem);
    margin: 1.5rem;
  }

  .serviceIcon {
    width: 100%;
    margin: 0 auto;

    svg {
      width: 10rem;
      height: 10rem;

      path,
      circle {
        fill: #363636;
        stroke: #363636;
      }
    }
  }

  .title {
    h3 {
      ${headlineTwo};
      color: ${colors.colorPrimary};
    }
  }

  .description {
    p {
      ${bodyCopy};
    }
  }
`

const ServiceItem = ({ data }) => {
  const ServiceIcon =
    data.service_icon === "stones" ? (
      <StonesSvg />
    ) : data.service_icon === "pelvis" ? (
      <PelvicSvg />
    ) : data.service_icon === "flower" ? (
      <NaturopathSvg />
    ) : (
      false
    )

  return (
    <ServiceItemStyled id="ServiceItem">
      {ServiceIcon && <div className="serviceIcon">{ServiceIcon}</div>}
      <div className="title">
        <h3>{data.service_title}</h3>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: data.service_description,
        }}
      />
    </ServiceItemStyled>
  )
}

export default ServiceItem
