import React from 'react';
import Card from '../../components/Player/Card/Card';
import PlayerTable from '../../components/Player/Card/PlayerTable';
import { NextSeo } from 'next-seo';

export default function player({ cardData, listingData }) {
	console.log(cardData.name);
	return (
		<div className='md:mt-5'>
			<NextSeo
				title={`Flip The Show | ${cardData.name}`}
				description='Flip The Show is an online marketplace tool to see the real time value for Diamond Dynasty cards in MLB The Show 22 on Xbox and Playstation'
				canonical={`https://flipthe.show/players/${cardData.uuid}`}
			/>
			<Card data={cardData} listingData={listingData} />
			<div className='flex justify-center'>
				<PlayerTable listingData={listingData.completed_orders} />
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const uuid = query.player;
	const res = await fetch(`https://mlb22.theshow.com/apis/item.json?uuid=${uuid}`);
	const cardData = await res.json();

	const nextres = await fetch(`https://mlb22.theshow.com/apis/listing.json?uuid=${uuid}`);

	const listingData = await nextres.json();

	return {
		props: { cardData, listingData },
	};
}
