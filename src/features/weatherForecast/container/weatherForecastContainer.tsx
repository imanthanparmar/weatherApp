import React from 'react';

import '../style/weatherForecast.scss';
import WeatherForecast from '../component/weatherForecast';

const WeatherForecastContainer: React.FC = () => {
	return (
		<div className='position--relative weather_container'>
			<WeatherForecast />
		</div>
	);
};

export default WeatherForecastContainer;
