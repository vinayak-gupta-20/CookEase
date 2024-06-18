import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container w-full h-auto">{children}</main>
    </>
  );
}

export default Layout;
