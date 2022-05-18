import React from 'react';
import {
	CardContainer,
	PlayerImage,
	SecondaryContainer,
	DataContainer,
	Team,
	Player,
	PlayerData,
	BFData,
	RankImages,
	InfoContainer,
	SellInfo,
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
						<BFData>
							<InfoContainer>
								Fielding
								<img src={data.fielding_rank_image} height='25px' width='25px' />
							</InfoContainer>
							<InfoContainer>
								Batting
								<img src={data.hit_rank_image} height='25px' width='25px' />
							</InfoContainer>
						</BFData>
					) : null}
					<SellInfo>
						<InfoContainer>Best Buy: {listingData.best_buy_price}</InfoContainer>
						<InfoContainer>Best Sell: {listingData.best_sell_price}</InfoContainer>
					</SellInfo>
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
