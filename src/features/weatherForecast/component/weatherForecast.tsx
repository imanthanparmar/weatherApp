import React from 'react';
import RainVideo from 'assets/videos/rain.mp4';
import WeatherContent from './weatherContent';
import WeatherSidenav from './weatherSideNav';

const WeatherForecast: React.FC = () => {
	return (
		<div className='glass-container width--full height--full-viewport'>
			<div className='main-container positon--relative width--full height--full-viewport flex align-items--center'>
				<div className='position--absolute video z-index--negative'>
					<video
						src={RainVideo}
						loop
						muted
						autoPlay
						className='width--full object-fit--cover border-radius--xl'
					/>
				</div>
				<div className='flex width--full m--20'>
					<WeatherContent />
					<WeatherSidenav />
				</div>
			</div>
		</div>
	);
};

export default WeatherForecast;
