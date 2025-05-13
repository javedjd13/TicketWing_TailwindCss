import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
const Login = React.lazy(() => import("../pages/Login"));
import App from "../App";
import Login_One from "../components/Login_One";
import Login_Page from "../pages/LoginPage";
import Login_Two from "../components/Login_Two";
import DummyData from "../pages/DummyData";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* 123 */}

          <Route path="/login_page" element={<Login_Page />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* 456 */}
          <Route path="/login_one" element={<Login_One />} />
          <Route path="/login_two" element={<Login_Two />} />
          <Route path="/dummydata" element={<DummyData />} />
          {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading Login Page...</div>}>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
