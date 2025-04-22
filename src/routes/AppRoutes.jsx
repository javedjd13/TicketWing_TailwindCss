import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
const Login = React.lazy(() => import("../components/Login"));
import App from "../App";
import Login_One from "../components/Login_One";
import Login_Two from "../components/Login_Two";
import DummyData from "../pages/DummyData";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/login_one" element={<Login_One />} />
          <Route path="/login_two" element={<Login_Two />} />
          <Route path="/dummydata" element={<DummyData />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="login"
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
