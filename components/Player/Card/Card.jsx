import React from 'react';
import {
	CardContainer,
	PlayerImage,
	SecondaryContainer,
	DataContainer,
	Team,
	Player,
	PlayerData,
} from '../Styles/Card';
import PitchingStats from './PitchingStats';
import Stats from './Stats';

function Card({ data, listingData }) {
	return (
		<CardContainer>
			<SecondaryContainer className='container'>
				<PlayerImage alt='Player Card' src={data.img} />

				<DataContainer>
					<Team>{data.team}</Team>
					<Player>
						{data.jersey_number} | {data.name} | {data.display_position}
					</Player>
					<PlayerData>
						{data.bat_hand}/{data.throw_hand} | Age: {data.age} | Weight:
						{data.weight} | Height: {data.height}
					</PlayerData>
					<PlayerData>
						Overall: {data.ovr} Rarity: {data.rarity}
					</PlayerData>
					{data.fielding_rank_image ? (
						<div className='text-gray-800 my-4 flex flex-row'>
							<span className='flex flex-col mx-2'>
								Fielding
								<img src={data.fielding_rank_image} height='25px' width='25px' />
							</span>
							<span className='flex flex-col mx-2'>
								Batting
								<img src={data.hit_rank_image} height='25px' width='25px' />
							</span>
						</div>
					) : null}
					<div className='text-gray-800 flex flex-row text-lg my-5 justify-center'>
						<span className='flex flex-col mx-2'>Best Buy: {listingData.best_buy_price}</span>
						<span className='flex flex-col mx-2'>Best Sell: {listingData.best_sell_price}</span>
					</div>
					<Stats data={data} />
					<PitchingStats data={data} />
					<div className='flex flex-row flex-wrap justify-center'>
						{data.quirks.map((item) => {
							if (item.img) {
								return <img key={item.name} className='w-10 h-10' src={item.img} alt={item.description} />;
							} else {
								return;
							}
						})}
					</div>
				</DataContainer>
			</SecondaryContainer>
		</CardContainer>
	);
}

export default Card;
