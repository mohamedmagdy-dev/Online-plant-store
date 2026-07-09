// Styles
import "./styles/App.css";

// Components
import MainLayout from "./components/MainLayout";

// Page
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

// Routing
import { Routes, Route } from "react-router";

// React
import { useState } from "react";

// Toast
import { Toaster } from "react-hot-toast";

export default function App() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 1500 }} />

      <Routes>
        <Route
          element={<MainLayout isHeaderTransparent={isHeaderTransparent} />}
        >
          <Route
            path="/"
            element={<Home setIsHeaderTransparent={setIsHeaderTransparent} />}
          />
          <Route
            path="/shop"
            element={<Shop setIsHeaderTransparent={setIsHeaderTransparent} />}
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist setIsHeaderTransparent={setIsHeaderTransparent} />
            }
          />
          <Route
            path="/about-us"
            element={
              <AboutUs setIsHeaderTransparent={setIsHeaderTransparent} />
            }
          />
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
