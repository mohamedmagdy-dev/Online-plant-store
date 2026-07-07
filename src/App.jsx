// Styles
import "./styles/App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page
import Home from "./pages/Home";
import Shop from "./pages/Shop";

// Routing
import { Routes, Route } from "react-router";

// React
import { useState } from "react";

export default function App() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  return (
    <>
      <Header isHeaderTransparent={isHeaderTransparent} />
      <Routes>
        <Route path="/" element={<Home setIsHeaderTransparent={setIsHeaderTransparent}/>} />
        <Route path="/shop" element={<Shop setIsHeaderTransparent={setIsHeaderTransparent}/>} />
      </Routes>
      <Footer />
    </>
  );
}
