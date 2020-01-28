import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { fonts, fontSizer, colors } from "../../Utilities"

const getData = graphql`
  {
    wordpressAcfOptions {
      options {
        swbtheme_site_booking_url
      }
    }
  }
`

const BookNowStyled = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 6rem;
  height: 6rem;
  background: rgba(195, 230, 215, 0.6);
  transition: all 0.3s ease-in-out;
  transform: translateX(200%);
  border-radius: 50%;
  box-shadow: 0.3rem 0.3rem 0.75rem ${colors.grey};
  overflow: hidden;
  z-index: 9999999999999;

  @media (min-width: 768px) {
    top: 5rem;
    right: 5rem;
    width: 10rem;
    height: 10rem;
  }

  &.active-button {
    transform: translateX(0%);
  }

  .inner-button {
    ${fontSizer(1.4, 1.6, 76.8, 150, 1.2)};
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    transition: all 0.3s ease-in-out;
    text-align: center;
    color: #505b61;
    font-family: ${fonts.fontPrimary};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;

    @media (min-width: 768px) {
      width: 6rem;
      height: 6rem;
    }
  }

  &:hover {
    background: rgba(106, 172, 172, 1);

    .inner-button {
      color: #fff;
    }
  }
`

const handleScrollPosition = bookBtn => {
  if (window.scrollY >= 200) {
    bookBtn.classList.add("active-button")
  } else {
    bookBtn.classList.remove("active-button")
  }
}

const addScrollEvent = bookBtn => {
  window.addEventListener("scroll", () => {
    handleScrollPosition(bookBtn)
  })
}

const BookNow = () => {
  const data = useStaticQuery(getData)
  const bookUrl = data.wordpressAcfOptions.options.swbtheme_site_booking_url
  const bookBtn = useRef(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      addScrollEvent(bookBtn.current)
    } else {
      return
    }
  }, [])

  return (
    <BookNowStyled ref={bookBtn}>
      <a
        className="inner-button"
        target="_blank"
        rel="noopener noreferrer"
        href={bookUrl}
      >
        <span>
          Book <br />
          Now
        </span>
      </a>
    </BookNowStyled>
  )
}

export default BookNow
