import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	display: flex;
	justify-content: center;
	margin-top: 0.75rem;
	margin-bottom: 0.75rem;
	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

const AboutContainer = styled.div`
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

	@media (min-width: 640px) {
		font-size: 1.25rem;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	@media (min-width: 640px) {
		width: 24rem;
		padding: 1.25rem;
	}
`;

function About() {
	return (
		<Container className='container'>
			<FlexContainer>
				<AboutContainer>
					<Header>Kellen Wiltshire</Header>
					<Paragraph>
						I am a passionate full-stack developer specializing in all aspects of Web Development looking for the next
						step in my career. I have the experience to create beautiful and functional websites combining the latest
						frameworks and technologies. I have experience in React, Javascript/Typescript, TailwindCSS, Styled
						Components, as well as traditional HTML5 and CSS3. I am currently look for a new Web Development career
						opportunity!
					</Paragraph>

					<Paragraph>
						See more of my work at <a href='kellenwiltshire.com'>KellenWiltshire.com</a>
					</Paragraph>
				</AboutContainer>

				<ImageContainer>
					<img
						style={{ borderRadius: '50%' }}
						src='https://avatars.githubusercontent.com/u/31140634?v=4'
						alt='Profile Image'
					/>
				</ImageContainer>
			</FlexContainer>
		</Container>
	);
}

export default About;
