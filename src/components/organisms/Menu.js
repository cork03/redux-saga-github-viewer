import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div``;
const Bar = styled.i`
  cursor: pointer;
`;
const Menu = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
    document.removeEventListener("click", close);
  };
  const Open = () => {
    setOpen(true);
    document.addEventListener("click", close);
  };
  return (
    <Container>
      <Bar className="fa fa-bars" onClick={Open}></Bar>
      <Item open={open} />
    </Container>
  );
};

export default Menu;
