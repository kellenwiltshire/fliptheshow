import { NextSeo } from 'next-seo';
import React from 'react';
import CardsList from '../components/Index/CardList';
import Hero from '../components/Index/Hero';

export default function Home() {
	return (
		<div>
			<NextSeo
				title='Flip The Show'
				description='MLB The Show player database and flipping tool. Flip MLB The Show Cards for profit. MLB The Show 22 is playable on Xbox and Playstation'
				canonical='https://flipthe.show/'
			/>
			<Hero />
			<CardsList />
		</div>
	);
}
