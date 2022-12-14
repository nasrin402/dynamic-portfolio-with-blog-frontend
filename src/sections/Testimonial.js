import React, { useContext } from 'react';
import Slider from "react-slick";
import { blogContext } from '../context/blogContext/blogContext';
import {reviews} from '../data/testimonialData';

const Testimonial = () => {
	const {testimonial} = useContext(blogContext);
	
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
    return (
        <section id="testimonial" name="testimonial" className="py_80 bg_black full_row">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-12">
					<div className="section_title_1 color_white text-center mx-auto pb_60 wow animated slideInUp">
	                    <h2 className="title text-uppercase"><span className="line_double mx-auto color_default">testimonial</span>What Client Say’s</h2>
	                    <span className="sub_title color_lightgray"> {testimonial?.sectionHeading}</span>
	                </div>
				</div>
				<div className="col-md-12 col-lg-12">
    				
					<Slider {...settings}>
					{testimonial?.testimonial?.map((r) =><div className="member_feedback color_lightgray p_30" key={r.id}>
					<div className="client_img"><img src={r?.clientImg?.data?.attributes?.url} alt="image"/></div>
					<div className="star d-inline-block mt_30 color_default">
						<ul>
						{r?.rating?.map((rating) =><li key={rating.id}><i className="fa fa-star" aria-hidden="true"></i></li>)}
							
							
						</ul>
					</div>
					<h5 className="color_gray mb_15">{r.name}</h5>
					<p>{r.review}</p>
				</div>)}
    					
						
					</Slider>
    				
    			</div>
			</div>
		</div>
	</section>
    );
}

export default Testimonial;
