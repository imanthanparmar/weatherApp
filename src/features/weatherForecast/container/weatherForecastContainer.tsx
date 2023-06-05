import React from 'react';

import Video from '../component/video';
import '../style/weatherForecast.scss';
import WeatherForecast from '../component/weatherForecast';

const WeatherForecastContainer: React.FC = () => {
	return (
		<div className='position--relative weather_container'>
			<Video />
			<WeatherForecast />
		</div>
	);
};

export default WeatherForecastContainer;
