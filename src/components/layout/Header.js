import React, { useEffect } from 'react';
import logo from '../../img/15.png';
import { Link } from 'react-scroll'

const Header = () => {
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
    }, [])
    return (
        <header className="main_nav dark_nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light w-100"> 
                    <Link className="navbar-brand" to="/" spy={true} smooth={true}><img className="nav-logo" src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item"><Link className="nav-link active" to="top" spy={true} smooth={true}  >Home<span className="sr-only">(current)</span></Link></li>
                          <li className="nav-item"><Link className="nav-link" to="about" spy={true} smooth={true}  >About</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="skill" spy={true} smooth={true} >Skill</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="services" spy={true} smooth={true}  >Services</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="portfolio" spy={true} smooth={true} >Portfolio</Link></li>	
                          <li className="nav-item"><Link className="nav-link" to="testimonial" spy={true} smooth={true} >Testimonial</Link></li>	
                          <li className="nav-item"><Link className="nav-link" to="blog" spy={true} smooth={true} >Blog</Link></li>	
                          <li className="nav-item"><Link className="nav-link" to="contact" spy={true} smooth={true} >Contact</Link></li>	
                        </ul>
                    </div>		
                </nav>
            </div>	
        </header> 
  
    );
}

export default Header;
