import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import Aboutus from "./Aboutus";
import Carousel from "./Carousel";

export default function Layout() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar /> 
        <Carousel/>
        <Aboutus/>
        <Outlet />
        <Footer /> 
      </div>
    </>
  );
}
