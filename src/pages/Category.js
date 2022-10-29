import React, { useContext } from 'react';

import { blogContext } from '../context/blogContext/blogContext';
import { format } from 'date-fns';
import Layout from '../components/layout/Layout';
import BlogBanner from '../components/blog/BlogBanner';
import BlogSidebar from '../components/blog/BlogSidebar';
import CatContents from '../components/blog/CatContents';

const Category = () => {
    
    return (
        <Layout>
        <BlogBanner title="Categories" />
        <section className="blog_area py_80 bg_black full_row">
          <div className="container">
            <div className="row">
            
              <CatContents/>
         
              <div className="col-md-5 col-lg-4">
              <BlogSidebar />
              
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default Category;
