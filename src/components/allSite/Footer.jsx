import React from "react"

const Footer = () => {
  const swbCred = true
  return (
    <div>
      <div className="footerCopy">
        <p>
          Copyright © {new Date().getFullYear()} I Know A Guy. Made in Airdrie.
          Designed and developed by{" "}
          {swbCred === "yes" && (
            <a href="https://switchbackcreative.ca">Switchback Creative Inc.</a>
          )}
          . Built with ♡ and <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </p>
      </div>
    </div>
  )
}

export default Footer
