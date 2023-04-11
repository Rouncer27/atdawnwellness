import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import gsap from "gsap"
import ScrollMagic from "scrollmagic"
import { medWrapper, headlineTwo, bodyCopy, colors } from "../../Utilities"

import StonesSvg from "../../elelments/svgs/StonesSvg"
import PelvicSvg from "../../elelments/svgs/PelvicSvg"
import NaturopathSvg from "../../elelments/svgs/NaturopathSvg"

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
    position: relative;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 1rem 7.5rem;
    }

    h2 {
      ${headlineTwo};
      margin: 0;
      color: #437a7e;
    }

    p,
    a {
      ${bodyCopy};
      color: #505b61;
    }

    a {
      text-decoration: underline;

      &:hover {
        color: ${colors.colorSecondary};
      }
    }

    .icon-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.25;
      z-index: -1;

      svg {
        display: block;
        max-width: 40rem;
        margin: auto;
      }
    }
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

const ServicesDes = ({ data }) => {
  const allServices = data.acf._adw_ser_services

  useEffect(() => {
    const controller1 = new ScrollMagic.Controller()
    const timeLine1 = gsap
      .timeline()
      .add("start")
      .fromTo(
        "#singleService-1 .content",
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0, duration: 1 },
        "start"
      )
      .fromTo(
        "#singleService-1 .image",
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, duration: 1 },
        "start"
      )

    timeLine1.pause()
    new ScrollMagic.Scene({
      duration: 0,
      offset: 0,
      triggerElement: "#singleService-1",
    })
      .on("enter", function(e) {
        timeLine1.play()
      })
      .addTo(controller1)

    const controller2 = new ScrollMagic.Controller()
    const timeLine2 = gsap
      .timeline()
      .add("start")
      .fromTo(
        "#singleService-2 .content",
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, duration: 1 },
        "start"
      )
      .fromTo(
        "#singleService-2 .image",
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0, duration: 1 },
        "start"
      )

    timeLine2.pause()
    new ScrollMagic.Scene({
      duration: 0,
      offset: 0,
      triggerElement: "#singleService-2",
    })
      .on("enter", function(e) {
        timeLine2.play()
      })
      .addTo(controller2)

    const controller3 = new ScrollMagic.Controller()
    const timeLine3 = gsap
      .timeline()
      .add("start")
      .fromTo(
        "#singleService-3 .content",
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0, duration: 1 },
        "start"
      )
      .fromTo(
        "#singleService-3 .image",
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, duration: 1 },
        "start"
      )

    timeLine3.pause()
    new ScrollMagic.Scene({
      duration: 0,
      offset: 0,
      triggerElement: "#singleService-3",
    })
      .on("enter", function(e) {
        timeLine3.play()
      })
      .addTo(controller3)
  }, [])

  return (
    <ServicesDesSection id="servicesDes">
      <div className="wrapper">
        <div>
          {allServices.map((service, index) => {
            let icon = false

            if (service.icon === "stones") {
              icon = <StonesSvg />
            } else if (service.icon === "pelvic") {
              icon = <PelvicSvg />
            } else if (service.icon === "herb") {
              icon = <NaturopathSvg />
            }

            return (
              <SingleService id={`singleService-${index + 1}`} key={index}>
                <div className="content">
                  <div>
                    <h2>{service.title}</h2>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                  {icon && <div className="icon-background">{icon}</div>}
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
