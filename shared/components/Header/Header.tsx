import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  border: 1px solid black;
  height: 56px;
`;

const Header: FunctionComponent = () => {
  return (
    <>
      <Root>хедер</Root>
    </>
  );
};

export default Header;
