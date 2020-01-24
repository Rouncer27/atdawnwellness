import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PlantFive = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          plantFive: file(relativePath: { eq: "ADW-realplant-3.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Img
              fluid={data.plantFive.childImageSharp.fluid}
              alt="At Dawn Wellness"
            />
          </>
        )
      }}
    />
  )
}

export default PlantFive
