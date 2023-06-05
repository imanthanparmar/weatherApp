import React from 'react';
import Video from '../component/video';
import '../style/weatherForecast.scss';

const WeatherForecastContainer: React.FC = () => {
	return (
		<div className='position--relative weather_container'>
			<Video />
			<div className='glass-content'>
				<div className='glass-container' />
			</div>
		</div>
	);
};

export default WeatherForecastContainer;
