import React, { useEffect } from 'react';

const FilterMenu = ({allSample, setFiltered, activeTag, setActiveTag }) => {
    useEffect(() =>{
        if(activeTag === "all"){
            setFiltered(allSample);
            return
        }
        const filtered = allSample.filter((p)=>
            p.tags.includes(activeTag)
        );
        setFiltered(filtered)
    }, [activeTag])
    return (
        <div className="row">
        <div className="col-md-12">
            <div className="filters mb_30 w-100 text-center color_lightgray">
                <ul className="filter-tabs mx-auto d-inline-block">
                    <li className={activeTag === "all" ? "active filter" : "filter"}   onClick={() =>setActiveTag("all")}>All</li>
                    <li className={activeTag === "web-design" ? "active filter" : "filter"}  onClick={() =>setActiveTag("web-design")} >Web Design</li>
                    <li className={activeTag === "wordpress" ? "active filter" : "filter"}  onClick={() =>setActiveTag("wordpress")} >Wordpress</li>
                    <li className={activeTag === "web-development" ? "active filter" : "filter"}  onClick={() =>setActiveTag("web-development")} >Web Development</li>
                    <li className={activeTag === "branding" ? " active filter" : "filter"}  onClick={() =>setActiveTag("branding")}>Branding</li>
                </ul>
            </div>
        </div>
    </div>	
    );
}

export default FilterMenu;
