import { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  //* forwarding the children elements from the DataProvider tag
  //* because, in App.jsx, the DataProvider tag wraps the <Home/> tag, hence it passes the {children}
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
