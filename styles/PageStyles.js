import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 1024px) {
		width: 66.666667%;
	}
`;

export const FilterContainer = styled.div`
	margin-bottom: 3rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;

	@media (min-width: 1024px) {
		justify-content: center;
	}
`;
