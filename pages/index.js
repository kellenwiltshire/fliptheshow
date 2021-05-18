import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import FilterForm from '../components/Filters/FilterForm';
import Table from '../components/Layout/Table';

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

	const removeZeroItems = () => {
		let zeroItems = [];
		items.map((item) => {
			if (item.best_buy_price > 0) {
				zeroItems.push(item);
			}
		});
		return zeroItems;
	};

	const zeroItems = removeZeroItems();
	const [sortedItems, setSortedItems] = useState(zeroItems);
	const [filteredItems, setFilteredItems] = useState(zeroItems);

	const date = new Date();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();
	const hour = date.getUTCHours();
	const min = date.getUTCMinutes();
	const sec = date.getUTCSeconds();
	let currentTime = `${month}/${day}/${year} ${hour}:${min}:${sec}`;

	const DetermineNumOrdersPerHour = () => {
		for (let i = 0; i < sortedItems.length; i++) {
			let bestBuyLastHour = 500000;
			let bestSellLastHour = 0;

			if (sortedItems[i].additionalData) {
				if (sortedItems[i].additionalData.completed_orders.length) {
					const orderLength =
						sortedItems[i].additionalData.completed_orders.length - 1;

					sortedItems[i].additionalData.orderPerMinute = 0;
					sortedItems[i].additionalData.bestBuyLastHour = 0;

					const oldestOrder =
						sortedItems[i].additionalData.completed_orders[orderLength].date;
					const oldestOrderDate = new Date(oldestOrder);
					const currentDate = new Date(currentTime);
					const timeDifference = (currentDate - oldestOrderDate) / 1000;
					const salesPerSecond = timeDifference / orderLength;
					const salesPerMinute = (salesPerSecond / 60).toFixed(2);

					sortedItems[i].additionalData.salesPerMinute = salesPerMinute;

					sortedItems[i].additionalData.completed_orders.map((order) => {
						const fixedNum = order.price.split(',').join('');
						if (fixedNum >= bestSellLastHour) {
							bestSellLastHour = fixedNum;
						}
						if (fixedNum <= bestBuyLastHour) {
							bestBuyLastHour = fixedNum;
						}
					});
					sortedItems[i].additionalData.bestBuyLastHour = bestBuyLastHour;
					sortedItems[i].additionalData.bestSellLastHour = bestSellLastHour;
					sortedItems[i].additionalData.profitPerMin = (
						(sortedItems[i].best_sell_price * 0.9 -
							sortedItems[i].best_buy_price) *
						sortedItems[i].additionalData.salesPerMinute
					).toFixed(2);
				} else {
					sortedItems[i].additionalData.bestBuyLastHour = 0;
					sortedItems[i].additionalData.bestSellLastHour = 0;
					sortedItems[i].additionalData.profitPerMin = 0;
					sortedItems[i].additionalData.salesPerMinute = 0;
				}
			} else {
				sortedItems[i].additionalData.bestBuyLastHour = 0;
				sortedItems[i].additionalData.bestSellLastHour = 0;
				sortedItems[i].additionalData.profitPerMin = 0;
				sortedItems[i].additionalData.salesPerMinute = 0;
			}
		}
	};

	useEffect(() => {
		DetermineNumOrdersPerHour();
	}, []);

	useEffect(() => {
		let filteredList = zeroItems.filter((item) => {
			return (
				item.best_buy_price >= minBuyPrice &&
				item.best_buy_price <= maxBuyPrice &&
				item.best_sell_price >= minSellPrice &&
				item.best_sell_price <= maxSellPrice
			);
		});
		filteredList = filteredList.filter((item) => {
			if (rarity === '' || rarity === 'Rarity') {
				return item;
			} else {
				return item.item.rarity === rarity;
			}
		});

		filteredList = filteredList.filter((item) => {
			if (series === '' || series === 'Series') {
				return item;
			} else {
				return item.item.series === series;
			}
		});

		filteredList = filteredList.filter((item) => {
			if (team === '' || team === 'Team') {
				return item;
			} else {
				return item.item.team === team;
			}
		});
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
	]);

	return (
		<div className='lg:w-2/3 w-full mx-auto'>
			<Head>
				<title>Flip The Show | Players</title>
			</Head>
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

	const getItemData = async (items) => {
		for (let i = 0; i < items.length; i++) {
			const itemID = items[i].item.uuid;
			try {
				const res = await fetch(
					`https://mlb21.theshow.com/apis/listing.json?uuid=${itemID}`,
				);
				const data = await res.json();
				items[i].additionalData = data;
			} catch (error) {
				console.log(items[i], error);
			}
		}
		return items;
	};
	const recursiveGetData = async (page = 1) => {
		const res = await fetch(
			`https://mlb21.theshow.com/apis/listings.json?page=${page}`,
		);
		const data = await res.json();
		const listings = data.listings;
		if (data.total_pages > page) {
			return listings.concat(await recursiveGetData(page + 1));
		} else {
			return listings;
		}
	};

	let initialItems = [];
	initialItems = await recursiveGetData();
	let items = [];
	items = await getItemData(initialItems);

	return {
		props: { items },
		revalidate: 1,
	};
}
