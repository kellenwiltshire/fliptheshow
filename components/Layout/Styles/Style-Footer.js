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
	flex-direction: column;
	align-items: center;

	@media (min-width: 640px) {
		max-width: 640px;
		flex-direction: row;
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

export const TitleName = styled.p`
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

export const DeveloperText = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: rgb(107 114 128);
	margin-top: 1rem;

	@media (min-width: 640px) {
		margin-left: 1rem;
		padding-left: 1rem;
		border-left-width: 2px;
		border-color: rgb(229 231 235);
	}
`;

export const DeveloperLink = styled.a`
	color: rgb(75 85 99);
	margin-left: 0.25rem;
`;

export const GithubHolder = styled.span`
	display: inline-flex;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 1rem;

	@media (min-width: 640px) {
		margin-left: auto;
		margin-top: 0px;
		margin-bottom: 0px;
		justify-content: flex-start;
	}
`;

export const DonateLink = styled.a`
	margin-top: 0.5rem;

	@media (min-width: 768px) {
		margin-left: 2.5rem;
		margin-top: 0px;
	}
`;
