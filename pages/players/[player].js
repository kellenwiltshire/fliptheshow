import React from 'react';
import Card from '../../components/Player/Card/Card';

export default function player({ cardData, listingData }) {
	return (
		<div className='mt-5'>
			<Card data={cardData} listingData={listingData} />
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const uuid = query.player;
	const res = await fetch(
		`https://mlb21.theshow.com/apis/item.json?uuid=${uuid}`,
	);
	const cardData = await res.json();

	const nextres = await fetch(
		`https://mlb21.theshow.com/apis/listing.json?uuid=${uuid}`,
	);

	const listingData = await nextres.json();

	return {
		props: { cardData, listingData },
	};
}
