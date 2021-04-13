import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./Components/App";
import { AuthProvider } from "./providers/AuthContext";

import { ChakraProvider } from "@chakra-ui/react";

const url =
  window.location.origin === "http://localhost:3000"
    ? "http://localhost:5000"
    : window.location.origin;
axios.defaults.baseURL = url;

ReactDOM.render(
  <ChakraProvider>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
