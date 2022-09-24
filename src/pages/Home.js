import React from 'react';
import Layout from '../components/layout/Layout';
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
    return (
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
    );
}

export default Home;
