import { useState } from 'react';

import { IWeatherForecastData } from '../interface/weatherForecast.interface';
import HourlyDataContainer from './hourlyDataContainer';
import TopHeader from './topHeader';
import WeeklyDataContainer from './weeklyDataContainer';
import TodayHighlight from './todayHighlightComponent';
import ChartComponet from './chartComponent';

interface Props {
	weatherData: IWeatherForecastData;
}
const WeatherMainContent = (props: Props) => {
	const { weatherData } = props;
	const [selectedId, setSelecedId] = useState(0);
	const [selectedTab, setSelectedTab] = useState('Today');
	return (
		<div className='height--full'>
			<div className='flex width--full'>
				<TopHeader setSelecedId={setSelecedId} selectedId={selectedId} setSelectedTab={setSelectedTab} />
			</div>
			<div className='hourly-container width--full'>
				{selectedTab === 'Today' && <HourlyDataContainer weatherData={weatherData} />}
				{selectedTab === 'Week' && <WeeklyDataContainer weatherData={weatherData} />}
			</div>
			<div className=' overflow--auto-y height--full'>
				<TodayHighlight weatherData={weatherData} />
				<div className='chart-container height--90 mt--30'>
					<ChartComponet weatherData={weatherData} />
				</div>
			</div>
		</div>
	);
};

export default WeatherMainContent;
