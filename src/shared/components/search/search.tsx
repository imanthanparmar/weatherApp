import { SearchIcon } from '../icons/icons';

interface Props {
	searchTitle: string | number;
	handleOnSearch: (value: React.ChangeEvent<HTMLInputElement>) => void;
	iconClassName?: string;
	className?: string;
	placeholder?: string;
	disabled?: boolean;
	handleOnEnter?: (key: React.KeyboardEvent<HTMLInputElement>) => void;
	clearable?: boolean;
	clearSearch?: () => void;
}
const Search = (props: Props) => {
	const { searchTitle, handleOnSearch, className, placeholder, iconClassName, disabled, handleOnEnter } = props;
	return (
		<div className='position--relative'>
			<div className={`${iconClassName ? iconClassName : 'search-icon position--absolute mr-10'}`}>
				<SearchIcon />
			</div>
			<input
				className={`${className ? className : 'search-input'}`}
				type='search'
				name=''
				id=''
				defaultValue={searchTitle}
				placeholder={`${placeholder ? placeholder : 'Search'}`}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnSearch(e)}
				disabled={disabled}
				onKeyUp={(event) => {
					handleOnEnter && handleOnEnter(event);
				}}
			/>
		</div>
	);
};

export default Search;
