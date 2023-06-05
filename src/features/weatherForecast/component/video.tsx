import React from 'react';
import RainVideo from 'assets/videos/rain.mp4';

const Video: React.FC = () => {
	return (
		<div className='position--absolute z-index--negative'>
			<video src={RainVideo} loop muted autoPlay />
		</div>
	);
};

export default Video;
