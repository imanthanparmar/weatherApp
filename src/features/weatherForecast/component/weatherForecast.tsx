import React from 'react';
import WeatherContent from './weatherContent';
import WeatherSidenav from './weatherSideNav';

const WeatherForecast: React.FC = () => {
	return (
		<div className='glass-container width--full height--full-viewport'>
			<div className='main-container positon--relative width--full height--full-viewport flex align-items--center'>
				<div className='flex width--full m--20'>
					<WeatherContent />
					<WeatherSidenav />
				</div>
			</div>
		</div>
	);
};

export default WeatherForecast;
