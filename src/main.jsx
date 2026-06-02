/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import Context from "./components/Dashboard/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Context>
        <App />
      </Context>
    </HashRouter>
  </StrictMode>,
);
