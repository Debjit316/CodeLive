import { React, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../App.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const Container = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-basic: 0;
  flex-direction: column;
  padding: 0 8px 8px;
  width: 100vw;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState("xml"); // Default to 'xml' for HTML

  useEffect(() => {
    // Determine and set the mode based on the heading or another indicator
    switch (heading) {
      case "HTML":
        setMode("xml");
        break;
      case "CSS":
        setMode("css");
        break;
      case "JavaScript":
        setMode("javascript");
        break;
      default:
        setMode("xml"); // Default to HTML if unsure
    }
  }, [heading]);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            components="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <CodeMirror
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
          mode: mode,
        }}
      />
    </Container>
  );
};

export default Editor;
