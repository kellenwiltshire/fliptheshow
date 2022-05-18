import styled from '@emotion/styled';

export const CardContainer = styled.div`
	max-width: 100vw;
	display: flex;
`;

export const SecondaryContainer = styled.div`
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-top: 6rem;
	padding-bottom: 6rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	@media (min-width: 1024px) {
		width: 80%;
	}
`;

export const PlayerImage = styled.img`
	width: 100%;
	height: 24rem;
	object-fit: scale-down;
	border-radius: 0.25rem;

	@media (min-width: 1024px) {
		width: 33.33%;
		object-position: center;
	}
`;

export const DataContainer = styled.div`
	width: 100%;
	margin-top: 1.5rem;

	@media (min-width: 1024px) {
		width: 66.666%;
		padding-left: 2.5rem;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		margin-top: 0px;
	}
`;

export const Team = styled.h2`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: rgb(107 114 128);
	letter-spacing: 0.1em;
`;

export const Player = styled.h1`
	color: rgb(17 24 39);
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 500;
	margin-bottom: 0.25rem;
`;

export const PlayerData = styled.p`
	display: flex;
	flex-direction: row;
	color: rgb(75 85 99);
	margin-bottom: 0.25rem;
`;

export const BFData = styled.div`
	display: flex;
	flex-direction: row;
	color: rgb(31 41 55);
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

export const InfoContainer = styled.span`
	display: flex;
	flex-direction: column;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
`;

export const SellInfo = styled.div`
	color: rgb(31 41 55);
	display: flex;
	flex-direction: row;
	font-size: 1.125rem;
	line-height: 1.75rem;
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
	justify-content: center;
`;
