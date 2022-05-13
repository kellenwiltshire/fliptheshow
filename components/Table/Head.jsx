import React from 'react';

export default function Heading({ name, id, handleSort }) {
	return (
		<th
			id={id}
			className='py-3.5 pl-4 pr-3 title-font bg-gray-100 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer'
			onClick={handleSort}
		>
			{name}
		</th>
	);
}
