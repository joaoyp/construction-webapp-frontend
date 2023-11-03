import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="flex-col min-h-screen">{children}</div>
    <Footer />
  </>
);

export default Layout;
