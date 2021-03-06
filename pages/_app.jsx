import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { normalizeStyles } from '../styles/styles';

//TODO Update Pagination - Infinite Scroll?

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<Layout>
			{normalizeStyles}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
