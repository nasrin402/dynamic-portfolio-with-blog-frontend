import React, { useContext, useEffect } from "react";
import BlogBanner from "../components/blog/BlogBanner";
import BlogContents from "../components/blog/BlogContents";
import BlogMenu from "../components/blog/BlogMenu";
import BlogSidebar from "../components/blog/BlogSidebar";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import { blogContext } from "../context/blogContext/blogContext";

const Blogs = () => {
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <Layout>
      <BlogBanner title="Blogs" />
      <section className="blog_area py_80 bg_black full_row">
        <div className="container">
          <div className="row">
          
            <BlogContents />
       
            <div className="col-md-5 col-lg-4">
            <BlogSidebar />
            
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
