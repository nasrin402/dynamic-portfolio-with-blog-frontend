import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/authContext/AuthContext";
import "react-toastify/dist/ReactToastify.min.css";
import { BlogContext } from "./context/blogContext/blogContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <BlogContext>
        <App />
      </BlogContext>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
