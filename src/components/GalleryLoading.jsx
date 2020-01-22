import React from "react"
import styled from "styled-components"
import ImageMasonry from "react-image-masonry"
import Img from "gatsby-image"
import { headlineOne } from "../Utilities"

const GalleryLoadingSection = styled.section`
  padding-bottom: 10rem;

  .main-title {
    width: 100%;
    text-align: center;
    h2 {
      ${headlineOne};
      color: #437a7e;
    }
  }
`

const GalleryLoading = ({ data }) => {
  return (
    <GalleryLoadingSection>
      <div className="main-title">
        <h2>Find Us Here</h2>
      </div>
      <div>
        <ImageMasonry
          numCols={3}
          animate={true}
          className="gallery-container"
          containerWidth={"1000px"}
          scrollable={false}
        >
          {data.acf._adw_lig_gallery.map((img, index) => {
            return (
              <Img key={index} fluid={img.localFile.childImageSharp.fluid} />
            )
          })}
        </ImageMasonry>
      </div>
    </GalleryLoadingSection>
  )
}

export default GalleryLoading
