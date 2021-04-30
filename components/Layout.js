import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Flip The Show</title>
				<link rel='icon' href='/favicon.ico' />
				{/* <meta description='We-Made-It We Made It Newcastle Ontario Homemade Handmade Decor Boutique Local Clarington Canada Bowmanville Durham Oshawa' />
				<meta name='We Made It Local Handmade Boutique' /> */}
				<meta lang='en' />
			</Head>
			<Navigation />
			<main className='mx-auto min-h-screen overflow-hidden overflow-y-scroll flex justify-center flex-row flex-wrap'>
				{children}
			</main>
		</div>
	);
}

export default Layout;
