// import { useCallback } from 'react';

import { IWeatherForecastData } from '../interface/weatherForecast.interface';
import ReactSpeedometer from 'react-d3-speedometer';
import { SunriseIcon, SunsetIcon, WindDirectionIcon } from 'shared/components/icons/icons';

interface Props {
	weatherData: IWeatherForecastData;
}
const TodayHighlight = (props: Props) => {
	const { weatherData } = props;
	return (
		<>
			<div className='today-highlights__container mt--30'>
				<h5 className='font--medium'>Today's Highlights</h5>
				<div className='flex flex--wrap mt--30'>
					<div className='p--10 width--33 card max-width--320px ml--20 mt--20'>
						<h6 className='no--margin'>UV index</h6>
						<div className='text--center'>
							<ReactSpeedometer
								maxValue={20}
								value={weatherData.current.uv}
								needleColor='white'
								startColor='yellow'
								segments={10}
								endColor='red'
								height={180}
							/>
						</div>
					</div>
					<div className='p--10 width--33 card max-width--320px ml--20 mt--20'>
						<h6 className='no--margin'>Wind Status</h6>
						<h1 className='mt--30 font--regular'>{weatherData.current.wind_kph} km/h</h1>
						<div className='flex align-items--center'>
							<span>
								<WindDirectionIcon />
							</span>
							<p className='font-size--22'>{weatherData.current.wind_dir}</p>
						</div>
					</div>
					<div className='p--10 width--33 card max-width--320px ml--20 mt--20'>
						<h6 className='no--margin'>Sunrise & sunset</h6>
						<div className='p--10 mt--10 flex align-items--center justify-content--around'>
							<span>
								<SunriseIcon />
							</span>
							<h3 className='font--regular'>{weatherData.forecast.forecastday[0].astro.sunrise}</h3>
						</div>
						<div className='p--10 mt--10 flex align-items--center justify-content--around'>
							<span>
								<SunsetIcon />
							</span>
							<h3 className='font--regular'>{weatherData.forecast.forecastday[0].astro.sunset}</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodayHighlight;
