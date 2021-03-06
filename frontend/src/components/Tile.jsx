import styled from "styled-components";

export default styled.div`
  min-width: 200px;
  padding: 16px;
  margin: 16px;
  overflow: auto;
  border-radius: 8px;
  background: linear-gradient(45deg, #b24960 30%, #b2643a 90%);
  color: black;
  flex-grow: ${(props) => props.size || 1};
`;
