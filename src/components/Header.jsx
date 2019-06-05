import React from "react";
import styled from "styled-components";
import Title from "./Title";

const HeaderPanel = styled.header`
  border: 1px solid #222;
  height: 150px;
  text-align:center;

`;
export default function Header() {
  return (
    <HeaderPanel>
      <Title>Header</Title>
    </HeaderPanel>
  );
}
