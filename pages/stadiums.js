import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import FilterForm from '../components/Filters/FilterForm';
import Table from '../components/Layout/Table';
import { filterByPrice, filterByRarity, filterByTeam, filterByText } from '../utils/filterFunctions';
import useSWR from 'swr';
import { getProfit, removeZeroItems } from '../utils/helperFunctions';

export default function Stadiums({ items }) {
	const [minSellPrice, setMinSellPrice] = useState(0);
	const [maxSellPrice, setMaxSellPrice] = useState(500000);
	const [minBuyPrice, setMinBuyPrice] = useState(0);
	const [maxBuyPrice, setMaxBuyPrice] = useState(500000);
	const [rarity, setRarity] = useState('');
	const [team, setTeam] = useState('');
	const [series, setSeries] = useState('');
	const [textFilter, setTextFilter] = useState('');
	const isPlayer = false;
	const isTeam = true;
	const [updatedItems, setUpdatedItems] = useState(items);
	const [lastUpdated, setLastUpdated] = useState();

	const [sortedItems, setSortedItems] = useState(items);
	const [filteredItems, setFilteredItems] = useState(items);

	const fetcher = (url) =>
		fetch(url)
			.then((r) => r.json())
			.then((data) => setUpdatedItems(data));

	useSWR('/api/requestStadiums', fetcher, {
		refreshInterval: 30000,
	});

	useEffect(() => {
		const date = new Date();
		const updated = `${date.getHours()}:${date.getMinutes()}:${('0' + date.getSeconds()).slice(-2)}`;
		if (updatedItems) {
			let filteredList = filterByPrice(updatedItems, minBuyPrice, minSellPrice, maxBuyPrice, maxSellPrice);
			filteredList = filterByRarity(filteredList, rarity);
			filteredList = filterByTeam(filteredList, team);
			filteredList = filterByText(filteredList, textFilter);
			setSortedItems(filteredList);
			setFilteredItems(filteredList);
			setLastUpdated(updated);
		} else {
			let filteredList = filterByPrice(items, minBuyPrice, minSellPrice, maxBuyPrice, maxSellPrice);
			filteredList = filterByRarity(filteredList, rarity);
			filteredList = filterByTeam(filteredList, team);
			filteredList = filterByText(filteredList, textFilter);
			setSortedItems(filteredList);
			setFilteredItems(filteredList);
		}
	}, [minSellPrice, maxSellPrice, minBuyPrice, maxBuyPrice, rarity, team, series, updatedItems, textFilter]);

	return (
		<div className='lg:w-2/3 w-full mx-auto'>
			<NextSeo
				title='Flip The Show | Stadiums'
				description='Flip The Show is an online marketplace tool to see the real time value for Diamond Dynasty cards in MLB The Show 23 on Xbox and Playstation'
				canonical='https://flipthe.show/stadiums'
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
					items={updatedItems}
					filteredItems={filteredItems}
					setTextFilter={setTextFilter}
					placeholder='Search Stadiums'
				/>
			</div>
			<div>
				<p className='text-right'>Last Updated: {lastUpdated} </p>
				<Table sortedItems={sortedItems} setSortedItems={setSortedItems} isPlayer={isPlayer} isTeam={isTeam} />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	console.log('Stadium Revalidate');
	const recursiveGetData = async (page = 1) => {
		const res = await fetch(`https://mlb22.theshow.com/apis/listings.json?type=stadium&page=${page}`);
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
	if (items.length) {
		for (let i = 0; i < items.length; i++) {
			items[i].profit = Math.floor(getProfit(items[i].best_buy_price, items[i].best_sell_price));
		}
	}
	items = removeZeroItems(items);
	return {
		props: { items },
		revalidate: 1,
	};
}
