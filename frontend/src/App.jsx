import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/SigninForm";

import Home from "./_root/pages/Home";
import EventDetail from "./_root/pages/EventDetail.jsx";
import CategoryTiket from "./_root/pages/CategoryTiket.jsx";

import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/id" element={<EventDetail />} />
        <Route path="/:id/category" element={<CategoryTiket />} />
      </Routes>
    </main>
  );
}

export default App;
