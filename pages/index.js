import { useEffect, useState } from 'react';

export default function Home({ items }) {
	const [initItems, setInitItems] = useState(items);
	const [sortedItems, setSortedItems] = useState(items);
	const [sort, setSort] = useState('');
	const [sortSwitch, setSortSwitch] = useState(false);

	const sortTable = (e) => {
		e.preventDefault();
		console.log(e.target.textContent);
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
		<div>
			<table>
				<tr>
					<th onClick={sortTable}>Name</th>
					<th onClick={sortTable}>Overall</th>
					<th onClick={sortTable}>Series</th>
					<th onClick={sortTable}>Best Buy</th>
					<th onClick={sortTable}>Best Sell</th>
					<th onClick={sortTable}>Profit</th>
					{/* <th>Sales/Minute</th>
					<th>Profit/Minute</th> */}
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
							<td>{item.listing_name}</td>
							<td>{item.item.ovr}</td>
							<td>{item.item.series}</td>
							<td>{item.best_buy_price}</td>
							<td>{item.best_sell_price}</td>
							<td>{profit}</td>
							{/* <td>{salesPerMin}</td>
							<td>{profitPerMin}</td> */}
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
			const itemID = items[i].item.uuid;
			const res = await fetch(
				`https://mlb21.theshow.com/apis/listing.json?uuid=${itemID}`,
			);
			const data = res.json();
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
