import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { blogContext } from "../../context/blogContext/blogContext";
import { format } from "date-fns";
const BlogSidebar = () => {
  const { categories, posts } = useContext(blogContext);

  const recentPost = posts.map((p) => p);
  const reversePost = recentPost.reverse();
 
  return (
    <div className="blog_sidebar ">
      <div className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Follow Me</h3>
        <div className="socal_media">
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
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Category</h3>
        <div className="category_sidebar">
          <ul>
            {categories?.map((c) => (
              <li key={c.id}>
                <Link to={`/category/${c.attributes.slug}`}>
                  {c.attributes.categoryName}
                </Link>
                <span>({c.attributes.blogs.data.length})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Recent Post</h3>
        <div className="recent_post">
          <ul>
            {reversePost?.slice(0, 4).map((p) => (
              <li className="mb_30" key={p.id}>
                <Link to={`/blog-details/${p.slug}`}>
                  <div className="d-flex align-items-center">
                    <div className="post_img">
                      <img
                        src={p?.blogThumb?.data?.attributes?.url}
                        alt="image"
                      />
                    </div>
                    <div className="recent_post_content">
                      <h6>{p?.title}</h6>
                      <span className="color_gray">
                        {" "}
                        {format(new Date(p.dateOfPublish), "MMM dd yyyy")}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
