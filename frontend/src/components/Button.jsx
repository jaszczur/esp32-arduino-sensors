import styled, { css } from "styled-components";

export default styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: black;
      color: palevioletred;
    `}
`;
