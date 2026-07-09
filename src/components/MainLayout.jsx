// Components
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
export default function MainLayout({ isHeaderTransparent }) {
  return (
    <>
      <Header isHeaderTransparent={isHeaderTransparent} />
      <Outlet />
      <Footer />
    </>
  );
}