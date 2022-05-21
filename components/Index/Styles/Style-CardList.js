import styled from '@emotion/styled';

export const Holder = styled.div`
	margin-left: auto;
	margin-right: auto;

	padding-top: 3rem;
	padding-bottom: 3rem;

	padding-right: 1rem;
	padding-left: 1rem;

	max-width: 80rem;

	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media (min-width: 1024px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const TitleHolder = styled.div`
	@media (min-width: 768px) {
		max-width: 36rem;
	}

	@media (min-width: 1024px) {
		max-width: 48rem;
	}

	@media (min-width: 1280px) {
		max-width: none;
	}
`;

export const Header = styled.h2`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 800;
	letter-spacing: -0.025rem;

	@media (min-width: 640px) {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}
`;

export const List = styled.ul`
	list-style: none;
	@media (min-width: 640px) {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 1.5rem;
		row-gap: 3rem;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		column-gap: 2rem;
	}
`;
