import { NextSeo } from 'next-seo';
import React from 'react';
import Cards from '../components/Index/Cards';
import Hero from '../components/Index/Hero';

export default function Home() {
	return (
		<div>
			<NextSeo
				title='Flip The Show'
				description='Flip The Show is an online marketplace tool to see the real time value for Diamond Dynasty cards in MLB The Show 22 on Xbox and Playstation'
				canonical='https://flipthe.show/'
			/>
			<Hero />
			<Cards />
		</div>
	);
}
