import React, { useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Layout from '../components/layout/Layout';
import { blogContext } from '../context/blogContext/blogContext';
import AboutSection from '../sections/AboutSection';
import BannerSection from '../sections/BannerSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';
import Experience from '../sections/Experience';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import SkillSection from '../sections/SkillSection';
import Testimonial from '../sections/Testimonial';

const Home = () => {
const location = useLocation();
const {loaded} = useContext(blogContext);
//console.log(scroller);
useEffect(() =>{
  if(location.state){
    scroller.scrollTo(`${location.state}`,{
      smooth: true,
    })

    //location.state = null

    scroller.unregister(`${location.state}`)
  }
    
},[location.state]);

    return (
      <>
      {loaded ?
        
        <Layout>
        <BannerSection />
        <AboutSection />
        <SkillSection />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <BlogSection />
        <ContactSection />
      </Layout>
      : "Loading ......."
      }
      </>
    );
}

export default Home;
