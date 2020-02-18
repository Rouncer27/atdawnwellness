import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  headlineOne,
  bodyCopy,
  fonts,
  fontSizer,
  standardWrapper,
} from "../../Utilities"

import StonesSvg from "../../elelments/svgs/StonesSvg"
import BambooSvg from "../../elelments/svgs/BambooSvg"
import CuppingSvg from "../../elelments/svgs/CuppingSvg"
import FascialSvg from "../../elelments/svgs/FascialSvg"
import NaturopathSvg from "../../elelments/svgs/NaturopathSvg"
import PdtrSvg from "../../elelments/svgs/PdtrSvg"
import PelvicSvg from "../../elelments/svgs/PelvicSvg"
import PostnatalSvg from "../../elelments/svgs/PostnatalSvg"
import PrenatalSvg from "../../elelments/svgs/PrenatalSvg"
import RaindropSvg from "../../elelments/svgs/RaindropSvg"
import RelaxSvg from "../../elelments/svgs/RelaxSvg"
import ScrubsSvg from "../../elelments/svgs/ScrubsSvg"
import CraniosacralSvg from "../../elelments/svgs/CraniosacralSvg"

const ServicesIconsSection = styled.section`
  position: relative;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(50% - 2rem);
  min-height: 15rem;
  margin: 5rem 1rem;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  border: solid 0.2rem #338383;

  @media (min-width: 768px) {
    width: calc(33% - 6rem);
    min-height: 17.5rem;
  }

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
    margin-top: 2.5rem;
    width: 100%;
    color: #505b61;
    font-family: ${fonts.fontPrimary};
    font-weight: bold;
    text-transform: uppercase;
  }

  .service-icon {
    position: absolute;
    top: -6rem;
    right: 0;
    left: 0;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;

    svg {
      display: block;
      width: 7rem;
      height: 7rem;
      margin: auto;
    }
  }
`

const ServicesDescriptions = styled.div`
  position: fixed;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in;
  display: ${props => (props.isModleActive ? "flex" : "flex")};
  visibility: ${props => (props.isModleActive ? "visible" : "hidden")};
  opacity: ${props => (props.isModleActive ? 1 : 0)};
  z-index: ${props => (props.isModleActive ? 99999999 : -1)};

  .model-background {
    position: absolute;
    background: rgba(216, 227, 233, 0.65);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const SingleDescription = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  align-self: center;
  width: 100%;
  max-width: 100rem;
  min-height: 57.5rem;
  transition: all 0.4s ease-in;
  transform: translate(-50%, -50%);
  background: #c3e6d7;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 768px) {
    min-height: 50rem;
  }

  @media (min-width: 1025px) {
    min-height: 57.5rem;
  }

  p {
    ${bodyCopy};
    color: #505b61;

    &:last-of-type {
      margin: 0;
    }
  }

  &.activeOpen {
    visibility: visible;
    opacity: 1;
  }

  .iconImg-wrapper {
    display: none;
    width: 30%;
    max-width: 30rem;

    @media (min-width: 768px) {
      display: block;
      width: 30%;
      max-width: 30rem;
    }

    .image-container {
      overflow: hidden;

      @media (min-width: 768px) {
        height: 25rem;
      }

      @media (min-width: 1025px) {
        height: 30rem;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .icon-container {
      max-width: 100%;
      max-height: 100%;
      min-height: 27.5rem;
      padding: 6rem;
      background: #fff;

      h3 {
        ${fontSizer(1.6, 1.8, 76.8, 150, 1.6)};
        margin: 0;
        width: 100%;
        color: #505b61;
        font-family: ${fonts.fontPrimary};
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }

      svg {
        display: block;
        width: 10rem;
        height: 10rem;
        margin: auto;
      }
    }
  }

  .content-wrapper {
    align-self: center;
    position: relative;
    width: 100%;
    padding: 5rem 7.5rem;
    background: #c3e6d7;

    @media (min-width: 768px) {
      width: 70%;
      max-width: 70rem;
    }
  }

  .button-close {
    position: absolute;
    top: 1rem;
    right: 5rem;

    button {
      position: relative;
      background: transparent;
      border: none;

      &:after {
        position: absolute;
        top: 50%;
        color: #fff;
        font-family: ${fonts.fontAwesome};
        font-size: 3rem;
        content: "\f00d";
      }

      &:hover {
        cursor: pointer;
        &:after {
          cursor: pointer;
          color: #6aacac;
        }
      }
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    right: 0%;
    left: 0%;
    width: 100%;
    transform: translateY(-50%);

    button {
      position: relative;
      background: transparent;
      border: none;

      &:focus {
        outline: none;
      }

      &:after {
        position: absolute;
        top: 50%;
        color: #fff;
        font-family: ${fonts.fontAwesome};
        font-size: 3rem;
      }

      &:first-of-type {
        &:after {
          left: 1rem;
          content: "\f053";
        }
      }

      &:last-of-type {
        &:after {
          left: -3rem;
          content: "\f054";
        }
      }

      &:hover {
        cursor: pointer;

        &:after {
          color: #6aacac;
        }
      }
    }
  }
`

