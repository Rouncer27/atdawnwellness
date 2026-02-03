import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { colors, headlineOne, headlineTwo, medWrapper } from "../../Utilities"
import { Link } from "gatsby"
import slugify from "slugify"

const KeyServices = ({ data }) => {
  const services = data.edges.reverse()
  console.log("Hello World: ", services)

  return (
    <ServicesDesSection>
      <div className="wrapper">
        <div className="services-main-title">
          <h2>Key Services</h2>
        </div>
        <div className="services-wrapper">
          {services.map((service, index) => {
            const slug = slugify(service.node.acf.service_title, {
              lower: true,
              strict: true,
              trim: true,
            })
            return (
              <div className="services-item" key={index}>
                <div className="services-item-image">
                  <Img
                    fluid={
                      service.node.acf.featured_image.localFile.childImageSharp
                        .fluid
                    }
                    alt={service.node.acf.featured_image.alt_text}
                  />
                </div>
                <div className="services-item-title">
                  <h3>{service.node.acf.service_title}</h3>
                  <p>
                    <Link to={`/services/${slug}`}>Learn More</Link>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ServicesDesSection>
  )
}

const ServicesDesSection = styled.section`
  padding: 2rem 0;

  .wrapper {
    ${medWrapper}
  }

  .services-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .services-main-title {
    width: 100%;

    h2 {
      ${headlineOne};
      color: ${colors.colorPrimary};
    }
  }

  .services-item {
    width: calc(33.333333% - 2rem);
    margin: 3rem 1rem;

    &-image {
    }

    &-title {
      width: 100%;
      padding: 1rem 2rem;
      background-color: ${colors.colorPrimary};
      text-align: center;

      h3 {
        ${headlineTwo};
        margin: 0;
        margin-bottom: 1rem;
        color: ${colors.white};
      }

      p {
        margin: 0;

        a {
          color: ${colors.white};
          text-transform: uppercase;

          &:hover {
            color: ${colors.colorAccent};
          }
        }
      }
    }
  }
`

export default KeyServices
