import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import ScrollMagic from "scrollmagic"

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
  useEffect(() => {
    const controller = new ScrollMagic.Controller()
    const timeLine = gsap
      .timeline()
      .fromTo(
        "#ServiceItem",
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: {
            from: "center",
            each: 0.25,
          },
        }
      )
      .fromTo(".serviceLink", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
    timeLine.pause()
    new ScrollMagic.Scene({
      duration: 0,
      offset: 0,
      triggerElement: "#servicesList",
    })
      .on("enter", function(e) {
        timeLine.play()
      })
      .addTo(controller)
  }, [])
  return (
    <ServicesListStyled>
      <div id="servicesList" className="wrapper">
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
