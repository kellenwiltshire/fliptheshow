import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home({ items }) {
	const [sortedItems, setSortedItems] = useState(items);
	const [sort, setSort] = useState('');
	const [sortSwitch, setSortSwitch] = useState(false);

	console.log(items);

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
				const aProfit = a.best_sell_price - a.best_buy_price;
				const bProfit = b.best_sell_price - b.best_buy_price;
				return aProfit - bProfit;
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

	return (
		<div className='lg:w-2/3 w-full mx-auto overflow-auto'>
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
						Series
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
					<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'>
						Sales/Minute
					</th>
					<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'>
						Profit/Minute
					</th>
				</tr>
				{sortedItems.map((item) => {
					const profit = item.best_sell_price - item.best_buy_price;
					{
						/* const completedOrders = getCompletedOrders(item.item.uuid);
					const salesPerMin = (completedOrders / 108000).toFixed(2);
					const profitPerMin = (profit / salesPerMin).toFixed(2); */
					}
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
								{item.item.series}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.best_buy_price}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>
								{item.best_sell_price}
							</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>{profit}</td>
							{/* <td className='border-t-2 border-gray-200 px-4 py-3'>{salesPerMin}</td>
							<td className='border-t-2 border-gray-200 px-4 py-3'>{profitPerMin}</td> */}
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
		let fullItems = [];

		for (let i = 0; i < items.length; i++) {
			console.log(items.length, i);
			const itemID = items[i].item.uuid;
			const res = await fetch(
				`https://mlb21.theshow.com/apis/listing.json?uuid=${itemID}`,
			);
			const data = await res.json();
			items[i].completed_orders = data.completed_orders;
			fullItems.push(items[i]);
		}
		return fullItems;
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

	// const items = await getItemData(initialItems);
	const items = initialItems;
	console.timeEnd('timer');
	return {
		props: { items },
		revalidate: 1,
	};
}
