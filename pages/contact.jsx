import React from 'react';
import About from '../components/About';
import AboutSite from '../components/AboutSite';
import { NextSeo } from 'next-seo';
import styled from '@emotion/styled';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media (min-width: 640px) {
		max-width: 640px;
	}
	@media (min-width: 768px) {
		max-width: 768px;
	}

	@media (min-width: 1280px) {
		max-width: 1280px;
	}

	@media (min-width: 1536px) {
		max-width: 1536px;
	}
`;

function Contact() {
	return (
		<Container>
			<NextSeo
				title='Flip The Show | Contact'
				description='Flip The Show is an online marketplace tool to see the real time value for Diamond Dynasty cards in MLB The Show 22 on Xbox and Playstation'
				canonical='https://flipthe.show/contact'
			/>
			<AboutSite />
			<About />
		</Container>
	);
}

export default Contact;
