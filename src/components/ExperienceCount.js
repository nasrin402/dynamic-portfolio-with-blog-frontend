import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ExperienceCount = ({title, endValue}) => {
const [counterOn, setCounterOn] = useState(false)
    return (
       
        <div className="col-md-4 col-lg-4" >
        <div className="counter count wow text-center" data-wow-duration="300ms">
            <span className="flaticon-man-working-on-a-laptop-from-side-view"></span>
            <ScrollTrigger onEnter={() =>setCounterOn(true)} onExit={() =>setCounterOn(false)} >
            <div className="counting_digit color_default mt_15"> <h2 className="count-num"> {counterOn && <CountUp end={endValue} start={0}/>} </h2><span>+</span>
            </div>
            </ScrollTrigger>
            <h3 className="color_white mt_15">{title}</h3>
          </div>
    </div>
 
        
    );
}

export default ExperienceCount;
