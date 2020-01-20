import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { colors, bodyCopy, medWrapper, headlineFour } from "../../Utilities"

const getData = graphql`
  query footerOptions {
    footData: wordpressAcfOptions {
      options {
        adw_footer_images {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        adw_footer_closed_crop {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        adw_footer_hours
        adw_footer_address
        swbtheme_switchback_credit
      }
    }
  }
`

const StyledFooter = styled.footer`
  overflow: hidden;

  .footer-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .single-image {
    width: 100%;

    @media (min-width: 1025px) {
      width: 20%;
    }
  }

  .footerBottom {
    position: relative;
    padding: 3rem 0;
    background-color: ${colors.colorPrimary};
    overflow: hidden;

    &__wrapper {
      ${medWrapper};
    }
  }

  .footerClosedCrop {
    position: absolute;
    right: 5rem;
    bottom: 0;
    width: 30rem;
    height: 26rem;
  }

  .footerAddress {
    position: relative;
    width: 100%;

    h3 {
      ${headlineFour};
      margin: 0;
      color: ${colors.white};
    }

    p {
      ${bodyCopy};
      color: ${colors.white};
    }

    &__hours {
      @media (min-width: 1025px) {
        max-width: 40rem;
      }
    }

    &__address {
      @media (min-width: 1025px) {
        max-width: 40rem;
      }
    }
  }

  .footerCopy {
    width: 100%;
    text-align: center;

    p {
      ${bodyCopy};
      margin: 0;
      color: ${colors.white};
    }

    a {
      ${bodyCopy};
      margin: 0;
      color: ${colors.white};
    }
  }
`

const Footer = () => {
  const {
    footData: { options },
  } = useStaticQuery(getData)
  const images = options.adw_footer_images
  const hours = options.adw_footer_hours
  const address = options.adw_footer_address
  const swbCred = options.swbtheme_switchback_credit === "yes" ? true : false
  const closeCrop =
    options.adw_footer_closed_crop.localFile.childImageSharp.fluid
  const closeAlt = options.adw_footer_closed_crop.alt_text

  return (
    <StyledFooter>
      <div className="footer-images">
        {images.map((image, index) => {
          return (
            <div className="single-image" key={index}>
              <Img
                fluid={image.image.localFile.childImageSharp.fluid}
                alt={image.image.alt_text}
              />
            </div>
          )
        })}
      </div>
      <div className="footerBottom">
        <div className="footerBottom__wrapper">
          <div className="footerAddress">
            <div className="footerAddress__hours">
              <h3>Hours</h3>
              <div dangerouslySetInnerHTML={{ __html: hours }} />
            </div>
            <div className="footerAddress__address">
              <h3>Address</h3>
              <div dangerouslySetInnerHTML={{ __html: address }} />
            </div>
            <div className="footerClosedCrop">
              <Img fluid={closeCrop} alt={closeAlt} />
            </div>
          </div>
          <div className="footerCopy">
            <p>
              Copyright © {new Date().getFullYear()} At Dawn Wellness.
              {swbCred && (
                <span>
                  Made in Airdrie. Designed and developed by{" "}
                  <a href="https://switchbackcreative.ca">
                    Switchback Creative Inc.
                  </a>
                  . Built with ♡ and{" "}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>.
                </span>
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
