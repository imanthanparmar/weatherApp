import { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

import { IForecastDayDataInterface, IWeatherForecastData } from '../interface/weatherForecast.interface';
import moment from 'moment';
import WeeklyDataCard from './weeklyDataCard';

interface Props {
	weatherData: IWeatherForecastData;
}
const WeeklyDataContainer = (props: Props) => {
	const { weatherData } = props;
	const [weeklyData, setWeeklyData] = useState<IForecastDayDataInterface[]>([]);

	useEffect(() => {
		setWeeklyData(weatherData.forecast.forecastday);
	}, [weatherData]);

	return (
		<div className='mt--20'>
			<div className='flex justify-content--between overflow--auto-x mt--20 p--10'>
				{!isEmpty(weeklyData) &&
					weeklyData.map((data: IForecastDayDataInterface) => {
						const day = moment(data?.date.split(' ')[0], 'YYYY-MM-DD').format('dddd').substring(0, 3);
						return (
							<WeeklyDataCard
								day={day}
								icon={data.day.condition.icon}
								maxTemp={data.day.maxtemp_c}
								minTemp={data.day.mintemp_c}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default WeeklyDataContainer;
