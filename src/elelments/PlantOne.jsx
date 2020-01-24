import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PlantOne = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          plantOne: file(relativePath: { eq: "ADW-realplant-1.jpg" }) {
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
              fluid={data.plantOne.childImageSharp.fluid}
              alt="At Dawn Wellness"
            />
          </>
        )
      }}
    />
  )
}

export default PlantOne
