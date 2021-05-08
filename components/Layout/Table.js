import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Paginate from 'react-paginate';

function Table({ sortedItems, setSortedItems, isPlayer }) {
	const [sort, setSort] = useState('');
	const [sortSwitch, setSortSwitch] = useState(false);
	const [numPages, setNumPages] = useState(Math.round(sortedItems.length / 50));
	const [currPage, setCurrPage] = useState(0);
	const [offset, setOffSet] = useState(0);
	const [currItems, setCurrItems] = useState(
		sortedItems.slice(offset, offset + 50),
	);

	const onPageChange = (e) => {
		const selectedPage = e.selected;
		const newOffset = selectedPage * 50;
		setOffSet(newOffset);
		setCurrPage(e.selected);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		setCurrItems(sortedItems.slice(offset, offset + 50));
		setNumPages(Math.round(sortedItems.length / 50));
	}, [offset, sortedItems]);

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
		setCurrItems(newItems.slice(offset, offset + 50));
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
	return (
		<div className='flex flex-col w-full justify-center'>
			<Paginate
				pageCount={numPages}
				pageRangeDisplayed={5}
				marginPagesDisplayed={0}
				onPageChange={onPageChange}
				forcePage={currPage}
				previousClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				nextClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				containerClassName='flex flex-row bg-gray-100 rounded-t text-lg justify-center'
				activeClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				pageClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				breakClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-1'
			/>

			<table className='table-auto w-full text-left whitespace-no-wrap border-2 border-gray-100'>
				<thead className='sticky top-24'>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Name
					</td>

					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Rarity
					</td>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Series
					</td>
					<td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
						Team
					</td>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Best Buy
					</td>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Best Sell
					</td>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Profit
					</td>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Sales/Minute
					</td>
					<td
						className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'
						onClick={sortTable}
					>
						Profit/Minute
					</td>
				</thead>
				<tbody>
					{currItems.map((item) => {
						const profit = (
							item.best_sell_price * 0.9 -
							item.best_buy_price
						).toFixed(2);
						const salesPerMin = getSalesPerMin(item);
						const profitPerMin = getProfitPerMin(profit, salesPerMin);
						const itemName = item.listing_name
							.replace('&trade;', '™')
							.replace('&reg;', '®');
						return (
							<tr key={item.item.uuid}>
								{isPlayer ? (
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
								) : (
									<td className='border-t-2 border-gray-200 px-4 py-3'>
										{itemName}
									</td>
								)}

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
								<td className='border-t-2 border-gray-200 px-4 py-3'>
									{profit}
								</td>
								<td className='border-t-2 border-gray-200 px-4 py-3'>
									{salesPerMin}
								</td>
								<td className='border-t-2 border-gray-200 px-4 py-3'>
									{profitPerMin}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Paginate
				pageCount={numPages}
				pageRangeDisplayed={5}
				marginPagesDisplayed={0}
				onPageChange={onPageChange}
				forcePage={currPage}
				previousClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				nextClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				containerClassName='flex flex-row bg-gray-100 rounded-t text-lg justify-center'
				activeClassName='flex text-white bg-indigo-100 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				pageClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mx-1'
				breakClassName='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-1'
			/>
		</div>
	);
}

export default Table;
