import React from "react";
import styled from "styled-components";
import { blue, fixed, roboto, shadows, white  } from "../utilities";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h2>Multi tool</h2>
    </header>
  );
};

export default styled(Header)`
  background: ${blue};
  padding: 10px 5%;
  width: 100%;
  color: ${white};
  ${roboto};
  ${fixed()};
  ${shadows[2]};
`;
