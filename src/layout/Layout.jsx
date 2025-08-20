import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";

function Layout() {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <main className="relative min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      {/* <Footer /> */}
      <WhatsAppPopup />
    </>
  );
}

export default Layout;
