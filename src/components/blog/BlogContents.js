import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns'
import { blogContext } from '../../context/blogContext/blogContext';
import { Link, } from 'react-router-dom';
const BlogContents = () => {
    const {posts, loaded} = useContext(blogContext);


    return (
        <>
        {loaded ? 
        <div className="col-md-7 col-lg-8">
            {posts.length ? <>
                  {posts?.map((post) =>
                    <div className="blog_list mb_60" key={post.id}>
                    <div className="blog_item mb_30 wow animated slideInUp">
                        <div className="comments">
                            <i className="fa fa-comment" aria-hidden="true"></i>
                            <span className="color_white">12</span>
                        </div>
                        <div className="blog_img overlay_one">
                            <img src={post?.blogThumb?.data?.attributes?.url} alt="image" />
                        </div>
                        <div className="blog_content bg_white">
                            <div className="blog_title">
                                <Link className="color_primary" to={`/blog-details/${post.id}`}
                                    ><h5>
                                        {post?.title}
                                    </h5></Link>
                            </div>
                            <p className="mt_15 mb_30">
                               {post?.description.substring(0, 150)} &hellip;
                            </p>

                            <div className="admin">
                                <img src={post?.author?.data?.attributes?.profileImg?.data?.attributes?.url} alt="image" />
                                <span className="color_white">By - {post?.author?.data?.attributes?.username}</span>
                            </div>
                            <div className="date float-right color_primary">
                               {format(new Date(post.dateOfPublish), 'MMM dd yyyy')}
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
                    )}
                    </>: <p>No posts found.</p>}     
                      {/*<nav>
                          <ul className="pagination wow animated slideInUp full_row">
                              <li className="page-item active">
                                  <a className="page-link" href="#">1</a>
                              </li>
                              <li className="page-item">
                                  <a className="page-link" href="#">2</a>
                              </li>
                              <li className="page-item">
                                  <a className="page-link" href="#">3</a>
                              </li>
                              <li className="page-item">
                                  <a className="page-link" href="#"
                                      ><i className="fa fa-angle-right" aria-hidden="true"></i
                                  ></a>
                              </li>
                          </ul>
                      </nav>*/}
        </div>
         : <p>Loading.....</p>      
                  }      
        </>
                );
}

export default BlogContents;
