import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import WeatherForecastContainer from './features/weatherForecast/container/weatherForecastContainer';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/weatherForecast' element={<WeatherForecastContainer />} />
			</Routes>
		</Layout>
	);
};

export default App;
