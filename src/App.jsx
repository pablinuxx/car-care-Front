import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAdmin from "./pages/CreateAdmin";
import Services from "./pages/Services";
import SignUpCustomer from "./pages/SignUpCustomer";
import LoginCustomer from "./pages/LoginCustomer";
import Brand from "./pages/Brand";
import Vehicle from "./pages/Vehicle";
import AdminPanel from "./pages/AdminPanel";
import Contact from "./pages/Contact";
import AdminBrand from "./pages/AdminBrand";
import AdminCustomers from "./pages/AdminCustomers";
import AdminList from "./pages/AdminList";
import AdminService from "./pages/AdminService";
import AdminTypes from "./pages/AdminTypes";
import AdminVehicles from "./pages/AdminVehicles";
import AddService from "./pages/AddService";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/vehicle/:id" element={<Vehicle />} />;
        <Route path="/services" element={<Services />} />;
        <Route path="/contact" element={<Contact />} />;
        <Route path="/create/admin" element={<CreateAdmin />} />;
        <Route path="/signup" element={<SignUpCustomer />} />;
        <Route path="/login" element={<LoginCustomer />} />;
        <Route path="/:brand" element={<Brand />} />
        {/* Admin Panel  */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/brands" element={<AdminBrand />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/list" element={<AdminList />} />
        <Route path="/admin/services" element={<AdminService />} />
        <Route path="/admin/types" element={<AdminTypes />} />
        <Route path="/admin/vehicles" element={<AdminVehicles />} />
        <Route path="/create/service" element={<AddService />} />
        <Route path="*" element={<p>Error 404 page not found!</p>} />
      </Routes>
    </>
  );
}

export default App;
