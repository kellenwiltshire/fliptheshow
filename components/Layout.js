import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Flip The Show</title>
				<link rel='icon' href='/favicon.ico' />
				<meta description='Flip The Show MLB21 The Show 21 TheShow21 Baseball Cards Flipping Market Xbox Playstation' />
				<meta name='Flip The Show' />
				<meta lang='en' />
			</Head>
			<Navigation />
			<main className='mx-auto max-h-screen overflow-hidden overflow-y-scroll flex justify-center flex-row flex-wrap'>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
