import React from 'react';
import About from '../components/About';
import AboutSite from '../components/AboutSite';
import { NextSeo } from 'next-seo';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

function Contact() {
	return (
		<Container className='container'>
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
