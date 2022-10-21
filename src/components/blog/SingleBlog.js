import React, { useContext, useEffect } from "react";
import { format } from "date-fns";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";
import { blogContext } from "../../context/blogContext/blogContext";
const SingleBlog = () => {
  const { blogId } = useParams();
  const { blogLoaded, blog, bComments, fetchBlog } = useContext(blogContext);
  useEffect(() => {
    fetchBlog(blogId);
  }, [blogId]);
 

  return (
    <>
      {blogLoaded ? (
        <>
          <div className="blog_details">
            <div className="blog_img overlay_one wow animated slideInUp">
             <img
                src={blog.attributes.blogThumb?.data?.attributes?.url}
                alt="image"
              />
            </div>
            <div className="blog_content bg_deepblack">
              <div className="blog_title mb_20 color_white">
                <h5>{blog.attributes.title}</h5>
              </div>
              <div className="admin mr_20">
                <img
                  src={
                    blog.attributes.author?.data?.attributes?.profileImg?.data
                      ?.attributes?.url
                  }
                  alt="image"
                />
                <span className="color_primary">
                  By - {blog.attributes.author?.data?.attributes?.username}
                </span>
              </div>
              <div className="date color_lightgray float-left">
                {format(new Date(blog.attributes.publishedAt), "MMM dd yyyy")}
              </div>
              <div className="comments">
                <i className="fa fa-comment" aria-hidden="true"></i>
                <span className="color_lightgray"> {blog.attributes.comments?.data?.length}</span>
              </div>
              <div className="single_blog_content d-inline-block mt_30 color_secondery wow animated slideInUp">
                <p>{blog.attributes.description}</p>
              </div>
              <div className="share_post mt_30 wow color_secondery animated slideInUp">
                <h4 className="float-left mr_20">Share : </h4>
                <div className="socal_media_2 d-inline-block white_hover">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="comment_area mt_60">
              <h4 className="text-uppercase color_lightgray mb_30"> 
                Comments ( {blog.attributes.comments?.data?.length} )
              </h4>
              <ul className="user_comments">
                {bComments?.map((comment, i) => (
                  <Comments c={comment} key={i} />
                ))}
              </ul>
            </div>
            <div className="replay mt_60 wow animated slideInUp">
              <h4 className="text-uppercase color_lightgray mb_30">
                Leave A Replay
              </h4>
              <CommentForm blogId={blogId} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default SingleBlog;
