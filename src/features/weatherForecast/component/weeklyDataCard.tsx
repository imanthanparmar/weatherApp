interface Props {
	day: string;
	icon: string;
	maxTemp: number;
	minTemp: number;
}
const WeeklyDataCard = (props: Props) => {
	const { icon, maxTemp, minTemp, day } = props;
	return (
		<div className='p--20 text--center'>
			<p className='font-size--sm text--center'>{day}</p>
			<img src={icon} alt='' />
			<p className='text--center'>Max: {maxTemp}°C</p>
			<p className='text--center mt--5'>Min: {minTemp}°C</p>
		</div>
	);
};

export default WeeklyDataCard;
