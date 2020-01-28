import React from "react"
import styled from "styled-components"
import { medWrapper, buttonOne } from "../../Utilities"

import ServiceItem from "./ServiceItem"
import { Link } from "gatsby"

const ServicesListStyled = styled.section`
  padding: 2rem 0;
  background: rgba(214, 207, 199, 0.4);

  @media (min-width: 1025px) {
    padding: 3.5rem 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .servicesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .serviceLink {
    a {
      ${buttonOne};
    }
  }
`

const ServicesList = ({ data }) => {
  return (
    <ServicesListStyled>
      <div className="wrapper">
        <div className="servicesContainer">
          {data.acf._adw_srl_services_list.map((service, index) => {
            return <ServiceItem key={index} data={service} />
          })}
        </div>
        <div className="serviceLink">
          <Link to="/services">Go To Services</Link>
        </div>
      </div>
    </ServicesListStyled>
  )
}

export default ServicesList
