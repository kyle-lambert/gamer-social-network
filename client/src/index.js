import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";

import { AuthContextProvider } from "./contexts/AuthContext";
import { AlertContextProvider } from "./contexts/AlertContext";

import App from "./components/app/app";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
