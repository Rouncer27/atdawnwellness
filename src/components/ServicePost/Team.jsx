import React from "react"
import styled from "styled-components"
import {
  bodyCopy,
  colors,
  fonts,
  headlineFive,
  headlineOne,
  medWrapper,
} from "../../Utilities"

const Team = ({ data }) => {
  return (
    <StyledSection>
      <div className="team-wrapper">
        <div className="team-title">
          <h2>{data.acf.about_team_title}</h2>
        </div>
        <div>
          <div
            className="team-content"
            dangerouslySetInnerHTML={{ __html: data.acf.about_team_content }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2rem 0;
  background-color: rgba(80, 115, 120, 0.25);

  .team-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
  }

  .team-title {
    width: 100%;

    h2 {
      ${headlineFive};
      color: ${colors.colorPrimary};
    }
  }

  .team-content {
    width: 100%;

    p {
      ${bodyCopy};
    }

    a {
      ${bodyCopy};
      font-weight: 800;
    }

    ul {
      margin-bottom: 2.5rem;

      li {
        ${bodyCopy};
        position: relative;
        margin-bottom: 0.75rem;
        padding-left: 2rem;
        font-size: 1.6rem;

        &::before {
          font-family: ${fonts.fontAwesome};
          position: absolute;
          top: 0.9rem;
          left: 0;
          padding-right: 0.5em;
          color: ${colors.colorPrimary};
          font-size: 1rem;
          content: "\f111";
        }
      }
    }
  }
`

export default Team
