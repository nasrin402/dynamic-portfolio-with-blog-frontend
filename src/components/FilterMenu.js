import React from 'react';

const FilterMenu = ({allSample, setFiltered, activeTag, setActiveTag }) => {
    return (
        <div className="row">
        <div className="col-md-12">
            <div className="filters mb_30 w-100 text-center color_lightgray">
                <ul className="filter-tabs mx-auto d-inline-block">
                    <li className="active filter" onClick={() =>setActiveTag("all")}>All</li>
                    <li className="filter" onClick={() =>setActiveTag("web-design")} >Web Design</li>
                    <li className="filter" onClick={() =>setActiveTag("wordpress")} >Wordpress</li>
                    <li className="filter" onClick={() =>setActiveTag("web-development")} >Web Development</li>
                    <li className="filter" onClick={() =>setActiveTag("branding")}>Branding</li>
                </ul>
            </div>
        </div>
    </div>	
    );
}

export default FilterMenu;
