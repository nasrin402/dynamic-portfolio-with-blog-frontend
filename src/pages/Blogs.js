import React, {useContext} from 'react';
import BlogBanner from '../components/blog/BlogBanner';
import BlogMenu from '../components/blog/BlogMenu';
import Footer from '../components/layout/Footer';
import { blogContext } from '../context/blogContext/blogContext';
import { format } from 'date-fns'

const Blogs = () => {
    const {posts} = useContext(blogContext);
    console.log(posts);
    const link = 'http://localhost:1337'
    return (
        <>
          <BlogMenu />
          <BlogBanner />
          <section className="blog_area py_80 bg_secondery full_row">
          <div className="container">
              <div className="row">
           
                  <div className="col-md-7 col-lg-8">
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
                                <a className="color_primary" href="blog-details.html"
                                    ><h5>
                                        {post?.title}
                                    </h5></a
                                >
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
                      
                      <nav>
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
                      </nav>
                  </div>
                  <div className="col-md-5 col-lg-4">
                      <div className="blog_sidebar">
                          <div
                              className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp"
                          >
                              <h3 className="widget_title mb_30 text-capitalize">
                                  Follow Me
                              </h3>
                              <div className="socal_media">
                                  <ul>
                                      <li>
                                          <a href="#"
                                              ><i className="fa fa-facebook" aria-hidden="true"></i
                                          ></a>
                                      </li>
                                      <li>
                                          <a href="#"
                                              ><i className="fa fa-twitter" aria-hidden="true"></i
                                          ></a>
                                      </li>
                                      <li>
                                          <a href="#"
                                              ><i className="fa fa-google-plus" aria-hidden="true"></i
                                          ></a>
                                      </li>
                                      <li>
                                          <a href="#"
                                              ><i className="fa fa-linkedin" aria-hidden="true"></i
                                          ></a>
                                      </li>
                                      <li>
                                          <a href="#"
                                              ><i className="fa fa-instagram" aria-hidden="true"></i
                                          ></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div
                              className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp"
                          >
                              <h3 className="widget_title mb_30 text-capitalize">Category</h3>
                              <div className="category_sidebar">
                                  <ul>
                                      <li>
                                          <a href="#">Web Development</a><span>(14)</span>
                                      </li>
                                      <li><a href="#">Web Design</a><span>(07)</span></li>
                                      <li><a href="#">Graphic Design</a><span>(10)</span></li>
                                      <li><a href="#">UI/UX Design</a><span>(12)</span></li>
                                      <li><a href="#">Consultation</a><span>(18)</span></li>
                                  </ul>
                              </div>
                          </div>
                          <div
                              className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp"
                          >
                              <h3 className="widget_title mb_30 text-capitalize">
                                  Recent Post
                              </h3>
                              <div className="recent_post">
                                  <ul>
                                      <li className="mb_30">
                                          <a href="#">
                                              <div className="post_img">
                                                  <img
                                                      src="images/recent-post/01.jpg"
                                                      alt="image"
                                                  />
                                              </div>
                                              <div className="recent_post_content">
                                                  <h6>
                                                      Convallis pulvinar morbi. Aenean nisi vitae
                                                      metus.
                                                  </h6>
                                                  <span className="color_gray">30 Jan 2019</span>
                                              </div>
                                          </a>
                                      </li>
                                      <li className="mb_30">
                                          <a href="#">
                                              <div className="post_img">
                                                  <img
                                                      src="images/recent-post/02.jpg"
                                                      alt="image"
                                                  />
                                              </div>
                                              <div className="recent_post_content">
                                                  <h6>
                                                      Eleifend ante hac quam. Rhoncus dapibus morbi.
                                                  </h6>
                                                  <span className="color_gray">28 Jan 2019</span>
                                              </div>
                                          </a>
                                      </li>
                                      <li className="mb_30">
                                          <a href="#">
                                              <div className="post_img">
                                                  <img
                                                      src="images/recent-post/03.jpg"
                                                      alt="image"
                                                  />
                                              </div>
                                              <div className="recent_post_content">
                                                  <h6>
                                                      Felis cum, elementum. Rhoncus aliquam cras.
                                                  </h6>
                                                  <span className="color_gray">25 Jan 2019</span>
                                              </div>
                                          </a>
                                      </li>
                                      <li className="mb_30">
                                          <a href="#">
                                              <div className="post_img">
                                                  <img
                                                      src="images/recent-post/04.jpg"
                                                      alt="image"
                                                  />
                                              </div>
                                              <div className="recent_post_content">
                                                  <h6>
                                                      Turpis eleifend dis platea lectus nam eleifen
                                                      etiam.
                                                  </h6>
                                                  <span className="color_gray">24 Jan 2019</span>
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div
                              className="widget mb_60 d-inline-block p_30 bg_white primary_link full_row wow animated slideInUp"
                          >
                              <h3 className="widget_title mb_30 text-capitalize">Archives</h3>
                              <div className="archives">
                                  <ul>
                                      <li><a href="#">December 2018</a></li>
                                      <li><a href="#">November 2018</a></li>
                                      <li><a href="#">October 2018</a></li>
                                      <li><a href="#">September 2018</a></li>
                                      <li><a href="#">August 2018</a></li>
                                      <li><a href="#">July 2018</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div
                              className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp"
                          >
                              <h3 className="widget_title mb_30 text-capitalize">Archives</h3>
                              <div className="tags">
                                  <ul>
                                      <li><a href="#">Design</a></li>
                                      <li><a href="#">Photographer</a></li>
                                      <li><a href="#">Developer</a></li>
                                      <li><a href="#">Fashion</a></li>
                                      <li><a href="#">Coder</a></li>
                                      <li><a href="#">Articles</a></li>
                                      <li><a href="#">Mordan</a></li>
                                      <li><a href="#">Web</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
          <Footer />  
        </>
    );
}

export default Blogs;
