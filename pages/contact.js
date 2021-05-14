import React from 'react';
import About from '../components/About';
import AboutSite from '../components/AboutSite';
import ContactMe from '../components/ContactMe';
import Head from 'next/head';

function Contact() {
	return (
		<div className='w-screen lg:container flex justify-center flex-wrap'>
			<Head>
				<title>Flip The Show | Contact</title>
			</Head>
			<AboutSite />
			<ContactMe />
			<About />
		</div>
	);
}

export default Contact;
