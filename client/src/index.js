import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
