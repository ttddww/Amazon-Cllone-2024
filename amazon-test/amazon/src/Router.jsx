import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import Order from "./pages/Order/Order";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;