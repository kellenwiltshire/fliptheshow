import React, { useState, useEffect } from 'react';
import Paginate from 'react-paginate';

function PlayerTable({ listingData, isSticky }) {
	const [numPages, setNumPages] = useState(Math.round(listingData.length / 50));
	const [currPage, setCurrPage] = useState(0);
	const [offset, setOffSet] = useState(0);
	const [currItems, setCurrItems] = useState(
		listingData.slice(offset, offset + 25),
	);

	useEffect(() => {
		setCurrItems(listingData.slice(offset, offset + 25));
		setNumPages(Math.round(listingData.length / 25));
	}, [offset, listingData]);

	const onPageChange = (e) => {
		const selectedPage = e.selected;
		const newOffset = selectedPage * 25;
		setOffSet(newOffset);
		setCurrPage(e.selected);
		window.scrollTo(0, 0);
	};
	return (
		<div className='flex flex-col justify-center'>
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
			<table className='table-auto w-auto text-left whitespace-no-wrap border-2 border-gray-100'>
				<thead className={isSticky ? 'sticky top-0' : ''}>
					<tr>
						<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'>
							Date
						</th>

						<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 cursor-pointer'>
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{listingData.map((item) => {
						return (
							<tr key={Math.random()}>
								<td className='border-t-2 border-gray-200 px-4 py-3'>
									{item.date}
								</td>
								<td className='border-t-2 border-gray-200 px-4 py-3'>
									{item.price}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
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

export default PlayerTable;
