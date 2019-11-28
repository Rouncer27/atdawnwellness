import React from "react"
import styled from "styled-components"

import SocialIcon from "./SocialIcon"

const SocialFollowStyled = styled.div`
  align-self: center;
  padding: 0;

  .wrapper {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const SocialFollow = props => {
  const { icons } = props
  return (
    <SocialFollowStyled>
      <div className="wrapper">
        {icons.map((icon, index) => {
          return <SocialIcon key={index} icon={icon} />
        })}
      </div>
    </SocialFollowStyled>
  )
}

export default SocialFollow
