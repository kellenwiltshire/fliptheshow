import React, { useState, useEffect } from 'react';
import Paginate from 'react-paginate';
import { Table, TableContainer, TableData, TableHeader } from '../Styles/PlayerTable';

function PlayerTable({ listingData }) {
	const [numPages, setNumPages] = useState(Math.round(listingData.length / 25));
	const [currPage, setCurrPage] = useState(0);
	const [offset, setOffSet] = useState(0);
	const [currItems, setCurrItems] = useState(listingData.slice(offset, offset + 25));

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
		<TableContainer>
			<Table>
				<thead>
					<tr>
						<TableHeader>Date (UTC)</TableHeader>
						<TableHeader>Price</TableHeader>
					</tr>
				</thead>
				<tbody>
					{currItems.map((item) => {
						return (
							<tr key={item.date}>
								<TableData>{item.date}</TableData>
								<TableData>{item.price}</TableData>
							</tr>
						);
					})}
				</tbody>
			</Table>
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
		</TableContainer>
	);
}

export default PlayerTable;
