import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApprovedFormulations from "./pages/ApprovedFormulations";
import ManufacturingFacilities from "./pages/ManufacturingFacilities";
import Certifications from "./pages/Certifications";
import AboutUs from "./pages/AboutUs";
import VisionMission from "./pages/VisionMission";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulations" element={<ApprovedFormulations />} />
          <Route path="/facilities" element={<ManufacturingFacilities />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
