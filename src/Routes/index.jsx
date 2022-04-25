import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layaout from "../Components/Layaout";
import Clients from "../Views/Clients";
import NewClient from "../Views/Clients/New";
import EditClient from "../Views/Clients/Edit";
import ViewClient from "../Views/Clients/View";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/clients" element={<Layaout />}>
          <Route index element={<Clients />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ViewClient />} />
        </Route>
      </Routes>
    </Router>
  );
}
