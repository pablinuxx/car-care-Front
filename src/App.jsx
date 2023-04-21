import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupAdmin from "./pages/SignupAdmin";
import Services from "./pages/Services";
import Brand from "./pages/Brand";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/services" element={<Services />} />;
        <Route path="/sign-up" element={<SignupAdmin />} />;
        <Route path="/:brand" element={<Brand />} />;

      </Routes>
    </>
  );
}

export default App;
