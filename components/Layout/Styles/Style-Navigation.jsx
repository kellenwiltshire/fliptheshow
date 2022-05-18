import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const NavContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-top: 0.5rem;
	justify-content: center;

	width: 100%;
	@media (min-width: 640px) {
		max-width: 640px;
	}
	@media (min-width: 768px) {
		max-width: 768px;
	}
	@media (min-width: 1024px) {
		max-width: 1024px;
	}
	@media (min-width: 1280px) {
		max-width: 1280px;
	}
	@media (min-width: 1536px) {
		max-width: 1536px;
	}
`;
