import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { medWrapper } from "../Utilities"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 15000,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
}

const PeopleBehindSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .testSlider {
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
`

const PeopleBehind = ({ data }) => {
  const people = data.acf._adw_pbi_team
  const title = data.acf._adw_pbi_main_title

  return (
    <PeopleBehindSection>
      <div className="wrapper">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <PersonImageContainer>
            {people.map((person, index) => {
              return (
                <PersonImage key={index}>
                  <Img
                    fluid={person.image.localFile.childImageSharp.fluid}
                    alt={person.name}
                  />
                </PersonImage>
              )
            })}
          </PersonImageContainer>
          <Slider className="testSlider" {...settings}>
            {people.map((person, index) => {
              return (
                <div key={index}>
                  <div>{person.name}</div>
                  <div dangerouslySetInnerHTML={{ __html: person.bio }} />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </PeopleBehindSection>
  )
}

export default PeopleBehind
