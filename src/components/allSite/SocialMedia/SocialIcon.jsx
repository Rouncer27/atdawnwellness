import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHouzz,
  FaYoutube,
} from "react-icons/fa"
import styled from "styled-components"
import { colors } from "../../../Utilities"

const SocialIconStyled = styled.div`
  align-self: center;
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 1rem;

  &:first-of-type {
    margin-left: 0;
  }

  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.7rem;
    color: ${colors.colorSecondary};

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .social-icon__facebook {
    &:hover {
      background: #3b5998;
      border-color: #3b5998;
      color: ${colors.white};
    }
  }

  .social-icon__twitter {
    &:hover {
      background: #1da1f2;
      border-color: #1da1f2;
      color: ${colors.white};
    }
  }

  .social-icon__instagram {
    &:hover {
      background: #405de6;
      border-color: #405de6;
      color: ${colors.white};
    }
  }

  .social-icon__linkedin {
    &:hover {
      background: #0077b5;
      border-color: #0077b5;
      color: ${colors.white};
    }
  }
  .social-icon__houzz {
    &:hover {
      background: #73ba37;
      border-color: #73ba37;
      color: ${colors.white};
    }
  }

  .social-icon__youtube {
    &:hover {
      background: #ff0000;
      border-color: #ff0000;
      color: ${colors.white};
    }
  }
`

const SocialIcon = ({ icon }) => {
  const iconDisplay =
    icon.social_type === "facebook" ? (
      <FaFacebookF />
    ) : icon.social_type === "twitter" ? (
      <FaTwitter />
    ) : icon.social_type === "instagram" ? (
      <FaInstagram />
    ) : icon.social_type === "linkedin" ? (
      <FaLinkedinIn />
    ) : icon.social_type === "houzz" ? (
      <FaHouzz />
    ) : icon.social_type === "youtube" ? (
      <FaYoutube />
    ) : (
      false
    )
  return (
    <SocialIconStyled>
      <a
        className={`social-icon__${icon.social_type}`}
        target="_blank"
        rel="noopener noreferrer"
        href={icon.social_url}
      >
        {iconDisplay}
      </a>
    </SocialIconStyled>
  )
}

export default SocialIcon
