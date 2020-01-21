import React from "react"
import ImageMasonry from "react-image-masonry"
import Img from "gatsby-image"

const GalleryLoading = ({ data }) => {
  console.log(data)

  const sourceUrls = data.acf._adw_lig_gallery.map(img => img.source_url)
  console.log(sourceUrls)

  return (
    <div>
      <ImageMasonry
        numCols={3}
        animate={true}
        className="gallery-container"
        containerWidth={"1000px"}
        scrollable={false}
      >
        {data.acf._adw_lig_gallery.map((img, index) => {
          return <Img key={index} fluid={img.localFile.childImageSharp.fluid} />
        })}
      </ImageMasonry>
    </div>
  )
}

export default GalleryLoading
