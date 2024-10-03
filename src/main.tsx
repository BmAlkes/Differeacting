import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import "./i18n/index.tsx";
import { BrowserRouter } from "react-router-dom";

import { PrismicProvider } from "@prismicio/react";
import { Analytics } from "@vercel/analytics/react";

import { client } from "./utils/prismic.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {  HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <HelmetProvider>
    <PrismicProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>  
          <App />
          <ReactQueryDevtools />
          <ToastContainer />
          <Analytics />
        </BrowserRouter>
      </QueryClientProvider>
    </PrismicProvider>
     </HelmetProvider>
  </React.StrictMode>
);
