import React from "react";
import { Link as a } from "react-router-dom";
import styled from "styled-components";

const Link = styled(a)`
  color: red;
`;

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;
