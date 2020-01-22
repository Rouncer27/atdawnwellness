import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  medWrapper,
  headlineThreeSmall,
  headlineTwo,
  bodyCopy,
} from "../../Utilities"

const ServicesDesSection = styled.section`
  .wrapper {
    ${medWrapper}
  }
`

const SingleService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 7.5rem 0;

  &:nth-of-type(2n + 1) {
    flex-direction: row-reverse;
  }

  .content {
    @media (min-width: 768px) {
      width: calc(50%);
      padding: 1rem 7.5rem;
    }

    h2 {
      ${headlineTwo};
      margin: 0;
      color: #437a7e;
    }

    p {
      ${bodyCopy};
      color: #505b61;
    }
  }

  .image {
    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

const ServicesDes = ({ data }) => {
  const allServices = data.acf._adw_ser_services
  return (
    <ServicesDesSection>
      <div className="wrapper">
        <div>
          {allServices.map((service, index) => {
            const icon = service.ico
            return (
              <SingleService key={index}>
                <div className="content">
                  <div>
                    <h2>{service.title}</h2>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={service.image.localFile.childImageSharp.fluid}
                    alt={service.image.alt_text}
                  />
                </div>
              </SingleService>
            )
          })}
        </div>
      </div>
    </ServicesDesSection>
  )
}

export default ServicesDes
