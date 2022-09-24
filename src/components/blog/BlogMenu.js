import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import logo from '../../img/15.png';
const BlogMenu = () => {
 const {logout, user} = useContext(AuthContext);



    return (
        <header className="main_nav dark_nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light w-100"> 
                    <Link className="navbar-brand" to="/"><img className="nav-logo" src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item"><NavLink className="nav-link active" to="/"  >Home<span className="sr-only">(current)</span></NavLink></li>
                        
                          {user && 
                            <>
                            <li className="nav-item"><NavLink className="nav-link" to="/blog"  >Logout</NavLink></li>
                          <li className="nav-item"><NavLink className="nav-link" to="/article"  >Add Article</NavLink></li> 	
                          </>
                          }	 
                          {!user && <>
                          <li className="nav-item"><NavLink className="nav-link" to="/login"  >Login</NavLink></li>	
                          <li className="nav-item"><NavLink className="nav-link" to="/register"  >Register</NavLink></li>	
                          </>}
                        
                        </ul>
                    </div>		
                </nav>
            </div>	
        </header> 
  
    );
}

export default BlogMenu;
