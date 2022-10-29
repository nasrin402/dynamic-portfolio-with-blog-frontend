import React, { useContext } from "react";
import { blogContext } from "../context/blogContext/blogContext";
import * as falicon from 'react-icons/fa';

const Services = () => {
  const { services } = useContext(blogContext);
  //console.log(services);
  return (
    <section id="services" name="services" className="py_80 bg_black full_row">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
              <h2 className="title text-uppercase color_white">
                <span className="line_double mx-auto color_default">
                  services
                </span>
                What i do
              </h2>
              <span className="sub_title color_lightgray">
                {services?.SectionDescription}
              </span>
            </div>
          </div>
          <div className="services_item1">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                
                  {services?.HomeService?.length ? (
                    <>
					
					{services?.HomeService.map((s) =>  {
						const icon = s.icon;
						const Icon = falicon[icon]
						return (
							<div className="col-md-6 col-lg-4">
							<div className="service_two bg_gray color_lightgray text-center pt_15 mb_30 wow animated slideInUp" key={s.id}>
							<div className="srv_item_number color_lightgray">
							  <strong>{s?.ServiceNo}.</strong>
							</div>
							<h3 className="p_20 text-uppercase color_primary">
							{s?.title}
							</h3>
							<div className="srv_icon color_white d-flex align-items-center justify-content-center">
								<Icon size={40}/>
							  
							</div>
							<p>
							{s?.description}
							</p>
						  </div>
						  </div>
						)
						})}
						
                    </>
                  ) : (
                    <p>No services found</p>
                  )}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
