import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function RoutesApp() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
}
