import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { shadows, darkBlue, roboto, white } from "../utilities";

const BUTTON_MODIFIERS = {
  submit: () => `
    ${roboto};
    font-weight: 600;
    border-radius: 10px;
    line-height: 2.8125rem;
    margin: 10px 10px;
    `
};

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: ${white};
  font-size: 2rem;
  transition: 0.3s ease box-shadow background;
  background: ${darkBlue};
  ${shadows[1]};
  &:hover {
    ${shadows[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
