import React from 'react';

const BlogSidebar = () => {
    return (
        
                      <div className="blog_sidebar ">
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
                          
                      </div>
                
    );
}

export default BlogSidebar;
