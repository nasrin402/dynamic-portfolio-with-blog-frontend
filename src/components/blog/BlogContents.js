import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns'
import { blogContext } from '../../context/blogContext/blogContext';
import { Link, } from 'react-router-dom';

 // make array based on pageCount
 const generateArr = (num) => {
    const arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}

const BlogContents = () => {
    const {posts, loaded,setPageNumber,pageNumber,pageCount} = useContext(blogContext);
    //console.log(posts);
   
    const pageCountArray = generateArr(pageCount);
    // setting page number for pagination
	const handlePageClick = (evt) => {
        console.log(+evt.target.dataset.count);
		setPageNumber(+evt.target.dataset.count)
	}
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
                                <Link className="color_primary" to={`/blog-details/${post.slug}`}
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
                      <nav>
                          <ul className="pagination wow animated slideInUp full_row">
                            {pageCountArray?.map((count,index)=>{
                                return (
                                    <li key={index} className={`page-item ${count === pageNumber ? 'active' : ''}`}>
                                    <a className="page-link" data-count={count} onClick={handlePageClick}>{count}</a>
                                    </li> 
                                )
                            })}
                          </ul>
                      </nav>
        </div>
         : <p>Loading.....</p>      
                  }      
        </>
                );
}

export default BlogContents;
