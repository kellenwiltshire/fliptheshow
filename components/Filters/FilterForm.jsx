import React, { useState } from 'react';
import TextFilters from './TextFilters';
import SelectFilters from './SelectFilters';
import { rarityOptions, teamOptions, seriesOptions } from '../../defaultOptions';
import MenuIcon from '../Icons/MenuIcon';
import {
	ButtonHolder,
	DefaultButton,
	Form,
	Holder,
	MenuButton,
	MobileForm,
	MobileFormDiv,
	SelectHolder,
	TextHolder,
} from './styles/Style-FilterForm';

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
		<div className='container'>
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
				<ButtonHolder>
					<DefaultButton onClick={resetFilters}>Reset Filters</DefaultButton>
				</ButtonHolder>
			</Form>
			<MenuButton type='button' onClick={() => setMenuOpen(!menuOpen)} aria-label='Menu Button'>
				<MenuIcon />
			</MenuButton>
			<MobileForm style={{ display: menuOpen ? ' flex' : ' none' }} id='inputForm'>
				<MobileFormDiv>
					<TextFilters setValue={setTextFilter} defaultValue={placeholder} placeholder={placeholder} />
					<TextHolder>
						<TextFilters setValue={setMinBuyPrice} defaultValue={0} placeholder='Min Best Buy Price' />
						<TextFilters setValue={setMaxBuyPrice} defaultValue={500000} placeholder='Max Best Buy Price' />
					</TextHolder>
					<TextHolder>
						<TextFilters setValue={setMinSellPrice} defaultValue={0} placeholder='Min Best Sell Price' />
						<TextFilters setValue={setMaxSellPrice} defaultValue={500000} placeholder='Max Best Sell Price' />
					</TextHolder>
				</MobileFormDiv>

				<MobileFormDiv>
					<SelectHolder>
						<SelectFilters defaultValue='Rarity' setValue={setRarity} options={rarityOptions} />
					</SelectHolder>
					<SelectHolder>
						<SelectFilters defaultValue='Series' setValue={setSeries} options={seriesOptions} />
					</SelectHolder>
					<SelectHolder>
						<SelectFilters defaultValue='Team' setValue={setTeam} options={teamOptions} />
					</SelectHolder>
				</MobileFormDiv>
				<ButtonHolder>
					<DefaultButton onClick={resetFilters}>Reset Filters</DefaultButton>
				</ButtonHolder>
			</MobileForm>
		</div>
	);
}

export default FilterForm;
