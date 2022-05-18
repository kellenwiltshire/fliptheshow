import styled from '@emotion/styled';

export const FooterStyle = styled.footer`
	color: rgb(75 85 99);
	width: 100%;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: 640px) {
		max-width: 640px;
		flex-direction: row;
	}
	@media (min-width: 768px) {
		max-width: 768px;
	}
`;

export const TitleName = styled.p`
	display: flex;
	font-weight: 500;
	align-items: center;
	justify-content: center;
	color: rgb(17 24 39);
	margin-left: 0.75rem;
	font-size: 1.25rem;
	line-height: 1.75rem;

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;
