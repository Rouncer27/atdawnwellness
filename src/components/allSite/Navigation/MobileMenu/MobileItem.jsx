import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import MobileSubMenu from "./MobileSubMenu"

const MobileItemStyled = styled.li`
  position: relative;
  width: 100%;
  align-self: center;
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;

  a {
    display: block;
    padding: 1rem 2rem;
    background: ${props =>
      props.isCurrent ? props.theme.colorPrim : "transparent"};
    border-bottom: 0.25rem solid
      ${props =>
        props.isCurrent
          ? props.theme.colorTert
          : props => props.theme.colorPrim};
    color: ${props =>
      props.isCurrent ? props.theme.white : props => props.theme.colorPrim};

    &:hover {
      color: ${props => props.theme.colorSec};
    }
  }

  &:first-of-type a {
    border-top: 0.25rem solid
      ${props =>
        props.isCurrent
          ? props.theme.colorTert
          : props => props.theme.colorPrim};
  }
`

const MobileItem = props => {
  const {
    object_slug,
    title,
    location,
    wordpress_children,
    target,
    type,
    url,
  } = props
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent = currentPageSlug === location ? true : false

  const isServicesPage = object_slug === "services"

  return (
    <MobileItemStyled isCurrent={isCurrent}>
      {type === "custom" ? (
        <a target={target} href={url}>
          <span>{title}</span>
        </a>
      ) : (
        <Link to={object_slug === "home" ? "/" : `/${object_slug}`}>
          {title}
        </Link>
      )}

      {wordpress_children !== null &&
        wordpress_children !== undefined &&
        wordpress_children.length > 0 && (
          <MobileSubMenu
            items={wordpress_children}
            currentPageSlug={currentPageSlug}
            location={location}
          />
        )}

      {isServicesPage && (
        <MobileSubMenu
          items={[
            {
              title: "Massage Services",
              object_slug: "services/massage-services",
              isSubCurrent: location === "/services/massage-services",
            },
            {
              title: "Crainosacral Therapy",
              object_slug: "services/crainosacral-therapy",
              isSubCurrent: location === "/services/crainosacral-therapy",
            },
            {
              title: "Osteopath",
              object_slug: "services/osteopath",
              isSubCurrent: location === "/services/osteopath",
            },
            {
              title: "Lymphatic Drainage",
              object_slug: "services/lymphatic-drainage",
              isSubCurrent: location === "/services/lymphatic-drainage",
            },
            {
              title: "Acupuncture",
              object_slug: "services/acupuncture",
              isSubCurrent: location === "/services/acupuncture",
            },
            {
              title: "Personal Trainer",
              object_slug: "services/personal-trainer",
              isSubCurrent: location === "/services/personal-trainer",
            },
            {
              title: "Physiotherapy",
              object_slug: "services/physiotherapy",
              isSubCurrent: location === "/services/physiotherapy",
            },
            {
              title: "Counseling",
              object_slug: "services/counseling",
              isSubCurrent: location === "/services/counseling",
            },
            {
              title: "Herbology",
              object_slug: "services/herbology",
              isSubCurrent: location === "/services/herbology",
            },
          ]}
          currentPageSlug={currentPageSlug}
          location={location}
        />
      )}
    </MobileItemStyled>
  )
}

export default MobileItem
