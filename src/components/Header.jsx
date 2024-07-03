import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import logo from "../assets/codebeat.svg";

const Container = styled(AppBar)`
  background: #060606;
`;

const Tool = styled(Toolbar)`
  display: flex;
  gap: 2vw;
`;

const Header = () => {
  return (
    <Container position="static">
      <Tool>
        <img src={logo} alt="logo" style={{ width: 40 }} />
        <h1>
          Code <span style={{ color: "#1ABE07 " }}>Live</span>
        </h1>
      </Tool>
    </Container>
  );
};

export default Header;
