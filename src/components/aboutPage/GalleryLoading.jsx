import React from "react"
import styled from "styled-components"
import ImageMasonry from "react-image-masonry"
import Img from "gatsby-image"
import { headlineOne } from "../../Utilities"

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

  .gallery-image {
    padding: 0.5rem;
  }

  .gallery-wrapper {
    max-width: 100rem;
    margin: 5rem auto;
  }

  ${"" /* .gallery-container {
    display: flex !important;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      display: block !important;
    }
  }

  .react-image-masonry-col {
    width: 50% !important;
    float: none !important;

    @media (min-width: 768px) {
      width: 33.33% !important;
      float: left !important;
    }
    @media (min-width: 1025px) {
      width: 33.33% !important;
    }
  } */}
`

const GalleryLoading = ({ data }) => {
  return (
    <GalleryLoadingSection>
      <div className="main-title">
        <h2>Find Us Here</h2>
      </div>
      <div className="gallery-wrapper">
        <ImageMasonry
          numCols={3}
          animate={true}
          className="gallery-container"
          containerWidth={"100%"}
          scrollable={false}
        >
          {data.acf._adw_lig_gallery.map((img, index) => {
            return (
              <div className="gallery-image">
                <Img
                  key={index}
                  fluid={img?.localFile?.childImageSharp?.fluid}
                />
              </div>
            )
          })}
        </ImageMasonry>
      </div>
    </GalleryLoadingSection>
  )
}

export default GalleryLoading
