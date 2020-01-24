import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PlantThree = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          plantThree: file(relativePath: { eq: "ADW-realplant-3.jpg" }) {
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
              fluid={data.plantThree.childImageSharp.fluid}
              alt="At Dawn Wellness"
            />
          </>
        )
      }}
    />
  )
}

export default PlantThree
