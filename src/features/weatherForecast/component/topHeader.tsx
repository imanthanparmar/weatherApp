interface IProps {
	setSelecedId: (value: number) => void;
	selectedId: number;
	setSelectedTab: (value: string) => void;
}
const TopHeader: React.FC<IProps> = (props) => {
	const { selectedId, setSelecedId, setSelectedTab } = props;
	return (
		<>
			{NAV_ARRAY.map((data: any) => {
				return (
					<p
						onClick={() => {
							setSelecedId(data.id);
							setSelectedTab(data.text);
						}}
						className={`mr--10 cursor--pointer pb--5 ${
							selectedId === data.id && 'top-header-title font--medium'
						}`}
					>
						{data.text}
					</p>
				);
			})}
		</>
	);
};

const NAV_ARRAY = [
	{
		id: 0,
		text: 'Today'
	},
	{
		id: 1,
		text: 'Week'
	}
];

export default TopHeader;
