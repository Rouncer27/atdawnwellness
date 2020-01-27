import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  standardWrapper,
  bodyCopy,
  headlineFour,
  colors,
  fontSizer,
  fonts,
} from "../Utilities"

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

const TestimonialsSection = styled.section`
  position: relative;
  padding: 3rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .testTitle {
    width: 100%;
    text-align: center;

    h2 {
      ${headlineFour};
      color: ${colors.colorPrimary};
    }

    &::before {
      ${fontSizer(10, 18, 76.8, 160, 8)}
      display: block;
      position: absolute;
      top: -2rem;
      right: 0;
      left: 0;
      color: #d8e3e9;
      font-family: ${fonts.fontSecondary};
      text-align: center;
      content: "“";
    }

    @media (min-width: 768px) {
      &::before {
        top: -4rem;
      }
    }

    @media (min-width: 1025px) {
      &::before {
        top: -8rem;
      }
    }
  }

  .testSlider {
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1025px) {
      max-width: 70rem;
    }

    ul.slick-dots {
      position: absolute;
      right: 0;
      bottom: -1.5rem;
      left: 0;
      width: 100%;

      li {
        width: 3rem;
        height: 3rem;
        button {
          width: 3rem;
          height: 3rem;

          &::before {
            display: block;
            width: 3rem;
            height: 3rem;
            font-size: 1.4rem;
            line-height: 2.25;
            color: ${colors.colorSecondary};
            opacity: 0.9;
          }
        }
      }

      li.slick-active {
        button {
          &::before {
            color: ${colors.colorTertiary};
          }
        }
      }
    }
  }
`

const TestSlide = styled.div`
  width: 100%;
  text-align: center;

  .test-body {
    p {
      ${bodyCopy};
      color: #505b61;
    }
  }

  .test-author {
    p {
      ${bodyCopy};
      color: #a5c0c4;
      text-transform: uppercase;
    }
  }
`

const Testimonials = ({ data }) => {
  return (
    <TestimonialsSection>
      <div className="wrapper">
        <div className="testTitle">
          <h2>Client Testimonial</h2>
        </div>
        <Slider className="testSlider" {...settings}>
          {data.edges.map((test, index) => {
            return (
              <TestSlide key={index}>
                <div
                  className="test-body"
                  dangerouslySetInnerHTML={{
                    __html: test.node.acf._adw_tpt_testimonial_body,
                  }}
                />
                <div className="test-author">
                  <p>{test.node.acf._adw_tpt_testimonial_name}</p>
                </div>
              </TestSlide>
            )
          })}
        </Slider>
      </div>
    </TestimonialsSection>
  )
}

export default Testimonials
