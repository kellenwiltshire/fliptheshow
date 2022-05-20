import styled from '@emotion/styled';

export const Form = styled.form`
	background-color: white;
	color: rgb(75 85 99);
	display: none;
	height: 6rem;
	margin-top: 0.5rem;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	@media (min-width: 1024px) {
		display: flex;
	}
`;

export const Holder = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.25rem;
`;

export const DefaultButton = styled.button`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	color: white;
	background-color: rgb(99 102 241);
	border-width: 0;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 2rem;
	padding-right: 2rem;
	border-radius: 0.25rem;
	font-size: 1.125rem;
	line-height: 1.75rem;

	&:hover {
		background-color: rgb(79 70 229);
	}

	&:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
`;

export const ButtonHolder = styled.div`
	margin-top: 1rem;
	width: 100%;
`;

export const MenuButton = styled.button`
	color: white;
	cursor: pointer;
	font-size: 1.25rem;
	line-height: 1;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	border-width: 1px;
	border-style: solid;
	border-color: transparent;
	border-radius: 0.25rem;
	background-color: transparent;
	display: block;
	background-color: rgb(79 70 229);
	--tw-bg-opacity: 0.75;
	margin: 1.25rem;
	margin-left: auto;

	@media (min-width: 1024px) {
		display: none;
	}
`;

export const MobileForm = styled.form`
	color: rgb(75 85 99);
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	background-color: white;
	margin-top: 0.5rem;

	@media (min-width: 1024px) {
		display: none;
	}
`;

export const MobileFormDiv = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;

	@media (mid-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-rows: repeat(2, minmax(0, 1fr));
	}
`;

export const TextHolder = styled.div`
	grid-row: span 2 / span 2;
	display: flex;
	flex-direction: column;
	width: 14rem;
`;

export const SelectHolder = styled.div`
	display: flex;
	width: 14rem;
	grid-column: span 1 / span 1;
`;
