import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts/:postHandle" element={<SinglePost />} />
      </Routes>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
