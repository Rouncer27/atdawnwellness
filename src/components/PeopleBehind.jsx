import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { medWrapper, headlineThreeSmall } from "../Utilities"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: false,
  infinite: true,
  speed: 250,
  autoplay: false,
  autoplaySpeed: 15000,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  dots: true,
}

const PeopleBehindSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .bioSlider {
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1025px) {
      max-width: 70rem;
    }
  }
`

const PersonImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PersonImage = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 2rem 1rem;
  border: solid 2rem #a5c0c4;
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &.navActive {
    border: solid 2rem #437a7e;
  }
`

const PersonBio = styled.div`
  h3 {
    ${headlineThreeSmall};
    color: #b7aa9b;
  }
`

const handleNavItemCLick = (item, bioSlider, navItems) => {
  navItems.forEach(item => item.classList.remove("navActive"))
  const clickIndex = item.dataset.index
  bioSlider.current.slickGoTo(clickIndex)
  item.classList.add("navActive")
}

const addClickEventForNav = (navImg, bioSlider) => {
  const navContainer = navImg.current
  const navItems = [...navContainer.querySelectorAll(".nav-image")]
  navItems.forEach(item => {
    item.addEventListener("click", () =>
      handleNavItemCLick(item, bioSlider, navItems)
    )
  })
}

const handleOnChangeSlider = navImg => {
  let activeIndex
  const navContainer = navImg.current
  const navItems = [...navContainer.querySelectorAll(".nav-image")]
  const allSlides = [...document.querySelectorAll(".single-bio")]
  allSlides.forEach(item => {
    const container = item.closest(".slick-slide")
    if (container.classList.contains("slick-active")) {
      activeIndex = container.dataset.index
    }
  })
  navItems.forEach(item => {
    item.classList.remove("navActive")
    if (item.dataset.index === activeIndex) {
      item.classList.add("navActive")
    }
  })
}

const PeopleBehind = ({ data }) => {
  const people = data.acf._adw_pbi_team
  const title = data.acf._adw_pbi_main_title
  const navImg = useRef(null)
  const bioSlider = useRef(null)

  useEffect(() => addClickEventForNav(navImg, bioSlider), [])
  useEffect(() => handleOnChangeSlider(navImg, bioSlider), [])

  return (
    <PeopleBehindSection>
      <div className="wrapper">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <PersonImageContainer ref={navImg}>
            {people.map((person, index) => {
              return (
                <PersonImage
                  className={`nav-image${index === 0 ? " navActive" : ""}`}
                  data-index={`${index}`}
                  key={index}
                >
                  <Img
                    fluid={person.image.localFile.childImageSharp.fluid}
                    alt={person.name}
                  />
                </PersonImage>
              )
            })}
          </PersonImageContainer>
          <Slider
            className="bioSlider"
            {...settings}
            ref={bioSlider}
            afterChange={() => {
              handleOnChangeSlider(navImg)
            }}
          >
            {people.map((person, index) => {
              return (
                <PersonBio className="single-bio" key={index}>
                  <div>
                    <h3>{person.name}</h3>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: person.bio }} />
                </PersonBio>
              )
            })}
          </Slider>
        </div>
      </div>
    </PeopleBehindSection>
  )
}

export default PeopleBehind
