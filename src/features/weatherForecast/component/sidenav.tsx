import { useMemo } from 'react';
import Lottie from 'react-lottie';
import moment from 'moment';

import { HumidityIcon } from 'shared/components/icons/icons';
import sunnyDay from 'shared/lottieAnimations/sunnyDay.json';

import { IWeatherForecastData } from '../interface/weatherForecast.interface';

interface Props {
	weatherData: IWeatherForecastData;
}
const WeatherSideNav = (props: Props) => {
	const { weatherData } = props;
	const defaultOptions = useMemo(() => {
		return {
			loop: true,
			autoplay: true,
			animationData: sunnyDay,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};
	}, []);
	const day = moment(weatherData?.current?.last_updated.split(' ')[0], 'YYYY-MM-DD').format('dddd');
	const time = moment.unix(Number(weatherData?.current?.last_updated_epoch)).format('LT');
	return (
		<>
			<div>
				<div style={{ width: '100%' }} className='m--0-auto mt--20'>
					<Lottie options={defaultOptions} height={300} />
				</div>
				<h1 className='font-size--64 font--light text--center'>
					{weatherData.current.temp_c}
					<sup className='font-size--50 font--light'>°C</sup>
				</h1>
				<p className='text--center mt--10 font-size--lg font--medium'>
					{weatherData.location.name}, {weatherData.location.country}
				</p>
				<p className='text--center mt--10'>
					{day}, <span className='text--red'>{time}</span>
				</p>
			</div>
			<div className='text--center mt--25'>
				<div className='flex align-items--center justify-content--center'>
					<img src={weatherData.current.condition.icon} alt='' />
					<p>{weatherData.current.condition.text}</p>
				</div>
				<div className='flex align-items--center justify-content--center'>
					<span title='Humidity' className='cursor--pointer'>
						<HumidityIcon height='50' width='50' className='mr--10' />
					</span>
					<p>{weatherData.current.humidity} %</p>
				</div>
			</div>
		</>
	);
};

export default WeatherSideNav;
