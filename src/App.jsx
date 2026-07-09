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

// Toast
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 1500 }} />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}