const ServicesIcons = ({ data }) => {
  const [isModleActive, updateModleActive] = useState(false)
  const [activeIndex, updateActiveIndex] = useState(0)
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
          let icon =
            service.icon === "stones" ? (
              <StonesSvg />
            ) : service.icon === "bamboo" ? (
              <BambooSvg />
            ) : service.icon === "raindrop" ? (
              <RaindropSvg />
            ) : service.icon === "relaxation" ? (
              <RelaxSvg />
            ) : service.icon === "massage" ? (
              <PelvicSvg />
            ) : service.icon === "prenatal" ? (
              <PrenatalSvg />
            ) : service.icon === "postnatal" ? (
              <PostnatalSvg />
            ) : service.icon === "cupping" ? (
              <CuppingSvg />
            ) : service.icon === "muds" ? (
              <NaturopathSvg />
            ) : service.icon === "scrubs" ? (
              <ScrubsSvg />
            ) : service.icon === "pdtr" ? (
              <PdtrSvg />
            ) : service.icon === "craniosacral" ? (
              <CraniosacralSvg />
            ) : service.icon === "fascial" ? (
              <FascialSvg />
            ) : (
              <StonesSvg />
            )
          return (
            <ServiceIcon
              onClick={() => {
                updateActiveIndex(index)
                updateModleActive(true)
              }}
              data-index={index}
              key={index}
            >
              <div>
                <h2>{service.title}</h2>
                <div className="service-icon">{icon}</div>
              </div>
            </ServiceIcon>
          )
        })}
      </div>
      <ServicesDescriptions isModleActive={isModleActive}>
        {services.map((service, index) => {
          const maxDes = services.length - 1
          let icon =
            service.icon === "stones" ? (
              <StonesSvg />
            ) : service.icon === "bamboo" ? (
              <BambooSvg />
            ) : service.icon === "raindrop" ? (
              <RaindropSvg />
            ) : service.icon === "relaxation" ? (
              <RelaxSvg />
            ) : service.icon === "massage" ? (
              <PelvicSvg />
            ) : service.icon === "prenatal" ? (
              <PrenatalSvg />
            ) : service.icon === "postnatal" ? (
              <PostnatalSvg />
            ) : service.icon === "cupping" ? (
              <CuppingSvg />
            ) : service.icon === "muds" ? (
              <NaturopathSvg />
            ) : service.icon === "scrubs" ? (
              <ScrubsSvg />
            ) : service.icon === "pdtr" ? (
              <PdtrSvg />
            ) : service.icon === "fascial" ? (
              <FascialSvg />
            ) : (
              <StonesSvg />
            )

          return (
            <SingleDescription
              data-index={index}
              key={index}
              className={`singleDescription${
                activeIndex === index ? " activeOpen" : ""
              }`}
            >
              <div className="iconImg-wrapper">
                <div className="icon-container">
                  {icon && icon}
                  <h3>{service.title}</h3>
                </div>
                <div className="image-container">
                  <Img
                    fluid={service.image.localFile.childImageSharp.fluid}
                    alt={service.image.alt_text}
                  />
                </div>
              </div>
              <div className="content-wrapper">
                <div
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <div className="navigation">
                  <button
                    onClick={() => {
                      updateActiveIndex(index !== 0 ? index - 1 : maxDes)
                    }}
                  />
                  <button
                    onClick={() => {
                      updateActiveIndex(maxDes !== index ? index + 1 : 0)
                    }}
                  />
                </div>
              </div>
              <div className="button-close">
                <button
                  onClick={() => {
                    updateModleActive(false)
                  }}
                />
              </div>
            </SingleDescription>
          )
        })}
        <div
          className="model-background"
          onClick={() => {
            updateModleActive(false)
          }}
        />
      </ServicesDescriptions>
    </ServicesIconsSection>
  )
}

export default ServicesIcons
