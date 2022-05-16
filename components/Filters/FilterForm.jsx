import React, { useState } from 'react';
import TextFilters from './TextFilters';
import SelectFilters from './SelectFilters';
import { rarityOptions, teamOptions, seriesOptions } from '../../defaultOptions';
import MenuIcon from '../Icons/MenuIcon';
import { DefaultButton, Form, Holder, MenuButton, MobileForm } from './Style-FilterForm';

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
			<Form>
				<Holder>
					<TextFilters setValue={setTextFilter} defaultValue={placeholder} placeholder={placeholder} />
				</Holder>
				<Holder>
					<TextFilters setValue={setMinBuyPrice} defaultValue={0} placeholder='Min Best Buy Price' />
					<TextFilters setValue={setMaxBuyPrice} defaultValue={500000} placeholder='Max Best Buy Price' />
				</Holder>
				<Holder>
					<TextFilters setValue={setMinSellPrice} defaultValue={0} placeholder='Min Best Sell Price' />
					<TextFilters setValue={setMaxSellPrice} defaultValue={500000} placeholder='Max Best Sell Price' />
				</Holder>
				<Holder>
					<SelectFilters defaultValue='Rarity' setValue={setRarity} options={rarityOptions} />
					<SelectFilters defaultValue='Series' setValue={setSeries} options={seriesOptions} />
				</Holder>
				<Holder>
					<SelectFilters defaultValue='Team' setValue={setTeam} options={teamOptions} />
				</Holder>
				<div className='m-1 w-full'>
					<DefaultButton onClick={resetFilters}>Reset Filters</DefaultButton>
				</div>
			</Form>
			<MenuButton type='button' onClick={() => setMenuOpen(!menuOpen)} aria-label='Menu Button'>
				<MenuIcon />
			</MenuButton>
			<MobileForm style={{ display: menuOpen ? ' flex' : ' none' }} id='inputForm'>
				<div className='flex flex-col md:grid grid-cols-3 gap-4 grid-rows-2'>
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

				<div className='flex flex-col md:grid grid-cols-3 gap-4'>
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
			</MobileForm>
		</div>
	);
}

export default FilterForm;
