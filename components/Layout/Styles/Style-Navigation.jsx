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

export const HomeLink = styled.a`
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	text-align: center;
	width: 100%;
	cursor: pointer;

	@media (min-width: 768px) {
		width: auto;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		margin-left: 0.5rem;
	}

	&:hover {
		color: rgb(17 24 39);
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-size: 1rem;
	line-height: 1.5rem;
	justify-content: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;

	@media (min-width: 768px) {
		border-color: rgb(156 163 175);
		margin-right: auto;
		margin-left: 1rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25erm;
		padding-left: 1rem;
		border-left-width: 1px;
	}
`;

export const NavLink = styled.a`
	margin-right: 1.25rem;
	cursor: pointer;

	&:hover {
		color: rgb(17 24 39);
	}
`;

export const DonateLink = styled.a`
	margin-top: 0.75rem;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}

	@media (min-width: 1024px) {
		margin-top: 0px;
	}
`;
