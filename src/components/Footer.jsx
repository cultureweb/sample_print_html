import React from "react";
import Title from "./Title";
import styled from "styled-components";

const FooterPanel = styled.footer`
  border: 1px solid #222;
  height: 150px;
  text-align: center;
`;
// const Title = styled.h1``

export default function Footer() {
  return (
    <FooterPanel>
      <Title>Footer</Title>
    </FooterPanel>
  );
}
