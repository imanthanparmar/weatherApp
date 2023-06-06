import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IForecastDayDataInterface, IWeatherForecastData } from '../interface/weatherForecast.interface';

interface IProps {
	weatherData: IWeatherForecastData;
}

const ChartComponet: React.FC<IProps> = (props) => {
	const { weatherData } = props;
	console.log('weatherData inside chart :>> ', weatherData);
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const
			},
			title: {
				display: true,
				text: 'Temprature and huminity chart'
			}
		}
	};

	const labels = weatherData.forecast.forecastday.map((data: IForecastDayDataInterface) => {
		return data.date.split('-')[2];
	});

	const tempratureData = weatherData.forecast.forecastday.map((data: IForecastDayDataInterface) => {
		return data.day.maxtemp_c;
	});

	const humidityData = weatherData.forecast.forecastday.map((data: IForecastDayDataInterface) => {
		return data.day.avghumidity;
	});

	const data = {
		labels,
		datasets: [
			{
				label: 'Temprature',
				data: tempratureData,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: 'Humidity',
				data: humidityData,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	};

	return <Line options={options} data={data} />;
};

export default ChartComponet;
