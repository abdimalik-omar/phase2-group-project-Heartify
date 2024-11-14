import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar /> {/* Navbar rendered consistently */}
      <div className="container">
        <Outlet />    {/* Dynamically load page content based on current route */}
      </div>
      <Footer /> {/* Footer rendered consistently */}
    </>
  );
}
