import { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

import { IWeatherForecastData } from '../interface/weatherForecast.interface';
import { IHourInterface } from '../interface/weatherForecast.interface';
import HourlyDataCard from './horlyDataCard';

interface Props {
	weatherData: IWeatherForecastData;
}
const HourlyDataContainer = (props: Props) => {
	const { weatherData } = props;
	const [hourlyData, setHourlyData] = useState<IHourInterface[]>([]);

	useEffect(() => {
		setHourlyData(weatherData.forecast.forecastday[0].hour);
	}, [weatherData]);

	return (
		<div className='mt--20'>
			<div className='flex overflow--auto-x mt--20 p--10'>
				{!isEmpty(hourlyData) &&
					hourlyData.map((data: IHourInterface) => {
						const time = moment.unix(Number(data?.time_epoch)).format('LT');
						return (
							<HourlyDataCard
								key={data.time_epoch}
								time={time}
								icon={data.condition.icon}
								temp={data.temp_c}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default HourlyDataContainer;
