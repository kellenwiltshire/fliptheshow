import styled from '@emotion/styled';

export const Form = styled.form`
	background-color: white;
	color: rgb(75 85 99);
	display: none;
	height: 6rem;
	margin-top: 0.5rem;

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
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
