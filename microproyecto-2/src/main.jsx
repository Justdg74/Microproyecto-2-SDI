import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import {
  HOME_URL,
  LIST_URL,
  FAVORITES_URL,
  PROFILE_URL,
  REGISTER_URL,
} from "./constants/urls.js";

import { HomePage } from "./pages/HomePage/HomePage";
import { MovieList } from "./pages/MovieListPage/MovieList";
import { RegisterPage } from "./pages/RegisterPage/Register.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Layout } from "./layout/Layout.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={LIST_URL} element={<MovieList />} />
          <Route
            path={REGISTER_URL}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route path="/adminview" element={<h1>ADMIN VIEW</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
