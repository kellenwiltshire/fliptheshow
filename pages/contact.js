import React from 'react';
import About from '../components/About';
import AboutSite from '../components/AboutSite';
import ContactMe from '../components/ContactMe';

function Contact() {
	return (
		<div className='w-screen lg:container flex justify-center flex-wrap'>
			<AboutSite />
			<ContactMe />
			<About />
		</div>
	);
}

export default Contact;
