import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAdmin from "./pages/adminPanelPage/CreateAdmin";
import Services from "./pages/Services";
import SignUpCustomer from "./pages/SignUpCustomer";
import LoginCustomer from "./pages/LoginCustomer";
import Brand from "./pages/Brand";
import Vehicle from "./pages/Vehicle";
import AdminPanel from "./pages/adminPanelPage/AdminPanel";
import Contact from "./pages/Contact";
import AdminBrand from "./pages/adminPanelPage/AdminBrand";
import AdminCustomers from "./pages/adminPanelPage/AdminCustomers";
import AdminList from "./pages/adminPanelPage/AdminList";
import AdminService from "./pages/adminPanelPage/AdminService";
import AdminTypes from "./pages/adminPanelPage/AdminTypes";
import AdminVehicles from "./pages/adminPanelPage/AdminVehicles";
import AddService from "./pages/adminPanelPage/AddService";
import EditService from "./pages/adminPanelPage/EditService";
import AddCustomer from "./pages/adminPanelPage/AddCustomer";
import EditCustomer from "./pages/adminPanelPage/EditCustomer";

function App() {
  return (
    <>
      <Routes>
        {/* Public page  */}
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
        <Route path="admin/add/services" element={<AddService />} />
        <Route path="admin/edit/services/:id" element={<EditService />} />
        <Route path="/admin/add/customers" element={<AddCustomer />} />
        <Route path="/admin/edit/customers/:id" element={<EditCustomer />} />
        {/* Page not found */}
        <Route path="*" element={<p>Error 404 page not found!</p>} />
      </Routes>
    </>
  );
}

export default App;
