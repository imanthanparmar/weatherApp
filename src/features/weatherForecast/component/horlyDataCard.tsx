interface Props {
	time: string;
	icon: string;
	temp: number;
}
const HourlyDataCard = (props: Props) => {
	const { icon, temp, time } = props;
	return (
		<div className='p--20 text--center'>
			<p className='font-size--sm'>{time}</p>
			<img src={icon} alt='' />
			<p>{temp}°C</p>
		</div>
	);
};

export default HourlyDataCard;
