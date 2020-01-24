import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PlantFour = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          plantFour: file(relativePath: { eq: "ADW-realplant-1.png" }) {
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
              fluid={data.plantFour.childImageSharp.fluid}
              alt="At Dawn Wellness"
            />
          </>
        )
      }}
    />
  )
}

export default PlantFour
