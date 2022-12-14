import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';

const BlogBanner = ({title}) => {
    const { user} = useContext(AuthContext);
    //console.log(user);
    return (
        <section className="banner background9 py_80 overlay_three full_row">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="banner_text text-center">
                        <h1 className="page_banner_title color_white text-uppercase">Welcome to {title}</h1>
                        <div className="breadcrumbs m-auto d-inline-block">
                            <ul>
                                <li className="hover_gray"><Link to="/blog">Blog</Link></li>
                                <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                                <li className="color-default">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default BlogBanner;
