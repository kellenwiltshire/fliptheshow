import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import FilterForm from '../components/Filters/FilterForm';
import Table from '../components/Layout/Table';
import {
	filterByPrice,
	filterByRarity,
	filterBySeries,
	filterByTeam,
	removeZeroItems,
} from '../utils/filterFunctions';
import useSWR from 'swr';

export default function Home({ items }) {
	const [minSellPrice, setMinSellPrice] = useState(0);
	const [maxSellPrice, setMaxSellPrice] = useState(500000);
	const [minBuyPrice, setMinBuyPrice] = useState(0);
	const [maxBuyPrice, setMaxBuyPrice] = useState(500000);
	const [rarity, setRarity] = useState('');
	const [team, setTeam] = useState('');
	const [series, setSeries] = useState('');
	const isPlayer = true;
	const isTeam = true;

	const [zeroItems, setZeroItems] = useState(removeZeroItems(items));

	const [sortedItems, setSortedItems] = useState(zeroItems);
	const [filteredItems, setFilteredItems] = useState(zeroItems);

	const recursiveGetData = async (page = 1) => {
		const res = await fetch(
			`https://mlb22.theshow.com/apis/listings.json?page=${page}`,
		);
		const data = await res.json();
		const listings = data.listings;
		if (data.total_pages > page) {
			return listings.concat(await recursiveGetData(page + 1));
		} else {
			return listings;
		}
	};

	const { data } = useSWR(recursiveGetData, { refreshInterval: 30000 });
	useEffect(() => {
		setZeroItems(removeZeroItems(data));
	}, [data]);

	useEffect(() => {
		let filteredList = filterByPrice(
			zeroItems,
			minBuyPrice,
			minSellPrice,
			maxBuyPrice,
			maxSellPrice,
		);
		filteredList = filterByRarity(filteredList, rarity);
		filteredList = filterByTeam(filteredList, team);
		filteredList = filterBySeries(filteredList, series);
		setSortedItems(filteredList);
		setFilteredItems(filteredList);
	}, [
		minSellPrice,
		maxSellPrice,
		minBuyPrice,
		maxBuyPrice,
		rarity,
		team,
		series,
		zeroItems,
	]);

	return (
		<div className='lg:w-2/3 w-full mx-auto'>
			<NextSeo
				title='Flip The Show'
				description='Flip The Show is an online marketplace tool to see the real time value for Diamond Dynasty cards in MLB The Show 23 on Xbox and Playstation'
				canonical='https://flipthe.show/'
			/>
			<div className='mb-24'>
				<FilterForm
					setMinBuyPrice={setMinBuyPrice}
					setMaxBuyPrice={setMaxBuyPrice}
					setMinSellPrice={setMinSellPrice}
					setMaxSellPrice={setMaxSellPrice}
					setRarity={setRarity}
					setTeam={setTeam}
					setSeries={setSeries}
					setSortedItems={setSortedItems}
					items={zeroItems}
					filteredItems={filteredItems}
					placeholder='Search Players'
				/>
			</div>
			<div className='hidden lg:block'>
				<Table
					sortedItems={sortedItems}
					setSortedItems={setSortedItems}
					isTeam={isTeam}
					isPlayer={isPlayer}
				/>
			</div>
			<div className='block lg:hidden'>
				<Table
					sortedItems={sortedItems}
					setSortedItems={setSortedItems}
					isPlayer={isPlayer}
					isTeam={isTeam}
				/>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	console.log('Players Revalidate');

	const recursiveGetData = async (page = 1) => {
		const res = await fetch(
			`https://mlb22.theshow.com/apis/listings.json?page=${page}`,
		);
		const data = await res.json();
		const listings = data.listings;
		if (data.total_pages > page) {
			return listings.concat(await recursiveGetData(page + 1));
		} else {
			return listings;
		}
	};

	let items = [];
	items = await recursiveGetData();

	return {
		props: { items },
		revalidate: 1,
	};
}
