// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import ReactDom from "react-dom";

import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDom.render(
  // <StrictMode>
  // </StrictMode>
  <App />,
  document.getElementById("root")
);
