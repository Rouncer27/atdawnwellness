import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
  medWrapper,
  headlineThreeSmall,
  bodyCopy,
  headlineOne,
  colors,
  headlineTwo,
} from "../../Utilities"

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
  dots: false,
  adaptiveHeight: true,
}

const PeopleBehindSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .main-title {
    width: 100%;
    text-align: center;

    h2 {
      ${headlineOne};
      color: #437a7e;
    }

    h3 {
      ${headlineTwo};
      color: #437a7e;
    }
  }

  .bioSlider {
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 60rem;
    }

    @media (min-width: 1025px) {
      max-width: 70rem;
    }

    .slick-current {
      z-index: 99999999999 !important;
    }
  }
`

const PersonImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
  }
  @media (min-width: 1025px) {
  }
`

const PersonImage = styled.div`
  width: 12vw;
  height: 12vw;
  margin: 2rem 1rem;
  border: solid 0.5vw #a5c0c4;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 15vw;
    height: 15vw;
    border: solid 0.75vw #a5c0c4;
  }
  @media (min-width: 1025px) {
    width: 15vw;
    max-width: 20rem;
    height: 15vw;
    max-height: 20rem;
  }

  &:hover {
    cursor: pointer;
  }

  &.navActive {
    border: solid 1vw #437a7e;
  }
`

const PersonBio = styled.div`
  width: 100%;
  h3 {
    ${headlineThreeSmall};
    color: #b7aa9b;
  }

  .bio-body {
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
  }

  .sub-title-cred {
    ${bodyCopy};
    margin-bottom: 1rem;
    color: #81a5a3;
    font-weight: bold;
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
  const navImgMassage = useRef(null)
  const bioSliderMassage = useRef(null)

  useEffect(() => {
    addClickEventForNav(navImgMassage, bioSliderMassage)
    addClickEventForNav(navImg, bioSlider)
  }, [])
  useEffect(() => {
    handleOnChangeSlider(navImgMassage, bioSliderMassage)
    handleOnChangeSlider(navImg, bioSlider)
  }, [])

  // ✅ Filter for massage team
  const massageTeam = people.filter(person => person.team === "massage")

  // ✅ Filter for specialty team
  const specialtyTeam = people.filter(person => person.team === "specialty")

  return (
    <PeopleBehindSection>
      <div className="wrapper">
        <div className="main-title">
          <h2>{title}</h2>
          <h3>Massage Team</h3>
        </div>
        <div>
          <PersonImageContainer ref={navImgMassage}>
            {massageTeam.map((person, index) => {
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
            ref={bioSliderMassage}
            afterChange={() => {
              handleOnChangeSlider(navImg)
            }}
          >
            {massageTeam.map((person, index) => {
              return (
                <PersonBio className="single-bio" key={index}>
                  <div>
                    <h3>{person.name}</h3>
                    {person.sub_title && (
                      <p className="sub-title-cred">{person.sub_title}</p>
                    )}
                  </div>
                  <div
                    className="bio-body"
                    dangerouslySetInnerHTML={{ __html: person.bio }}
                  />
                </PersonBio>
              )
            })}
          </Slider>

          <div className="wrapper">
            <div className="main-title">
              <h3>Specialty Service Team</h3>
            </div>
          </div>
          <PersonImageContainer ref={navImg}>
            {specialtyTeam.map((person, index) => {
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
            {specialtyTeam.map((person, index) => {
              return (
                <PersonBio className="single-bio" key={index}>
                  <div>
                    <h3>{person.name}</h3>
                    {person.sub_title && (
                      <p className="sub-title-cred">{person.sub_title}</p>
                    )}
                  </div>
                  <div
                    className="bio-body"
                    dangerouslySetInnerHTML={{ __html: person.bio }}
                  />
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
