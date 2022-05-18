import styled from '@emotion/styled';

export const PitchingContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	justify-content: center;
`;

export const PitchingHeader = styled.h2`
	width: 100%;
	text-decoration-line: underline;
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const StatsHolder = styled.div`
	display: flex;
	flex-direction: column;
	border-width: 1px;
	border-color: rgb(229 231 235);
	padding-left: 0.5rem;
	padding-right: 0.5rem;
`;

export const Stat = styled.span`
	width: 5rem;
	text-align: center;
`;
