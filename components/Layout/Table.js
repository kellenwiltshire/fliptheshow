import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Paginate from 'react-paginate';
import {
	sortByBestBuy,
	sortByBestSell,
	sortByName,
	sortByOverall,
	sortByProfit,
	sortBySeries,
} from '../../utils/sortingFunctions';
import { ExternalLinkIcon } from '@heroicons/react/solid';

function Table({ sortedItems, setSortedItems, isPlayer, isTeam }) {
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
		const numberOfPages = Math.round(sortedItems.length / 50);

		numberOfPages <= 1 ? setNumPages(1) : setNumPages(numberOfPages);
	}, [offset, sortedItems]);

	const sortTable = (e) => {
		e.preventDefault();
		setSort(e.target.value);
		let newItems = sortedItems;
		if (e.target.textContent === 'Name') {
			newItems = sortByName(newItems);
		} else if (e.target.textContent === 'Overall') {
			newItems = sortByOverall(newItems);
		} else if (e.target.textContent === 'Series') {
			newItems = sortBySeries(newItems);
		} else if (e.target.textContent === 'Best Buy') {
			newItems = sortByBestBuy(newItems);
		} else if (e.target.textContent === 'Best Sell') {
			newItems = sortByBestSell(newItems);
		} else if (e.target.textContent === 'Profit') {
			newItems = sortByProfit(newItems);
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

	return (
		<div className='flex flex-col w-full justify-center'>
			<Paginate
				pageCount={numPages}
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
				onPageChange={onPageChange}
				forcePage={currPage}
				previousClassName='page'
				nextClassName='page'
				containerClassName='pageContainerTop'
				activeClassName='pageActive'
				pageClassName='page'
				breakClassName='page'
			/>

			<div className='max-w-screen overflow-auto overflow-x-scroll'>
				<table className='table-fixed w-full text-left whitespace-no-wrap border-2 border-gray-100'>
					<thead>
						<tr>
							<th
								className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer w-52'
								onClick={sortTable}
							>
								Name
							</th>

							<th
								className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer w-24'
								onClick={sortTable}
							>
								Rarity
							</th>
							<th
								className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer w-24'
								onClick={sortTable}
							>
								Series
							</th>
							{isTeam ? (
								<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-24'>
									Team
								</th>
							) : null}

							<th
								className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer w-24'
								onClick={sortTable}
							>
								Best Buy
							</th>

							<th
								className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer w-24'
								onClick={sortTable}
							>
								Best Sell
							</th>

							<th
								className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer w-24'
								onClick={sortTable}
							>
								Profit
							</th>
						</tr>
					</thead>
					<tbody>
						{currItems.map((item) => {
							const profit = Math.round(
								item.best_sell_price * 0.9 - item.best_buy_price,
							);
							const itemName = item.listing_name
								.replace('&trade;', '™')
								.replace('&reg;', '®');

							return (
								<tr key={item.item.uuid}>
									{isPlayer ? (
										<td className='border-t-2 border-gray-200 px-4 py-3 flex flex-row justify-between'>
											<Link
												href={{
													pathname: '/players/[player]',
													query: { player: item.item.uuid },
												}}
											>
												<a>{item.listing_name}</a>
											</Link>
											<a
												href={`https://mlb22.theshow.com/items/${item.item.uuid}`}
												target='_blank'
											>
												<ExternalLinkIcon className='h-5 w-5' />
											</a>
										</td>
									) : (
										<td className='border-t-2 border-gray-200 px-4 py-3 flex flex-row justify-between'>
											{itemName}
											<a
												href={`https://mlb22.theshow.com/items/${item.item.uuid}`}
												target='_blank'
											>
												<ExternalLinkIcon className='h-5 w-5' />
											</a>
										</td>
									)}

									<td className='border-t-2 border-gray-200 px-4 py-3'>
										{item.item.rarity}
									</td>
									<td className='border-t-2 border-gray-200 px-4 py-3'>
										{item.item.series}
									</td>
									{isTeam ? (
										<td className='border-t-2 border-gray-200 px-4 py-3'>
											{item.item.team}
										</td>
									) : null}

									<td className='border-t-2 border-gray-200 px-4 py-3'>
										{item.best_buy_price}
									</td>

									<td className='border-t-2 border-gray-200 px-4 py-3'>
										{item.best_sell_price}
									</td>

									<td className='border-t-2 border-gray-200 px-4 py-3'>
										{profit}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<Paginate
				pageCount={numPages}
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
				onPageChange={onPageChange}
				forcePage={currPage}
				previousClassName='page'
				nextClassName='page'
				containerClassName='pageContainerTop'
				activeClassName='pageActive'
				pageClassName='page'
				breakClassName='page'
			/>
		</div>
	);
}

export default Table;
