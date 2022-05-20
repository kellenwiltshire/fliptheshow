import React from 'react';
import styled from '@emotion/styled';

const TableHeader = styled.th`
	padding-top: 0.875rem;
	padding-bottom: 0.875rem;
	padding-left: 1rem;
	padding-right: 0.75rem;
	background-color: rgb(243 244 246);
	text-align: left;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 600;
	color: rgb(17 24 39);
	cursor: pointer;
	display: ${(props) =>
		props.id === 'team' || props.id === 'rarity' || props.id === 'series' ? 'none' : 'table-cell'};
	@media (min-width: 640px) {
		padding-left: 1.5rem;
		display: table-cell;
	}
`;

export default function Heading({ name, id, handleSort }) {
	return (
		<TableHeader id={id} onClick={handleSort}>
			{name}
		</TableHeader>
	);
}
