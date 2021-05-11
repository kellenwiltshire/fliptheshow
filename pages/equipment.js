import React, { useEffect, useState } from 'react';
import FilterForm from '../components/Filters/FilterForm';
import Head from 'next/head';
import Table from '../components/Layout/Table';

export default function Equipment({ items }) {
	const [sortedItems, setSortedItems] = useState(items);
	const [filteredItems, setFilteredItems] = useState(items);
	const initialItems = items;
	const [minSellPrice, setMinSellPrice] = useState(0);
	const [maxSellPrice, setMaxSellPrice] = useState(500000);
	const [minBuyPrice, setMinBuyPrice] = useState(0);
	const [maxBuyPrice, setMaxBuyPrice] = useState(500000);
	const [rarity, setRarity] = useState('');
	const [team, setTeam] = useState('');
	const [series, setSeries] = useState('');
	const isPlayer = false;
	const isTeam = false;

	const displayCurrentTime = () => {
		const date = new Date();
		let hours =
			date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours();
		let am_pm = date.getUTCHours() >= 12 ? 'PM' : 'AM';
		hours = hours < 10 ? '0' + hours : hours;
		let minutes =
			date.getUTCMinutes() < 10
				? '0' + date.getUTCMinutes()
				: date.getUTCMinutes();
		let seconds =
			date.getUTCSeconds() < 10
				? '0' + date.getUTCSeconds()
				: date.getUTCSeconds();
		if (hours) {
			if (hours === 1 || hours === 12) {
				if (hours === 1) {
					hours = 12;
				} else if (hours === 12) {
					hours = 11;
					if (am_pm === 'PM') {
						am_pm = 'AM';
					} else {
						am_pm = 'PM';
					}
				}
			} else {
				hours = hours - 1;
			}
		}
		const time = hours + ':' + minutes + ':' + seconds + ' ' + am_pm;
		return time;
	};

	const date = new Date();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();
	const time = displayCurrentTime();
	let fullTime = `${month}/${day}/${year} ${time}`;
	fullTime = fullTime.split(' ');

	const convertTime12To24 = (time, modifier) => {
		let [hours, minutes, seconds] = time.split(':');

		if (hours === '12') {
			hours = '00';
		}

		if (modifier === 'PM') {
			hours = parseInt(hours, 10) + 12;
		}

		return `${hours}:${minutes}:${seconds}`;
	};

	const determineNumOrdersPerHours = () => {
		for (let i = 0; i < sortedItems.length; i++) {
			let bestBuyLastHour = 500000;
			let bestSellLastHour = 0;
			sortedItems[i].additionalData.orderPerHour = [];
			sortedItems[i].additionalData.bestBuyLastHour = 0;
			sortedItems[i].additionalData.completed_orders.map((order) => {
				let orderTime = order.date.split(' ');
				let convertedTime = convertTime12To24(orderTime[1], orderTime[2]);
				let convertedTestTime = convertTime12To24(fullTime[1], fullTime[2]);
				if (convertedTime > convertedTestTime) {
					sortedItems[i].additionalData.orderPerHour.push(order);
					const fixedNum = order.price.split(',').join('');
					if (fixedNum >= bestSellLastHour) {
						bestSellLastHour = fixedNum;
					}
					if (fixedNum <= bestBuyLastHour) {
						bestBuyLastHour = fixedNum;
					}
				} else {
					return;
				}
			});
			sortedItems[i].additionalData.bestBuyLastHour = bestBuyLastHour;
			sortedItems[i].additionalData.bestSellLastHour = bestSellLastHour;
		}
	};

	useEffect(() => {
		determineNumOrdersPerHours();
	}, []);

	useEffect(() => {
		let filteredList = initialItems.filter((item) => {
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
			if (team === '' || team === 'Team') {
				return item;
			} else {
				return item.item.team === team;
			}
		});
		setSortedItems(filteredList);
		setFilteredItems(filteredList);
	}, [minSellPrice, maxSellPrice, minBuyPrice, maxBuyPrice, rarity, team]);

	return (
		<div className='lg:w-2/3 w-full mx-auto'>
			<Head>
				<title>Flip The Show | Equipment</title>
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
				items={items}
				filteredItems={filteredItems}
				placeholder='Search Equipment'
			/>
			<div className='hidden lg:block'>
				<Table
					sortedItems={sortedItems}
					setSortedItems={setSortedItems}
					isPlayer={isPlayer}
					isSticky={true}
				/>
			</div>
			<div className='block lg:hidden'>
				<Table
					sortedItems={sortedItems}
					setSortedItems={setSortedItems}
					isPlayer={isPlayer}
					isSticky={false}
				/>
			</div>
		</div>
	);
}

export async function getStaticProps(props) {
	console.log('Equipment Revalidate');
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
				console.log(error);
			}
		}
		return items;
	};
	const recursiveGetData = async (page = 1) => {
		const res = await fetch(
			`https://mlb21.theshow.com/apis/listings.json?type=equipment&page=${page}`,
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
