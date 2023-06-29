import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EmployeeListePage from "../pages/EmployeeListPage";

export default function RoutesApp() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/employee-list" element={<EmployeeListePage />} />
      </Routes>
    </React.Fragment>
  );
}
