import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Login1 from "../Pages/Login1";
import SignUp from "../Pages/Signup";
import Checkout from "../Pages/Checkout";

import AdminDashboard from "../Pages/AdminDashboard";
import NewPassword from "../Pages/NewPassword";
import Cart from "../Components/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}></Route>
        <Route path="/login" element={<Login1 />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/newpass" element={<NewPassword />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
