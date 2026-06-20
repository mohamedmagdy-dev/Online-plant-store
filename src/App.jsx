// Styles
import "./styles/App.css";

// Components
import Header from "./components/Header";

// Routing
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element="" />
      </Routes>
    </>
  );
}
