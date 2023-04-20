import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupAdmin from "./pages/SignupAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/sign-up" element={<SignupAdmin />} />;
      </Routes>
    </>
  );
}

export default App;
