import styled from '@emotion/styled';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Table = styled.table`
	table-layout: auto;
	width: 100%;
	text-align: left;
	border-width: 2px;
	border-color: rgb(243 244 246);
`;

export const TableHeader = styled.th`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	letter-spacing: 0.05em;
	font-weight: 500;
	color: rgb(17 24 38);
	font-size: 0.875rem;
	line-height: 1.25rem;
	background-color: rgb(243 244 246);
`;

export const TableData = styled.td`
	border-top-width: 2px;
	border-color: rgb(229 231 235);
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
`;
