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
				<table className='table-fixed min-w-full divide-y divide-gray-200 text-left whitespace-no-wrap border-2 border-gray-100'>
					<thead>
						<tr>
							<th
								scope='col'
								className='py-3.5 pl-4 pr-3 title-font bg-gray-100 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer'
								onClick={sortTable}
							>
								Name
							</th>

							<th
								className='hidden px-3 py-3.5 text-left text-sm bg-gray-100 font-semibold text-gray-900 sm:table-cell cursor-pointer'
								onClick={sortTable}
							>
								Rarity
							</th>
							<th
								className='hidden px-3 py-3.5 text-left text-sm bg-gray-100 font-semibold text-gray-900 sm:table-cell cursor-pointer'
								onClick={sortTable}
							>
								Series
							</th>
							{isTeam ? (
								<th className='hidden px-3 py-3.5 text-left text-sm bg-gray-100 font-semibold text-gray-900 sm:table-cell cursor-pointer'>
									Team
								</th>
							) : null}

							<th
								scope='col'
								className='py-3.5 pl-4 pr-3 title-font bg-gray-100 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer'
								onClick={sortTable}
							>
								Best Buy
							</th>

							<th
								className='py-3.5 pl-4 pr-3 title-font bg-gray-100 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer'
								onClick={sortTable}
							>
								Best Sell
							</th>

							<th
								className='py-3.5 pl-4 pr-3 title-font bg-gray-100 text-left text-sm font-semibold text-gray-900 sm:pl-6 cursor-pointer'
								onClick={sortTable}
							>
								Profit
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 bg-white'>
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
										<td className='border-t-2 border-gray-200 px-4 py-3 flex flex-col lg:flex-row justify-between'>
											<span className='flex flex-row justify-between'>
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
											</span>
											<dl className='font-normal sm:hidden'>
												<dt className='sr-only'>Rarity</dt>
												<dd className='mt-1 truncate text-gray-700'>
													{item.item.rarity}
												</dd>
												<dt className='sr-only'>Series</dt>
												<dd className='mt-1 truncate text-gray-700'>
													{item.item.series}
												</dd>

												{isTeam ? (
													<>
														<dt className='sr-only'>Team</dt>
														<dd className='mt-1 truncate text-gray-700'>
															{item.item.team}
														</dd>
													</>
												) : null}
											</dl>
										</td>
									) : (
										<td className='border-t-2 border-gray-200 px-4 py-3 lg:flex-row justify-between flex flex-col'>
											<span className='flex flex-row justify-between'>
												{itemName}
												<a
													href={`https://mlb22.theshow.com/items/${item.item.uuid}`}
													target='_blank'
												>
													<ExternalLinkIcon className='h-5 w-5' />
												</a>
											</span>
											<dl className='font-normal sm:hidden'>
												<dt className='sr-only'>Rarity</dt>
												<dd className='mt-1 truncate text-gray-700'>
													{item.item.rarity}
												</dd>
												<dt className='sr-only'>Series</dt>
												<dd className='mt-1 truncate text-gray-700'>
													{item.item.series}
												</dd>

												{isTeam ? (
													<>
														<dt className='sr-only'>Team</dt>
														<dd className='mt-1 truncate text-gray-700'>
															{item.item.team}
														</dd>
													</>
												) : null}
											</dl>
										</td>
									)}

									<td className='border-t-2 border-gray-200 px-4 py-3 hidden sm:table-cell'>
										{item.item.rarity}
									</td>
									<td className='border-t-2 border-gray-200 px-4 py-3 hidden sm:table-cell'>
										{item.item.series}
									</td>
									{isTeam ? (
										<td className='border-t-2 border-gray-200 px-4 py-3 hidden sm:table-cell'>
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
