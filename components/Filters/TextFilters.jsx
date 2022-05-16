import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
	border-width: 1px;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	font-size: 1rem;
	line-height: 1.5rem;
	width: 14rem;
	padding: 0.5rem;

	@media (min-width: 1024px) {
		padding-left: 0.75rem;
		padding-right: 2.5rem;
	}

	&:focus {
		outline: 2px solid transparent;
		border-color: rgb(99 201 241);
	}
`;

function TextFilters({ setValue, placeholder, defaultValue }) {
	return (
		<Input
			type='text'
			placeholder={placeholder}
			onChange={(e) => {
				e.target.value === '' ? setValue(defaultValue) : setValue(e.target.value);
			}}
		/>
	);
}

export default TextFilters;
