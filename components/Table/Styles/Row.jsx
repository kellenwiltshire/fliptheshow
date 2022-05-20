import styled from '@emotion/styled';

export const SROnly = styled.dt`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
`;

export const MobileData = styled.dd`
	margin-top: 0.25rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: rgb(55 65 81);
`;

export const NormalDataWithHidden = styled.td`
	border-top-width: 2px;
	border-color: rgb(229 231 235);
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	display: none;

	@media (min-width: 640px) {
		display: table-cell;
	}
`;

export const NormalData = styled.td`
	border-top-width: 2px;
	border-color: rgb(229 231 235);
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
`;

export const NameData = styled.td`
	border-top-width: 2px;
	border-color: rgb(229 231 235);
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

export const NameLink = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
