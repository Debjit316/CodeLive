import React from "react";
import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Result = () => {
  const [src, setSrc] = useState("");

  const { html, css, js } = useContext(DataContext);

  const srcCode = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `;

  //* setting a timer for changes in html,css,js.
  //* updates the DOM after 250 ms
  //* clearing the timeout by return statement, during unmounting of the element from the DOM
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Box>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        width="100%"
        height="230px"
      />
    </Box>
  );
};

export default Result;
