import React, { useContext, useEffect, useState } from 'react';
import blog1 from '../img/blog/01.jpg'
import blog2 from '../img/blog/02.jpg'
import blog3 from '../img/blog/03.jpg'
import about2 from '../img/about/02.jpg'
import { Link, } from 'react-router-dom';
import { format } from 'date-fns'
import { blogContext } from '../context/blogContext/blogContext';

const BlogSection = () => {
	const {posts} = useContext(blogContext);

	//const [blogSec, setBlogSec] = useState(posts)
	const blogSec = posts;
	console.log(blogSec);
	console.log(posts);
    return (
        <section id="blog" name="blog" className="py_80 bg_deepblack full_row">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-12">
					<div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
	                    <h2 className="title text-uppercase color_white"><span className="line_double mx-auto color_default">blog</span>What’s News</h2>
	                    <span className="sub_title color_lightgray">Interdum a etiam sagittis vehicula porta. Massa felis eros quam blandit nulla dolor habitant. Ullamcorper quis ornare et proin pellentesque.</span>
	                </div>
				</div>
				<div className="col-md-12 col-lg-12">
					<div className="blog_grid_1 wow animated slideInUp">
						<div className="row">
						{blogSec?.slice(0, 3).map((post) =><div className="col-md-12 col-lg-4" key={post.id}>
						<div className="blog_item">
							<div className="comments">
								<i className="fa fa-comment" aria-hidden="true"></i>
								<span className="color_white">12</span>
							</div>
							<div className="blog_img overlay_one"><img src={post?.blogThumb?.data?.attributes?.url} alt="image"/></div>
							<div className="blog_content bg_gray color_lightgray">
								<div className="blog_title">
									<Link className="color_primary" to={`/blog-details/${post.id}`}><h5> {post?.title}</h5></Link>
								</div>
								<p className="mt_15 mb_30">{post?.description.substring(0, 150)} &hellip;</p>
								
								<div className="admin">
								<img src={post?.author?.data?.attributes?.profileImg?.data?.attributes?.url} alt="image" />
									<span className="color_white">By - {post?.author?.data?.attributes?.username}</span>
								</div>
								<div className="date float-right color_primary">{format(new Date(post.dateOfPublish), 'MMM dd yyyy')}</div>
							</div>
						</div>
					</div>)}
							


							
						</div>
						<div className="mx-auto text-center mt_60"><Link className="btn btn-default" to="/blog">View Blog</Link></div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default BlogSection;
