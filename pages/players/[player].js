import React from 'react';
import Card from '../../components/Player/Card/Card';
import PlayerTable from '../../components/Player/Card/PlayerTable';

export default function player({ cardData, listingData }) {
	console.log(cardData.name);
	return (
		<div className='mt-5'>
			<Card data={cardData} listingData={listingData} />
			<div className='hidden lg:flex justify-center'>
				<PlayerTable
					listingData={listingData.completed_orders}
					isSticky={true}
				/>
			</div>
			<div className='flex lg:hidden justify-center'>
				<PlayerTable
					listingData={listingData.completed_orders}
					isSticky={false}
				/>
			</div>
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
