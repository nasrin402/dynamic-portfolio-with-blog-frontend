import React, { useContext } from 'react';
import { blogContext } from '../context/blogContext/blogContext';
import Typed from 'react-typed';

const BannerSection = () => {
    const {homPageInfo, loaded} = useContext(blogContext);

   const totalInfo = homPageInfo.bannerSection;
   
const {
    fullName,
    bio,
    cvLink,
    bannerBackground:{
        data:{
            attributes:{url} 
        }
    },
    professions

} =homPageInfo.bannerSection;


const typedStrings = homPageInfo?.bannerSection?.professions?.map((profession) => profession.professionName);

    const typedOptions = {
        stringsElement: null,
        typeSpeed: 50,
        startDelay: 500,
        backSpeed: 50,
        backDelay: 500,
        loop: true,
        loopCount: 100,
        showCursor: false,
        cursorChar: "|",
        attr: null,
        contentType: "html",
      };
    return (
        <section id="main_banner" className="banner_water_effect  overlay_one" style={{ backgroundImage: `url(${url})` }}>
		<div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-md-12 col-lg-12 home-content text-left">
                    <div className="mainbanner_content">
                   
                    
                        <span className="pb_5 banner_title color_white">I Am {fullName}  !</span>  
                       <h1 className="cd-headline clip is-full-width text-uppercase">
                            <span className="color_white ">I am a&nbsp; </span>

                            <span className="color_default ">
                            <Typed
                            strings={typedStrings}
                            {...typedOptions}
                          />
                                
                            </span>
                        </h1>{/**/}
                        <p className="color_white mb_30">{totalInfo?.bio}</p>
                        <a className="btn btn-default" target="_blank" href={`${totalInfo?.cvLink}`}>Download CV</a>
                        
                    </div>
                </div>          
            </div>
        </div>
    </section>
    );
}

export default BannerSection;
