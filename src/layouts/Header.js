import React from "react";
import styled from "styled-components";
import { blue, fixed, roboto, shadows, white } from "../utilities";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h2>Multi tool</h2>
      <div>
        <Link className="item" to="/">
          Investment Calculator
        </Link>
      </div>
    </header>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: ${blue};
  padding: 10px 5%;
  width: 100%;
  color: ${white};
  ${roboto};
  ${fixed()};
  ${shadows[2]};
  .item {
    padding: 0px 10px;
    text-decoration: none;
    color: ${white};
    font-size: 1.25em;
    &:hover {
      color: #000;
    }
  }
`;
