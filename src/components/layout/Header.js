import React, { useEffect } from 'react';
import logo from '../../img/15.png';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import { Link } from 'react-scroll'

const Header = () => {
    const {pathname} = useLocation();


    function handleScroll() {
        const scrollValue = window.scrollY
        if(scrollValue >= 500){
            document.querySelector('.scrollTopIcon').classList.add('visible')
            document.querySelector('.dark_nav').classList.add('nav-scroll')

        }else{
            document.querySelector('.scrollTopIcon').classList.remove('visible')
            document.querySelector('.dark_nav').classList.remove('nav-scroll')
        }
    }
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const isNavigate = pathname === '/' 
    return (
        <header className="main_nav dark_nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light w-100"> 
                    <Link className="navbar-brand" to="/" spy={true} smooth={true}><img className="nav-logo" src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="top"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Home
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`top`}
                        >
                          Home
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="about"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          About
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`about`}
                        >
                          About
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="skill"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Skill
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`skill`}
                        >
                          Skill
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="services"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Services
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`services`}
                        >
                          Services
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="portfolio"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Portfolio
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`portfolio`}
                        >
                          Portfolio
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="testimonial"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Testimonial
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`testimonial`}
                        >
                          Testimonial
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="blog"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Blog
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`blog`}
                        >
                          Blog
                        </RouterLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {isNavigate ? (
                        <Link
                          className="nav-link"
                          to="contact"
                          smooth={true}
                          spy={true}
                          activeClass="active"
                        >
                          Contact
                        </Link>
                      ) : (
                        <RouterLink
                          className="nav-link"
                          to="/"
                          state={`contact`}
                        >
                          Contact
                        </RouterLink>
                      )}
                    </li>
                 </ul>
                      {/* <ul className="navbar-nav ml-auto">
                          <li className="nav-item"><Link className="nav-link" to="top" spy={true} smooth={true}  >Home</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="about" spy={true} smooth={true}  >About</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="skill" spy={true} smooth={true} >Skill</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="services" spy={true} smooth={true}  >Services</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="portfolio" spy={true} smooth={true} >Portfolio</Link></li>	
                          <li className="nav-item"><Link className="nav-link" to="testimonial" spy={true} smooth={true} >Testimonial</Link></li>	
                          <li className="nav-item"><Link className="nav-link" to="blog" spy={true} smooth={true} >Blog</Link></li>	
                          <li className="nav-item"><Link className="nav-link" to="contact" spy={true} smooth={true} >Contact</Link></li>	
                      </ul> */}
                    </div>		
                </nav>
            </div>	
        </header> 
  
    );
}

export default Header;
