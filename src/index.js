import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/HOME/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import OurCourses from "./components/OurCourses/OurCourses";
import ContectUs from "./components/contectUs/ContectUs";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
