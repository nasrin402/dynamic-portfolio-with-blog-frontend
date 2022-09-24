import React from "react";
import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div id="page_wrapper">
      <div className="row">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Layout;
