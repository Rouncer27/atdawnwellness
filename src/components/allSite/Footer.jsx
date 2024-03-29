import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  colors,
  bodyCopy,
  medWrapper,
  headlineFour,
  buttonOne,
  buttonTwo,
} from "../../Utilities"

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
    width: calc(33.33% - 1rem);
    margin: 0.5rem;

    @media (min-width: 768px) {
      width: 20%;
      margin: 0;
    }

    &:nth-of-type(5),
    &:nth-of-type(4) {
      width: calc(50% - 1rem);

      @media (min-width: 768px) {
        width: 20%;
      }
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
    display: none;

    @media (min-width: 768px) {
      display: block;
      position: absolute;
      right: 2rem;
      bottom: 0;
      width: calc(30rem / 1.4);
      height: calc(26rem / 1.4);
    }

    @media (min-width: 1025px) {
      right: 5rem;
      width: 30rem;
      height: 26rem;
    }
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

    a {
      ${buttonTwo};
      border: solid 0.2rem ${colors.white};
      color: ${colors.white};
    }

    &__hours {
      @media (min-width: 1025px) {
        max-width: 65rem;
      }
    }

    &__address {
      @media (min-width: 1025px) {
        max-width: 65rem;
      }
    }

    &__mailChimp {
      margin-bottom: 2rem;
      @media (min-width: 1025px) {
        max-width: 65rem;
        margin-bottom: 3rem;
      }

      p {
        margin: 0;
        margin-bottom: 0.75rem;
      }
    }
  }

  .footerCopy {
    width: 100%;
    text-align: left;

    @media (min-width: 768px) {
      max-width: 55rem;
      margin-right: auto;
      margin-left: 0;
    }

    @media (min-width: 1025px) {
      max-width: 65rem;
      margin-right: auto;
      margin-left: 0;
      text-align: left;
    }

    p,
    span {
      ${bodyCopy};
      margin: 0;
      color: #bcd5c2;
    }

    a {
      ${bodyCopy};
      margin: 0;
      color: #bcd5c2;
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
    options?.adw_footer_closed_crop?.localFile?.childImageSharp?.fluid
  const closeAlt = options.adw_footer_closed_crop.alt_text

  return (
    <StyledFooter>
      <div className="footer-images">
        {images.map((image, index) => {
          return (
            <div className="single-image" key={index}>
              <Img
                fluid={image?.image?.localFile?.childImageSharp?.fluid}
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
            <div className="footerAddress__mailChimp">
              <p>Stay up to date on all of the latest news and promotions.</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://eepurl.com/g1PjFP"
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="footerCopy">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span> | </span>
            <Link to="/disclaimer">Disclaimer</Link>
            <p>
              Copyright © {new Date().getFullYear()} At Dawn Wellness.{" "}
              {swbCred && (
                <span>
                  Designed, developed and built by{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://switchbackcreative.ca"
                  >
                    Switchback Creative
                  </a>
                  . Built with ♡ and{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.gatsbyjs.org"
                  >
                    Gatsby
                  </a>
                  .
                </span>
              )}{" "}
            </p>
            <div className="footerClosedCrop">
              <Img fluid={closeCrop} alt={closeAlt} />
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
