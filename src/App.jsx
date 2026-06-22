// Styles
import "./styles/App.css";

// Components
import Header from "./components/Header";

// Page
import Home from "./pages/Home";

// Routing
import { Routes, Route } from "react-router";

// React
import { useState } from "react";

export default function App() {
  const [headerTheme, setHeaderTheme] = useState("dark");
  return (
    <>
      <Header headerTheme={headerTheme}  />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
