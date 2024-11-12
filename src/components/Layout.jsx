import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout(){
    return(
        <>
        <div className="container mx-auto">
            <Navbar/>
            <div style={{height: "90vh"}}>
            <Outlet/>
            
            <ToastContainer/>
            </div>
           
            <Footer/>
        </div>
        </>
       
    )
}