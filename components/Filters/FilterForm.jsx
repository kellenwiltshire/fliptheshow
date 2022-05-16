import React, { useState } from 'react';
import TextFilters from './TextFilters';
import SelectFilters from './SelectFilters';
import { rarityOptions, teamOptions, seriesOptions } from '../../defaultOptions';
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
		<div>
			<form id='inputForm' className='text-gray-600 hidden lg:flex flex-row flex-wrap h-24 bg-white mt-2'>
				<div className='m-1'>
					<TextFilters setValue={setTextFilter} defaultValue={placeholder} placeholder={placeholder} />
				</div>
				<div className='flex flex-col m-1'>
					<TextFilters setValue={setMinBuyPrice} defaultValue={0} placeholder='Min Best Buy Price' />
					<TextFilters setValue={setMaxBuyPrice} defaultValue={500000} placeholder='Max Best Buy Price' />
				</div>
				<div className='flex flex-col m-1'>
					<TextFilters setValue={setMinSellPrice} defaultValue={0} placeholder='Min Best Sell Price' />
					<TextFilters setValue={setMaxSellPrice} defaultValue={500000} placeholder='Max Best Sell Price' />
				</div>
				<div className='flex flex-col m-1'>
					<SelectFilters defaultValue='Rarity' setValue={setRarity} options={rarityOptions} />
					<SelectFilters defaultValue='Series' setValue={setSeries} options={seriesOptions} />
				</div>
				<div className='m-1'>
					<SelectFilters defaultValue='Team' setValue={setTeam} options={teamOptions} />
				</div>
				<div className='m-1 w-full'>
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
				<div className='grid grid-cols-3 gap-4 grid-rows-2'>
					<TextFilters setValue={setTextFilter} defaultValue={placeholder} placeholder={placeholder} />
					<div className='row-span-2 flex flex-col w-56'>
						<TextFilters setValue={setMinBuyPrice} defaultValue={0} placeholder='Min Best Buy Price' />
						<TextFilters setValue={setMaxBuyPrice} defaultValue={500000} placeholder='Max Best Buy Price' />
					</div>
					<div className='row-span-2 flex flex-col w-56'>
						<TextFilters setValue={setMinSellPrice} defaultValue={0} placeholder='Min Best Sell Price' />
						<TextFilters setValue={setMaxSellPrice} defaultValue={500000} placeholder='Max Best Sell Price' />
					</div>
				</div>

				<div className='grid grid-cols-3 gap-4'>
					<div className='flex w-56 col-span-1'>
						<SelectFilters defaultValue='Rarity' setValue={setRarity} options={rarityOptions} />
					</div>
					<div className='flex  w-56 col-span-1'>
						<SelectFilters defaultValue='Series' setValue={setSeries} options={seriesOptions} />
					</div>
					<div className=' w-56 col-span-1'>
						<SelectFilters defaultValue='Team' setValue={setTeam} options={teamOptions} />
					</div>
				</div>
				<div className='mt-4 w-full lg:w-auto'>
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
