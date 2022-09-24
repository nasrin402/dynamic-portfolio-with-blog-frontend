import React from "react";
import BlogBanner from "../components/blog/BlogBanner";
import BlogMenu from "../components/blog/BlogMenu";
import Footer from "../components/layout/Footer";

const BlogDetails = () => {
  return (
    <>
      <BlogMenu />
      <BlogBanner />
      <section className="blog_area py_80 bg_black full_row">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8">
              <div className="blog_details">
                <div className="blog_img overlay_one wow animated slideInUp">
                  <img src="images/blog/01.jpg" alt="image" />
                </div>
                <div className="blog_content bg_deepblack">
                  <div className="blog_title mb_20 color_white">
                    <h5>
                      In faucibus donec varius. Potenti velit nam pede justo.
                      Condimentum interdum quisque aenean ligula dapibus amet
                      semper nisi tempor cras.
                    </h5>
                  </div>
                  <div className="admin mr_20">
                    <img src="images/about/02.jpg" alt="image" />
                    <span className="color_primary">By - Rockstar Jack</span>
                  </div>
                  <div className="date color_lightgray float-left">
                    20 Jan 2019
                  </div>
                  <div className="comments">
                    <i className="fa fa-comment" aria-hidden="true"></i>
                    <span className="color_lightgray">12</span>
                  </div>
                  <div className="single_blog_content d-inline-block mt_30 color_secondery wow animated slideInUp">
                    <p>
                      Dictumst augue tortor laoreet. Commodo ad laoreet
                      parturient magna tristique elementum facilisis sodales
                      velit morbi nostra iaculis, fermentum bibendum. Congue per
                      Ornare in placerat. phasellus dapibus ullamcorper dolor
                      pellentesque aliquam nibh ultrices aliquam netus
                      consectetuer Etiam tempus nam ridiculus fringilla
                      elementum pharetra tempor torquent purus purus. Neque.
                      Lorem. Eget montes pretium donec mus tincidunt venenatis
                      interdum.
                    </p>
                    <p className="mt_15 wow animated slideInUp">
                      Sit lacinia dolor arcu vel quisque neque felis proin ante,
                      nisl amet vitae nullam placerat elementum varius cum
                      viverra, vel mattis elit praesent iaculis sollicitudin
                      bibendum est consequat tempus hac ante pulvinar leo
                      suspendisse tellus dictum. Morbi, venenatis ullamcorper.
                    </p>
                    <blockquote className="color_lightgray mt_15 wow animated slideInUp">
                      <sup>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </sup>{" "}
                      Netus vestibulum nostra facilisi tellus. Id taciti dapibus
                      Platea tincidunt quis sollicitudin dignissim penatibus
                      orci primis cum ullamcorper euismod, potenti tincidunt
                      praesent ipsum aug. Ullamcorper cras vestibulum urna
                      inceptos Neque curae; feugiat mattis auctor nec tortor
                      faucibus. Elit vehicula nibh dolor litora. Placerat ad
                      mauris. Dapibus hymenaeos. Potenti.
                      <sup>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                      </sup>
                    </blockquote>
                    <p className="mt_15">
                      Ante nascetur class fames leo nisi arcu Fringilla sapien
                      Netus libero nisl lacinia id urna commodo tellus volutpat.
                      Integer ridiculus consectetuer ut lacus. Platea ante at
                      dis cras sed pharetra dictumst dui tellus condimentum duis
                      pellentesque. Cubilia scelerisque nascetur nostra proin
                      bibendum inceptos. Inceptos fringilla malesuada ut feugiat
                      mus phasellus Nunc cubilia. Turpis tristique luctus libero
                      est tortor nostra orci commodo nullam rhoncus Lacus ante
                      morbi. Ante vitae nullam nisi.
                    </p>
                  </div>
                  <div className="share_post mt_30 wow color_secondery animated slideInUp">
                    <h4 className="float-left mr_20">Share : </h4>
                    <div className="socal_media_2 d-inline-block white_hover">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="comment_area mt_60">
                  <h4 className="text-uppercase color_lightgray mb_30">
                    Comments (04)
                  </h4>
                  <ul className="user_comments">
                    <li className="mb_20 wow animated slideInUp">
                      <div className="comment_description bg_deepblack p_20">
                        <div className="author_img">
                          <img src="images/comments/01.png" alt="images" />
                        </div>
                        <div className="author_text color_secondery">
                          <div className="author_info">
                            <h5 className="author_name color_lightgray">
                              Rebecca D. Nagy{" "}
                            </h5>
                            <span>12 January, 2019 at 3.27 pm</span>
                          </div>
                          <p>
                            Morbi potenti arcu litora. Laoreet euismod blandit
                            euismod sit. Nisi eu Placerat ultricies faucibus
                            interdum tellus risus. Iaculis velit.
                          </p>
                          <a href="#" className="btn btn_info mt_15">
                            Replay
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb_20 wow animated slideInUp">
                      <div className="comment_description replied bg_deepblack p_20">
                        <div className="author_img">
                          <img src="images/comments/02.png" alt="images" />
                        </div>
                        <div className="author_text color_secondery">
                          <div className="author_info">
                            <h5 className="author_name color_lightgray">
                              Malina James
                            </h5>
                            <span>15 January, 2019 at 5.33 pm</span>
                          </div>
                          <p>
                            Nec platea penatibus nisi ridiculus feugiat justo
                            torquent hymenaeos suscipit platea montes. Metus
                            porttitor fusce lectus tincidunt ornare.
                          </p>
                          <a href="#" className="btn btn_info mt_15">
                            Replay
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb_20 wow animated slideInUp">
                      <div className="comment_description bg_deepblack p_20">
                        <div className="author_img">
                          <img src="images/comments/03.png" alt="images" />
                        </div>
                        <div className="author_text color_secondery">
                          <div className="author_info">
                            <h5 className="author_name color_lightgray">
                              Ahmad Hassan
                            </h5>
                            <span>16 January, 2019 at 12.03 pm</span>
                          </div>
                          <p>
                            Hymenaeos maecenas, imperdiet morbi mauris sagittis
                            libero fringilla congue purus viverra nisi aptent
                            nascetur ultricies pede sem scelerisque ipsum class.
                          </p>
                          <a href="#" className="btn btn_info mt_15">
                            Replay
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb_20 wow animated slideInUp">
                      <div className="comment_description bg_deepblack p_20">
                        <div className="author_img">
                          <img src="images/comments/04.png" alt="images" />
                        </div>
                        <div className="author_text color_secondery">
                          <div className="author_info">
                            <h5 className="author_name color_lightgray">
                              Patty Hurd
                            </h5>
                            <span>24 January, 2019 at 04.27 am</span>
                          </div>
                          <p>
                            Euismod gravida laoreet vestibulum nostra sed. Ac
                            quis auctor. Dui. Dictumst mus phasellus elit nec
                            ornare hac faucibus interdum ligula.
                          </p>
                          <a href="#" className="btn btn_info mt_15">
                            Replay
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="replay mt_60 wow animated slideInUp">
                  <h4 className="text-uppercase color_lightgray mb_30">
                    Leave A Replay
                  </h4>
                  <form action="#" method="post" className="reply_form">
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <input
                          className="form-control bg_deepblack"
                          name="author_name"
                          type="text"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <input
                          className="form-control bg_deepblack"
                          name="author_email"
                          type="email"
                          placeholder="Email Address*"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          className="form-control bg_deepblack"
                          name="author_comments"
                          rows="7"
                          placeholder="Type Comments..."
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-default"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="blog_sidebar">
                <div className="widget mb_60 d-inline-block p_30 bg_deepblack full_row wow animated slideInUp">
                  <h3 className="widget_title mb_30 color_white text-capitalize">
                    Follow Me
                  </h3>
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
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
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
                <div className="widget mb_60 d-inline-block p_30 white_link color_white bg_deepblack full_row wow animated slideInUp">
                  <h3 className="widget_title mb_30 color_white text-capitalize">
                    Category
                  </h3>
                  <div className="category_sidebar">
                    <ul>
                      <li>
                        <a href="#">Web Development</a>
                        <span>(14)</span>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                        <span>(07)</span>
                      </li>
                      <li>
                        <a href="#">Graphic Design</a>
                        <span>(10)</span>
                      </li>
                      <li>
                        <a href="#">UI/UX Design</a>
                        <span>(12)</span>
                      </li>
                      <li>
                        <a href="#">Consultation</a>
                        <span>(18)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget mb_60 d-inline-block p_30 bg_deepblack white_link full_row wow animated slideInUp">
                  <h3 className="widget_title mb_30 color_white text-capitalize">
                    Recent Post
                  </h3>
                  <div className="recent_post">
                    <ul>
                      <li className="mb_30">
                        <a href="#">
                          <div className="post_img">
                            <img src="images/recent-post/01.jpg" alt="image" />
                          </div>
                          <div className="recent_post_content">
                            <h6>
                              Convallis pulvinar morbi. Aenean nisi vitae metus.
                            </h6>
                            <span className="color_gray">30 Jan 2019</span>
                          </div>
                        </a>
                      </li>
                      <li className="mb_30">
                        <a href="#">
                          <div className="post_img">
                            <img src="images/recent-post/02.jpg" alt="image" />
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
                            <img src="images/recent-post/03.jpg" alt="image" />
                          </div>
                          <div className="recent_post_content">
                            <h6>Felis cum, elementum. Rhoncus aliquam cras.</h6>
                            <span className="color_gray">25 Jan 2019</span>
                          </div>
                        </a>
                      </li>
                      <li className="mb_30">
                        <a href="#">
                          <div className="post_img">
                            <img src="images/recent-post/04.jpg" alt="image" />
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
                <div className="widget mb_60 d-inline-block p_30 bg_deepblack white_link full_row wow animated slideInUp">
                  <h3 className="widget_title mb_30 color_white text-capitalize">
                    Archives
                  </h3>
                  <div className="archives">
                    <ul>
                      <li>
                        <a href="#">December 2018</a>
                      </li>
                      <li>
                        <a href="#">November 2018</a>
                      </li>
                      <li>
                        <a href="#">October 2018</a>
                      </li>
                      <li>
                        <a href="#">September 2018</a>
                      </li>
                      <li>
                        <a href="#">August 2018</a>
                      </li>
                      <li>
                        <a href="#">July 2018</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget mb_60 d-inline-block p_30 bg_deepblack full_row wow animated slideInUp">
                  <h3 className="widget_title mb_30 color_white text-capitalize">
                    Archives
                  </h3>
                  <div className="tags">
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Photographer</a>
                      </li>
                      <li>
                        <a href="#">Developer</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Coder</a>
                      </li>
                      <li>
                        <a href="#">Articles</a>
                      </li>
                      <li>
                        <a href="#">Mordan</a>
                      </li>
                      <li>
                        <a href="#">Web</a>
                      </li>
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
};

export default BlogDetails;
