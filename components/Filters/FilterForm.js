import React from 'react';
import TextFilters from '../Filters/TextFilters';
import SelectFilters from '../Filters/SelectFilters';
import {
	rarityOptions,
	teamOptions,
	seriesOptions,
} from '../../defaultOptions';

function FilterForm({
	setMinBuyPrice,
	setMaxBuyPrice,
	setMinSellPrice,
	setMaxSellPrice,
	setRarity,
	setTeam,
	setSeries,
	setSortedItems,
	items,
	filteredItems,
}) {
	const resetFilters = (e) => {
		e.preventDefault();
		setMaxBuyPrice(500000);
		setMinBuyPrice(0);
		setMaxSellPrice(500000);
		setMinSellPrice(0);
		setRarity('');
		setSeries('');
		setTeam('');
		document.getElementById('inputForm').reset();
		setSortedItems(items);
	};

	const playerSearchChange = (e) => {
		e.preventDefault();
		if (e.target.value) {
			let nameFilter = [];
			filteredItems.map((names) => {
				const name = names.listing_name.toLowerCase();
				const teamName = names.item.team.toLowerCase();
				if (
					name.includes(e.target.value.toLowerCase()) ||
					teamName.includes(e.target.value.toLowerCase())
				) {
					nameFilter.push(names);
				}
			});
			setSortedItems(nameFilter);
		} else {
			setSortedItems(filteredItems);
		}
	};
	return (
		<form
			id='inputForm'
			className='text-gray-600 flex flex-row flex-wrap sticky h-24 top-0 bg-white mt-2'
		>
			<div className='m-1'>
				<input
					id='searchPlayers'
					className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					type='text'
					placeholder='Search Stadiums'
					onChange={playerSearchChange}
				/>
			</div>
			<div className='flex flex-col m-1'>
				<TextFilters
					setValue={setMinBuyPrice}
					placeholder='Min Best Buy Price'
				/>
				<TextFilters
					setValue={setMaxBuyPrice}
					placeholder='Max Best Buy Price'
				/>
			</div>
			<div className='flex flex-col m-1'>
				<TextFilters
					setValue={setMinSellPrice}
					placeholder='Min Best Sell Price'
				/>
				<TextFilters
					setValue={setMaxSellPrice}
					placeholder='Max Best Sell Price'
				/>
			</div>
			<div className='flex flex-col m-1'>
				<SelectFilters
					defaultValue='Rarity'
					setValue={setRarity}
					options={rarityOptions}
				/>
				<SelectFilters
					defaultValue='Series'
					setValue={setSeries}
					options={seriesOptions}
				/>
			</div>
			<div className='m-1'>
				<SelectFilters
					defaultValue='Team'
					setValue={setTeam}
					options={teamOptions}
				/>
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
	);
}

export default FilterForm;
