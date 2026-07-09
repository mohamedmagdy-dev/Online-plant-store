// Components
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./ui/Loader";
import { Outlet } from "react-router";
import { Suspense } from "react";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}