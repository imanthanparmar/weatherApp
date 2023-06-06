import React, { useCallback, useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

import { API_KEY } from 'shared/constants/constants';
import HttpService from 'shared/services/http.service';
import Search from 'shared/components/search/search';
import { debounce } from 'shared/util/utility';

import WeatherSideNav from './sidenav';
import WeatherMainContent from './weatherMainContent';
import { IWeatherForecastData } from '../interface/weatherForecast.interface';
import { notify } from 'shared/components/notification/notification';

const WeatherForecast: React.FC = () => {
	const [weatherData, setWeatherData] = useState({} as IWeatherForecastData);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [loading, setLoading] = useState(false);
	const fetchForecastData = useCallback((searchWord?: string) => {
		setLoading(true);
		HttpService.get(
			`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${
				searchWord ? searchWord : 'Ahmedabad'
			}&days=07&aqi=no&alerts=no`
		)
			.then((response) => {
				setLoading(false);
				setWeatherData(response);
			})
			.catch((err) => {
				console.error(err);
				notify('Please enter  a valid city name', 'error');
				setLoading(false);
			});
	}, []);
	const handleOnSearch = debounce(
		useCallback((word: string) => {
			fetchForecastData(word);
		}, [])
	);

	useEffect(() => fetchForecastData(), []);
	return (
		<div className='main-container height--full-viewport flex'>
			<div className='sidenav-container overflow--auto-y overflow--hidden-x width--20 p--30'>
				<div className='search-container'>
					<Search
						searchTitle={''}
						handleOnSearch={(e: React.ChangeEvent<HTMLInputElement>) => handleOnSearch(e.target.value)}
						placeholder='Search for places...'
					/>
				</div>
				{!isEmpty(weatherData) && <WeatherSideNav weatherData={weatherData} />}
			</div>
			<div className='main-content__container width--70 p--30'>
				{!isEmpty(weatherData) && <WeatherMainContent weatherData={weatherData} />}
			</div>
		</div>
	);
};

export default WeatherForecast;
