import React from "react";
import Header from "./Header";
import Code from "./Code";
import Result from "./Result";
import { Box, styled } from "@mui/material";

const Parent = styled(Box)`
  width: 100vw;
`;

const Home = () => {
  return (
    <Parent>
      <Header />
      <Code />
      <Result />
    </Parent>
  );
};

export default Home;
