import React from 'react';

function SelectFilters({ setValue, options, defaultValue }) {
	return (
		<select
			className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base lg:pl-3 lg:pr-10 w-full'
			onChange={(e) => (e.target.value === { defaultValue } ? setValue('') : setValue(e.target.value))}
			placeholder={defaultValue}
		>
			{options.map((item) => {
				return <option key={item}>{item}</option>;
			})}
		</select>
	);
}

export default SelectFilters;
