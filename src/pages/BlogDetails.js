import React, { useContext, useEffect } from "react";
import { useParams} from "react-router-dom";
import BlogBanner from "../components/blog/BlogBanner";
import BlogMenu from "../components/blog/BlogMenu";
import BlogSidebar from "../components/blog/BlogSidebar";
import SingleBlog from "../components/blog/SingleBlog";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import { blogContext } from "../context/blogContext/blogContext";

const BlogDetails = () => {
 const {loaded} =useContext(blogContext);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
    {loaded ?
      <Layout>
      <BlogBanner title = "Blog Details"/>
      <section className="blog_area py_80 bg_black full_row">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8">
             <SingleBlog />
            </div>
            <div className="col-md-4 col-lg-4">
             <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      </Layout>
      :
      <p>Loading ........</p>
    }
    </>
  );
};

export default BlogDetails;
