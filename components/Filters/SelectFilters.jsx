import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	font-size: 1rem;
	line-height: 1.5rem;
	width: 100%;

	appearance: none;
	border-radius: 1rem;
	margin: 0.25rem;

	@media (min-width: 1024px) {
		padding-left: 0.75rem;
		padding-right: 2.5rem;
	}
`;

function SelectFilters({ setValue, options, defaultValue }) {
	return (
		<Select
			onChange={(e) => (e.target.value === { defaultValue } ? setValue('') : setValue(e.target.value))}
			placeholder={defaultValue}
		>
			{options.map((item) => {
				return <option key={item}>{item}</option>;
			})}
		</Select>
	);
}

export default SelectFilters;
