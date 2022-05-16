import React from 'react';
import About from '../components/About';
import AboutSite from '../components/AboutSite';
import { NextSeo } from 'next-seo';

function Contact() {
	return (
		<div className='w-screen lg:container flex justify-center flex-wrap'>
			<NextSeo
				title='Flip The Show | Contact'
				description='Flip The Show is an online marketplace tool to see the real time value for Diamond Dynasty cards in MLB The Show 22 on Xbox and Playstation'
				canonical='https://flipthe.show/contact'
			/>
			<AboutSite />
			<About />
		</div>
	);
}

export default Contact;
