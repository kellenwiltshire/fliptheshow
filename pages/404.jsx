import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: lightgray;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 1.25rem;
	padding-right: 1.25rem;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const InfoContainer = styled.div`
	max-width: 768px;
`;

const Button = styled.a`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	color: white;
	background-color: rgb(99 102 241);
	border-width: 0;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 2rem;
	padding-right: 2rem;
	border-radius: 0.25rem;
	font-size: 1.125rem;
	line-height: 1.75rem;
	cursor: pointer;

	&:hover {
		background-color: rgb(79 70 229);
	}

	&:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
`;

export default function Custom404() {
	useEffect(() => {
		const urlString = document.location.href;
		console.log('404 Error: ', urlString);
	});
	return (
		<Container>
			<InnerContainer className='container'>
				<InfoContainer>
					<h1>404</h1>
					<h3>Sorry we couldn&apos;t find this page.</h3>
					<p>
						You thought you hit a homerun but in the end it&apos;s just foul! Let&apos;s try to head back to the
						homepage and ready to swing again!
					</p>
					<Link href='/'>
						<Button>back to homepage</Button>
					</Link>
				</InfoContainer>
				<div style={{ maxWidth: '1024px' }}>
					<img src='/404.png' alt='404 Page Not Found' />
				</div>
			</InnerContainer>
		</Container>
	);
}
