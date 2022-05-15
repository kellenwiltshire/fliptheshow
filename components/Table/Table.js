import React, { useState, useEffect } from 'react';
import Paginate from 'react-paginate';
import Heading from './Head';
import Row from './Row';

const headings = [
	{ name: 'Name', id: 'listing_name' },
	{ name: 'Rarity', id: 'rarity' },
	{ name: 'Series', id: 'series' },
	{ name: 'Team', id: 'team' },
	{ name: 'Best Buy', id: 'best_buy_price' },
	{ name: 'Best Sell', id: 'best_sell_price' },
	{ name: 'Profit', id: 'profit' },
];

function Table({ sortedItems, isPlayer, isTeam, sort, setSort, sortTable, reverseTable }) {
	const [numPages, setNumPages] = useState(Math.round(sortedItems.length / 50));
	const [currPage, setCurrPage] = useState(0);
	const [offset, setOffSet] = useState(0);
	const [currItems, setCurrItems] = useState(sortedItems.slice(offset, offset + 50));

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

	const handleSort = (e) => {
		e.preventDefault();
		if (e.target.id === sort) {
			reverseTable();
		} else {
			setSort(e.target.id);
			sortTable(e.target.id);
		}
	};

	return (
		<div className='flex flex-col w-full justify-center'>
			<div className='max-w-screen overflow-auto overflow-x-scroll'>
				<table className='table-fixed min-w-full divide-y divide-gray-200 text-left whitespace-no-wrap border-2 border-gray-100'>
					<thead>
						<tr>
							{headings.map((heading) => {
								if (!isTeam) {
									if (heading.name === 'Team') {
										return null;
									}
									return <Heading key={heading.id} name={heading.name} id={heading.id} handleSort={handleSort} />;
								} else {
									return <Heading key={heading.id} name={heading.name} id={heading.id} handleSort={handleSort} />;
								}
							})}
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 bg-white'>
						{currItems.map((item) => {
							return <Row item={item} isPlayer={isPlayer} isTeam={isTeam} />;
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
