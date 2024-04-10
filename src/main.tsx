import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/index.tsx";
import { BrowserRouter } from "react-router-dom";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./utils/prismic.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrismicProvider>
  </React.StrictMode>
);
