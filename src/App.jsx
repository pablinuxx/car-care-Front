import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAdmin from "./pages/CreateAdmin";
import Services from "./pages/Services";
import SignUpCustomer from "./pages/SignUpCustomer";
import LoginCustomer from "./pages/LoginCustomer";
import Brand from "./pages/Brand";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/services" element={<Services />} />;
        <Route path="/create/admin" element={<CreateAdmin />} />;
        <Route path="/signup" element={<SignUpCustomer />} />;
        <Route path="/login" element={<LoginCustomer />} />;
        <Route path="/:brand" element={<Brand />} />
        <Route path="*" element={<p>Error 404 page not found!</p>} />
      </Routes>
    </>
  );
}

export default App;
