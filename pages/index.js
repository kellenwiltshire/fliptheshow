import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home({ items }) {
	const [sortedItems, setSortedItems] = useState(items);
	const [filteredItems, setFilteredItems] = useState(items);
	const initialItems = items;
	const [sort, setSort] = useState('');
	const [sortSwitch, setSortSwitch] = useState(false);
	const [minSellPrice, setMinSellPrice] = useState(0);
	const [maxSellPrice, setMaxSellPrice] = useState(500000);
	const [minBuyPrice, setMinBuyPrice] = useState(0);
	const [maxBuyPrice, setMaxBuyPrice] = useState(500000);
	const [rarity, setRarity] = useState('');
	const [series, setSeries] = useState('');
	const [team, setTeam] = useState('');
	const [minOvr, setMinOvr] = useState(0);
	const [maxOvr, setMaxOvr] = useState(100);

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

	console.log(sortedItems);
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
			sortedItems[i].additionalData.orderPerHour = [];
			sortedItems[i].additionalData.completed_orders.map((order) => {
				let orderTime = order.date.split(' ');
				let convertedTime = convertTime12To24(orderTime[1], orderTime[2]);
				let convertedTestTime = convertTime12To24(fullTime[1], fullTime[2]);
				if (convertedTime > convertedTestTime) {
					sortedItems[i].additionalData.orderPerHour.push(order);
				} else {
					return;
				}
			});
		}
	};

	const sortTable = (e) => {
		e.preventDefault();
		setSort(e.target.textContent);
		let newItems = sortedItems;
		//! Sort By Name
		if (e.target.textContent === 'Name') {
			newItems = newItems.sort((a, b) => {
				const aLower = a.listing_name.toLowerCase();
				const bLower = b.listing_name.toLowerCase();
				if (aLower < bLower) {
					return -1;
				} else if (aLower > bLower) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (e.target.textContent === 'Overall') {
			newItems = newItems.sort((a, b) => {
				return a.item.ovr - b.item.ovr;
			});
		} else if (e.target.textContent === 'Series') {
			newItems = newItems.sort((a, b) => {
				const aLower = a.item.series.toLowerCase();
				const bLower = b.item.series.toLowerCase();
				if (aLower < bLower) {
					return -1;
				} else if (aLower > bLower) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (e.target.textContent === 'Best Buy') {
			newItems = newItems.sort((a, b) => {
				return a.best_buy_price - b.best_buy_price;
			});
		} else if (e.target.textContent === 'Best Sell') {
			newItems = newItems.sort((a, b) => {
				return a.best_sell_price - b.best_sell_price;
			});
		} else if (e.target.textContent === 'Profit') {
			newItems = newItems.sort((a, b) => {
				const aProfit = a.best_sell_price * 0.9 - a.best_buy_price;
				const bProfit = b.best_sell_price * 0.9 - b.best_buy_price;
				return aProfit - bProfit;
			});
		} else if (e.target.textContent === 'Sales/Minute') {
			newItems = newItems.sort((a, b) => {
				const aSalesPerMin = getSalesPerMin(a);
				const bSalesPerMin = getSalesPerMin(b);
				return aSalesPerMin - bSalesPerMin;
			});
		} else if (e.target.textContent === 'Profit/Minute') {
			newItems = newItems.sort((a, b) => {
				const aProfit = a.best_sell_price * 0.9 - a.best_buy_price;
				const bProfit = b.best_sell_price * 0.9 - b.best_buy_price;
				const aSalesPerMin = getSalesPerMin(a);
				const bSalesPerMin = getSalesPerMin(b);
				const aProfitPerMin = getProfitPerMin(aProfit, aSalesPerMin);
				const bProfitPerMin = getProfitPerMin(bProfit, bSalesPerMin);
				return aProfitPerMin - bProfitPerMin;
			});
		}
		if (sortSwitch) {
			newItems.reverse();
			setSortSwitch(!sortSwitch);
		} else {
			setSortSwitch(!sortSwitch);
		}
		setSortedItems(newItems);
	};

	const getSalesPerMin = (item) => {
		if (item.additionalData.orderPerHour) {
			return (item.additionalData.orderPerHour.length / 60).toFixed(2);
		} else {
			return 0;
		}
	};

	const getProfitPerMin = (profit, salesPerMin) => {
		return (profit * salesPerMin).toFixed(2);
	};

	const playerSearchChange = (e) => {
		e.preventDefault();
		if (e.target.value) {
			let nameFilter = [];
			filteredItems.map((names) => {
				const name = names.listing_name.toLowerCase();
				if (name.includes(e.target.value.toLowerCase())) {
					nameFilter.push(names);
				}
			});
			setSortedItems(nameFilter);
		} else {
			setSortedItems(filteredItems);
		}
	};

	const resetFilters = (e) => {
		e.preventDefault();
		setMaxBuyPrice(500000);
		setMinBuyPrice(0);
		setMaxSellPrice(500000);
		setMinSellPrice(0);
		setRarity('');
		document.getElementById('inputForm').reset();
		setSortedItems(items);
	};

	useEffect(() => {
		determineNumOrdersPerHours();
	}, []);

	useEffect(() => {
		console.log('Here');
		let filteredList = initialItems.filter((item) => {
			return (
				item.best_buy_price >= minBuyPrice &&
				item.best_buy_price <= maxBuyPrice &&
				item.best_sell_price >= minSellPrice &&
				item.best_sell_price <= maxSellPrice &&
				item.item.ovr >= minOvr &&
				item.item.ovr <= maxOvr
			);
		});
		filteredList = filteredList.filter((item) => {
			if (rarity === '') {
				return item;
			} else {
				return item.item.rarity === rarity;
			}
		});
		filteredList = filteredList.filter((item) => {
			if (series === '') {
				return item;
			} else {
				return item.item.series === series;
			}
		});
		filteredList = filteredList.filter((item) => {
			if (team === '') {
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
		series,
		team,
		minOvr,
		maxOvr,
	]);

	console.log(
		minBuyPrice,
		maxBuyPrice,
		minSellPrice,
		maxSellPrice,
		rarity,
		series,
		team,
	);

	return (
		<div className='lg:w-2/3 w-full mx-auto overflow-auto'>
			<form id='inputForm' className='text-gray-600 flex flex-row flex-wrap'>
				<div className='m-1'>
					<input
						id='searchPlayers'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Search Players'
						onChange={playerSearchChange}
					/>
				</div>
				<div className='flex flex-col m-1'>
					<input
						id='minOvr'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Min Overall'
						onChange={(e) =>
							e.target.value === '' ? setMinOvr(0) : setMinOvr(e.target.value)
						}
					/>
					<input
						id='maxOvr'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Max Overall'
						onChange={(e) =>
							e.target.value === '' ? setMaxOvr(100) : setMaxOvr(e.target.value)
						}
					/>
				</div>
				<div className='flex flex-col m-1'>
					<input
						id='minBuyPrice'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Min Best Buy Price'
						onChange={(e) =>
							e.target.value === ''
								? setMinBuyPrice(0)
								: setMinBuyPrice(e.target.value)
						}
					/>
					<input
						id='maxBuyPrice'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Max Best Buy Price'
						onChange={(e) =>
							e.target.value === ''
								? setMaxBuyPrice(500000)
								: setMaxBuyPrice(e.target.value)
						}
					/>
				</div>
				<div className='flex flex-col m-1'>
					<input
						id='minSellPrice'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Min Best Sell Price'
						onChange={(e) =>
							e.target.value === ''
								? setMinSellPrice(0)
								: setMinSellPrice(e.target.value)
						}
					/>
					<input
						id='maxSellPrice'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder='Max Best Sell Price'
						onChange={(e) =>
							e.target.value === ''
								? setMaxSellPrice(0)
								: setMaxSellPrice(e.target.value)
						}
					/>
				</div>
				<div className='flex flex-col m-1'>
					<select
						id='rarity'
						className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'
						onChange={(e) =>
							e.target.value === 'Rarity'
								? setRarity('')
								: setRarity(e.target.value)
						}
						placeholder='Rarity'
					>
						<option>Rarity</option>
						<option>Diamond</option>
						<option>Gold</option>
						<option>Silver</option>
						<option>Bronze</option>
						<option>Common</option>
					</select>
					<select
						id='series'
						className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'
						onChange={(e) =>
							e.target.value === 'Series'
								? setSeries('')
								: setSeries(e.target.value)
						}
						placeholder='Series'
					>
						<option>Series</option>
						<option>2nd Half</option>
						<option>All-Star</option>
						<option>Awards</option>
						<option>Breakout</option>
						<option>Future Stars</option>
						<option>Live</option>
						<option>Veteran</option>
						<option>Topps Now</option>
						<option>The 42</option>
						<option>Rookie</option>
						<option>Prospect</option>
						<option>Prime</option>
						<option>Postseason</option>
						<option>Monthly Awards</option>
						<option>Milestone</option>
					</select>
				</div>
				<div className='m-1'>
					<select
						id='team'
						className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'
						onChange={(e) =>
							e.target.value === 'Team' ? setTeam('') : setTeam(e.target.value)
						}
						placeholder='Team'
					>
						<option>Diamondbacks</option>
						<option>Braves</option>
						<option>Orioles</option>
						<option>Red Sox</option>
						<option>White Sox</option>
						<option>Cubs</option>
						<option>Reds</option>
						<option>Indians</option>
						<option>Rockies</option>
						<option>Tigers</option>
						<option>Astros</option>
						<option>Royals</option>
						<option>Angels</option>
						<option>Dodgers</option>
						<option>Marlins</option>
						<option>Brewers</option>
						<option>Twins</option>
						<option>Yankees</option>
						<option>Mets</option>
						<option>Athletics</option>
						<option>Phillies</option>
						<option>Pirates</option>
						<option>Padres</option>
						<option>Giants</option>
						<option>Mariners</option>
						<option>Cardinals</option>
						<option>Rays</option>
						<option>Blue Jays</option>
						<option>Nationals</option>
					</select>
				</div>
				<div className='m-1'>
					<button
						onClick={resetFilters}
						className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
					>
						Reset Filters
					</button>
				</div>
			</form>
			<table className='table-auto w-full text-left whitespace-no-wrap border-2 border-gray-100'>
				<tr>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Name
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Overall
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Rarity
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Series
					</th>
					<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
						Team
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Best Buy
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Best Sell
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Profit
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Sales/Minute
					</th>
					<th
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Profit/Minute
					</th>
				</tr>
				{sortedItems.map((item) => {
					const profit = (
						item.best_sell_price * 0.9 -
						item.best_buy_price
					).toFixed(2);
					const salesPerMin = getSalesPerMin(item);
					const profitPerMin = getProfitPerMin(profit, salesPerMin);
					return (
						<tr key={item.item.uuid}>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								<Link
									href={{
										pathname: '/players/[player]',
										query: { player: item.item.uuid },
									}}
								>
									<a>{item.listing_name}</a>
								</Link>
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.item.ovr}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.item.rarity}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.item.series}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.item.team}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.best_buy_price}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.best_sell_price}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>{profit}</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{salesPerMin}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{profitPerMin}
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export async function getStaticProps(props) {
	console.time('timer');

	const getItemData = async (items) => {
		for (let i = 0; i < items.length; i++) {
			console.log(items.length, i);
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
			`https://mlb21.theshow.com/apis/listings.json?page=${page}`,
		);
		const data = await res.json();
		const listings = data.listings;
		console.log(data.total_pages, page);
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
	console.timeEnd('timer');
	return {
		props: { items },
		revalidate: 1,
	};
}
