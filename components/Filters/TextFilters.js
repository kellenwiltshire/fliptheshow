import React from 'react';

function TextFilters({ setValue, placeholder, defaultValue }) {
	return (
		<input
			className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base lg:pl-3 lg:pr-10 w-full p-2'
			type='text'
			placeholder={placeholder}
			onChange={(e) => {
				e.target.value === '' ? setValue(defaultValue) : setValue(e.target.value);
			}}
		/>
	);
}

export default TextFilters;
