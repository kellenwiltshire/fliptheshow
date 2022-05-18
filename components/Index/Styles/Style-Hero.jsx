import styled from '@emotion/styled';

export const Main = styled.main`
	position: relative;
	margin-top: 0.5rem;
`;

export const AbsoluteDiv = styled.div`
	position: absolute;
	left: 0px;
	right: 0px;
	bottom: 0px;
	height: 50%;
`;

export const Container = styled.div`
	max-width: 80rem;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		overflow: hidden;
		border-radius: 1rem;
		position: relative;
	}
`;

export const ImageHolder = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
`;

export const HeroImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const ImageBlend = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	background-color: rgb(67 56 202);
	mix-blend-mode: multiply;
`;

export const TextHolder = styled.div`
	position: relative;
	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 6rem;
		padding-bottom: 6rem;
	}

	@media (min-width: 1024px) {
		padding-top: 8rem;
		padding-bottom: 8rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const Header = styled.h1`
	text-align: center;
	font-size: 2.25rem;
	line-height: 2.5rem;
	font-weight: 800;
	letter-spacing: -0.025rem;

	@media (min-width: 640px) {
		font-size: 3rem;
		line-height: 1;
	}
	@media (min-width: 1024px) {
		font-size: 3.75rem;
		line-height: 1;
	}
`;

export const SubText = styled.p`
	margin-top: 1.5rem;
	max-width: 32rem;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	font-size: 1.25rem;
	line-height: 1.75rem;
	color: rgb(199 210 254);

	@media (min-width: 640px) {
		max-width: 48rem;
	}
`;
