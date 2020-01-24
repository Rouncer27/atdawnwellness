import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PlantTwo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          plantTwo: file(relativePath: { eq: "ADW-realplant-2.png" }) {
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
              fluid={data.plantTwo.childImageSharp.fluid}
              alt="At Dawn Wellness"
            />
          </>
        )
      }}
    />
  )
}

export default PlantTwo
