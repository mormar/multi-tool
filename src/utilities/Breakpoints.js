import { css } from "styled-components";

const size = {
  phone: 600,
  tablet: 900,
  desktop: 1200,

};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc; // accumulator
}, {});