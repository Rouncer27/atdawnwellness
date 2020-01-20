import styled from "styled-components"

const MobileButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0.25rem;
  left: 0.25rem;
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto;
  padding: 0;
  background: ${props => props.theme.colorAcc};
  border: 0.1rem solid ${props => props.theme.white};
  box-shadow: 0.25rem 0.25rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 99999999;

  &::before,
  &::after {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    width: 80%;
    height: 0.2rem;
    margin: 0 auto;
    transform: rotate(0);
    transform-origin: center center;
    transition: all 0.2s ease;
    background-color: ${props => props.theme.white};
    content: "";
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: block;
  }
`

export default MobileButton
