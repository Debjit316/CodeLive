import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
  max-width: 100vw;
`;

const REditor = styled(Editor)`
  max-width: 33%;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <REditor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <REditor
        heading="CSS"
        icon="#"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <REditor
        heading="JavaScript"
        icon="{}"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
