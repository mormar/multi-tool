import styled from "styled-components";
import { roboto, whiteSmoke, shadows, gray } from "../utilities";

export const Select = styled.select`
  margin: 5px 10px 10px 10px;
  background-color: ${whiteSmoke};
  border-radius: 10px;
  font-size: 1em;
  line-height: 2.5em;
  font-weight: 400;
  border: none;
  padding: 0 10px;
  cursor: pointer;
  height: 60px;
  overflow: hidden;
  ${roboto};
  &:hover {
    ${shadows[2]};
    background-color: ${gray};
  }
`;
