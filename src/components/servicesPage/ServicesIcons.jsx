import React from "react"
import styled from "styled-components"
import {
  headlineOne,
  bodyCopy,
  fonts,
  fontSizer,
  standardWrapper,
} from "../../Utilities"

const ServicesIconsSection = styled.section`
  padding-bottom: 5rem;

  .wrapper {
    ${standardWrapper};
  }

  .mainTitle {
    width: 100%;
    padding-bottom: 5rem;
    text-align: center;

    h2 {
      ${headlineOne};
      margin-bottom: 1.5rem;
      color: #437a7e;
    }

    h3 {
      ${bodyCopy}
      color: #505b61;
    }
  }
`

const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  border: solid 0.2rem #338383;

  @media (min-width: 1025px) {
    width: calc(25% - 6rem);
    min-height: 15rem;
    margin: 4rem 3rem;
    padding: 1rem 3rem;
  }

  &:hover {
    background: #c3e6d7;
    cursor: pointer;
  }

  h2 {
    ${fontSizer(1.6, 1.8, 76.8, 150, 1.6)};
    margin: 0;
    width: 100%;
    color: #505b61;
    font-family: ${fonts.fontPrimary};
    font-weight: bold;
    text-transform: uppercase;
  }
`

const ServicesIcons = ({ data }) => {
  const services = data.acf._adw_ser_services_icons
  return (
    <ServicesIconsSection>
      <div className="wrapper">
        <div className="mainTitle">
          <h2>Full Service Wellness</h2>
          <h3>
            Here is the full slate of services that we offer for your wellness
            journey.{" "}
          </h3>
        </div>
        {services.map((service, index) => {
          return (
            <ServiceIcon key={index}>
              <div>
                <h2>{service.title}</h2>
              </div>
            </ServiceIcon>
          )
        })}
      </div>
    </ServicesIconsSection>
  )
}

export default ServicesIcons
