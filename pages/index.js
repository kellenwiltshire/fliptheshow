export default function Home({ items }) {
	console.log(items);
	return (
		<div>
			<table>
				<tr>
					<th>Name</th>
					<th>Overall</th>
					<th>Series</th>
					<th>Best Buy</th>
					<th>Best Sell</th>
					<th>Profit</th>
					<th>Sales/Minute</th>
					<th>Profit/Minute</th>
				</tr>
				{items.map((item) => {
					const profit = item.best_sell_price - item.best_buy_price;
					{
						/* const completedOrders = getCompletedOrders(item.item.uuid);
					const salesPerMin = (completedOrders / 108000).toFixed(2);
					const profitPerMin = (profit / salesPerMin).toFixed(2); */
					}
					return (
						<tr>
							<td>{item.listing_name}</td>
							<td>{item.item.ovr}</td>
							<td>{item.item.series}</td>
							<td>{item.best_buy_price}</td>
							<td>{item.best_sell_price}</td>
							{/* <td>{profit}</td>
							<td>{salesPerMin}</td>
							<td>{profitPerMin}</td> */}
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export async function getStaticProps(props) {
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

	const items = await getItemData(initialItems);
	return {
		props: { items },
		revalidate: 1,
	};
}
