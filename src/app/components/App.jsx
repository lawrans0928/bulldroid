import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../tailwind.css";
// import "../../index.css";
import Home  from "../../pages/Home";
import About from "../../pages/About";
import  Contact  from "../../pages/Contact";
import {Services} from "../../pages/Services";
// import Blogs from "../../pages/Blogs";
// import Dashboard from "../../pages/dashboard";
import Dashboard from "../../pages/dashboard";
import Application from "../../pages/Application";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Services />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/application" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}