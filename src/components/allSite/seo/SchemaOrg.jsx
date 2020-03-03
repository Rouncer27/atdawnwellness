import React from "react"
import Helmet from "react-helmet"

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    logo,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://atdawnwellness.ca/",
        name: "At Dawn Wellness",
        alternateName: "At Dawn Wellness",
        logo: logo,
        telephone: "403-809-9428",
        email: "dawnie@atdawnwellness.ca",
        sameAs: [
          "https://www.facebook.com/atdawnwellness/",
          "https://www.instagram.com/atdawnwellness/",
        ],
        url: "https://atdawnwellness.ca/",
        image: image,
        priceRange: "$$",
        description: description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "#4 Jensen Heights Ct NE",
          addressLocality: "Airdrie",
          addressRegion: "Alberta",
          postalCode: "T4B 1P7",
          addressCountry: "CA",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "9:00am",
            closes: "3:30pm",
            opens: "4:00pm",
            closes: "8:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday"],
            opens: "9:00am",
            closes: "3:30pm",
            opens: "5:00pm",
            closes: "9:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday"],
            opens: "9:00am",
            closes: "3:30pm",
            opens: "5:00pm",
            closes: "9:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "9:30am",
            closes: "3:30pm",
            opens: "5:00pm",
            closes: "9:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "9:00am",
            closes: "1:30pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "9:00am",
            closes: "2:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "",
            closes: "",
          },
        ],
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
