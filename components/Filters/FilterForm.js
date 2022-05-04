import React, { useState } from 'react';
import TextFilters from '../Filters/TextFilters';
import SelectFilters from '../Filters/SelectFilters';
import {
	rarityOptions,
	teamOptions,
	seriesOptions,
} from '../../defaultOptions';
import MenuIcon from '../Icons/MenuIcon';

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
	placeholder,
	setTextFilter,
}) {
	const [menuOpen, setMenuOpen] = useState(false);
	const resetFilters = (e) => {
		e.preventDefault();
		setMaxBuyPrice(500000);
		setMinBuyPrice(0);
		setMaxSellPrice(500000);
		setMinSellPrice(0);
		setRarity('');
		setSeries('');
		setTeam('');
		setTextFilter('');
		setSortedItems(items);
	};
	return (
		<div className=''>
			<form
				id='inputForm'
				className='text-gray-600 hidden lg:flex flex-row flex-wrap h-24 bg-white mt-2'
			>
				<div className='m-1'>
					<input
						id='searchPlayers'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder={placeholder}
						onChange={(e) => setTextFilter(e.target.value)}
					/>
				</div>
				<div className='flex flex-col m-1'>
					<TextFilters
						setValue={setMinBuyPrice}
						defaultValue={0}
						placeholder='Min Best Buy Price'
					/>
					<TextFilters
						setValue={setMaxBuyPrice}
						defaultValue={500000}
						placeholder='Max Best Buy Price'
					/>
				</div>
				<div className='flex flex-col m-1'>
					<TextFilters
						setValue={setMinSellPrice}
						defaultValue={0}
						placeholder='Min Best Sell Price'
					/>
					<TextFilters
						setValue={setMaxSellPrice}
						defaultValue={500000}
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
			<button
				className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none bg-indigo-600 p-1 bg-opacity-75 m-5 ml-auto'
				type='button'
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label='Menu Button'
			>
				<MenuIcon />
			</button>
			<form
				id='inputForm'
				className={
					'text-gray-600 flex lg:hidden flex-row flex-wrap justify-center bg-white mt-2' +
					(menuOpen ? ' flex' : ' hidden')
				}
			>
				<div className='m-1'>
					<input
						id='searchPlayers'
						className='bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						type='text'
						placeholder={placeholder}
						onChange={(e) => setTextFilter(e.target.value)}
					/>
				</div>
				<div className='flex flex-col m-1'>
					<TextFilters
						setValue={setMinBuyPrice}
						defaultValue={0}
						placeholder='Min Best Buy Price'
					/>
					<TextFilters
						setValue={setMaxBuyPrice}
						defaultValue={500000}
						placeholder='Max Best Buy Price'
					/>
				</div>
				<div className='flex flex-col m-1'>
					<TextFilters
						setValue={setMinSellPrice}
						defaultValue={0}
						placeholder='Min Best Sell Price'
					/>
					<TextFilters
						setValue={setMaxSellPrice}
						defaultValue={500000}
						placeholder='Max Best Sell Price'
					/>
				</div>
				<div className='flex flex-col m-1 w-56'>
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
				<div className='m-1 w-56'>
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
		</div>
	);
}

export default FilterForm;
