import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import styled from '@emotion/styled';

export const Container = styled.main`
	margin-left: auto;
	margin-right: auto;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta description='Flip The Show MLB The Show 22 TheShow 22 Baseball Cards Flipping Market Xbox Playstation' />
				<meta name='Flip The Show' />
				<meta lang='en' />
			</Head>
			<Navigation />
			<Container>{children}</Container>
			<Footer />
		</div>
	);
}

export default Layout;
