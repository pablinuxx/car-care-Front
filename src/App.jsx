import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAdmin from "./pages/adminPanelPage/AddAdmin";
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
import EditAdmin from "./pages/adminPanelPage/EditAdmin";
import AddAdmin from "./pages/adminPanelPage/AddAdmin";
import AddVehicle from "./pages/adminPanelPage/AddVehicle";
import EditVehicle from "./pages/adminPanelPage/EditVehicle";
import EditBrand from "./pages/adminPanelPage/EditBrand";
import AddBrand from "./pages/adminPanelPage/AddBrand";
import AddTypes from "./pages/adminPanelPage/AddTypes";
import EditType from "./pages/adminPanelPage/EditType";
import AdminLogin from "./pages/AdminLogin";
import BookingService from "./pages/BookingService";
import PurchaseOrder from "./pages/PurchaseOrder";
import BookingTestDrive from "./pages/BookingTestDrive";
import Error from "./pages/Error";
import Reservation from "./pages/Reservation";
import AdminBookings from "./pages/adminPanelPage/AdminBookings";
import ReservationIdDetails from "./pages/ReservationIdDetails";
import AllVehicles from "./pages/AllVehicles";

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
        <Route path="/brands/:name" element={<Brand />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/booking/testdrive" element={<BookingTestDrive />} />
        <Route path="/booking/service" element={<BookingService />} />
        <Route path="/thanks" element={<PurchaseOrder />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/reservations/:id" element={<ReservationIdDetails />} />
        <Route path="/total/vehicles" element={<AllVehicles />} />
        {/* Admin  */}
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
        <Route path="/admin/edit/admin/:id" element={<EditAdmin />} />
        <Route path="/admin/add/admin" element={<AddAdmin />} />
        <Route path="/admin/add/vehicles" element={<AddVehicle />} />
        <Route path="/admin/edit/vehicles/:id" element={<EditVehicle />} />
        <Route path="/admin/edit/brands/:id" element={<EditBrand />} />
        <Route path="/admin/add/brands" element={<AddBrand />} />
        <Route path="/admin/add/types" element={<AddTypes />} />
        <Route path="/admin/edit/types/:id" element={<EditType />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        {/* Page not found */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
