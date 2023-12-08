import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/SigninForm";

import Home from "./_root/pages/Home";
import EventDetail from "./_root/pages/EventDetail.jsx";
import CategoryTiket from "./_root/pages/CategoryTiket.jsx";
import OrderSummary from "./_root/pages/OrderSummary.jsx";
import OrderPayment from "./_root/pages/OrderPayment.jsx";
import Orders from "./_root/pages/Orders.jsx";
import OrderDetail from "./_root/pages/OrderDetail.jsx";

import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SigninForm />} />

        <Route path="/id" element={<EventDetail />} />
        <Route path="/id/category" element={<CategoryTiket />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/id" element={<OrderDetail />} />
        <Route path="/orders/summary" element={<OrderSummary />} />
        <Route path="/orders/payment" element={<OrderPayment />} />
      </Routes>
    </main>
  );
}

export default App;
