import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({name, count}) => {
    const [style, setStyle] = React.useState({});
	const { ref, inView } = useInView({});

	 if(inView){
		setTimeout(() =>{
			const newStyle = {
				width: count,
				opacity: 1
			}
	
			setStyle(newStyle)
		}, 200)
	 }
  

	return (
		<div className="prgs-bar fact-counter" ref={ref}>
		<span>{name}</span>
		<div className="progress count wow" data-wow-duration="0ms">
			<div className="skill-percent">
			<span className="count-num">
				{count}
			</span>
			
			</div>
			<div
			className="progress-bar"
			style={style}
			>
			{" "}
			</div>
		</div>
	 </div>
    )
}

export default ProgressBar;
