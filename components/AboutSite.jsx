import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	padding-top: 5rem;
	display: flex;
	justify-content: center;
	margin-top: 0.75rem;
	margin-bottom: 0.75rem;
	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media (min-width: 1024px) {
		justify-content: space-between;
		width: 50%;
	}
`;

const Header = styled.h1`
	font-size: 1.875rem;
	line-height: 2.25rem;
	text-align: center;
	margin-bottom: 1.25rem;
	color: rgb(37 99 235);

	@media (min-width: 640px) {
		font-size: 3.75rem;
		line-height: 1;
		margin-bottom: 2.5rem;
	}
`;

const Paragraph = styled.p`
	font-size: 0.875rem;
	line-height: 1.625rem;
	padding-bottom: 1.25rem;
	text-align: center;

	@media (min-width: 640px) {
		font-size: 1.25rem;
	}
`;

function AboutSite() {
	return (
		<Container className='container'>
			<InnerContainer>
				<Header>Flip The Show</Header>
				<Paragraph>Welcome to FlipThe.Show!</Paragraph>
				<Paragraph>This site is dedicated to helping you get the best deal for your card in MLB The Show 22.</Paragraph>
				<Paragraph>
					Using the information on this site you can make sure that you don't buy a card for too much, or sell a card
					for too little. You can also use it to flip cards for great profits to make your Diamond Dynasty team
					unstoppable!
				</Paragraph>
			</InnerContainer>
		</Container>
	);
}

export default AboutSite;
