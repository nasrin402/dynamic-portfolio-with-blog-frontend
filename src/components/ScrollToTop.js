import React from 'react';
import { Link } from 'react-scroll'
const ScrollToTop = () => {

    return (
        <Link to="top" spy={true} smooth={true} id="scroll" className='scrollTopIcon'><span></span></Link>
    );
}

export default ScrollToTop;
