import React, { useState } from 'react';
import FilterMenu from '../components/FilterMenu';
import {portfolios} from '../data/portfolioData';
const Portfolio = () => {
	const [allSample, setAllSample] = useState(portfolios)
	const [filtered, setFiltered] = useState(portfolios);
	const [activeTag, setActiveTag] = useState('all');

    return (
        <section id="portfolio" name="portfolio" className="py_80 bg_deepblack full_row">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-12">
					<div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
	                    <h2 className="title text-uppercase color_white"><span className="line_double mx-auto color_default">portfolio</span>Recent Projects</h2>
	                    <span className="sub_title color_lightgray">Interdum a etiam sagittis vehicula porta. Massa felis eros quam blandit nulla dolor habitant. Ullamcorper quis ornare et proin pellentesque.</span>
	                </div>
				</div>
				<div className="col-md-12 col-lg-12">
					<div className="my_portfolio" id="tab-panel"> 
              			
						<FilterMenu allSample={allSample} setFiltered={setFiltered}
						activeTag={activeTag} setActiveTag={setActiveTag}
						/>
			              
						<div  className="filter-list">
							<div className="portfolio-items">
								<div className="row">
								{filtered.map((p) =><div className="column  graphic development wordpress mb_30 col-md-4 col-lg-4" key={p.id}>
								<div  className="default-portfolio-item">
									<a href={p.imgUrl}  data-fancybox="gallery">
									<img src={p.imgUrl} alt="image" />
										<div className="overlay-box">
											<span><i className="fa fa-eye" aria-hidden="true"></i></span>
											<div className="tag">
												<ul>
													{p.tags.map((item, index) =><li key={index}>{item}</li>,)}
													
													
												</ul>
											</div>
										</div>
									</a>
								</div>
							</div>)}
								  	
								
								</div>
							</div>
						</div>		
			        </div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Portfolio;
