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
	QuirkHolder,
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
					<QuirkHolder>
						{data.quirks.map((item) => {
							if (item.img) {
								return <img key={item.name} width={40} height={40} src={item.img} alt={item.description} />;
							} else {
								return;
							}
						})}
					</QuirkHolder>
				</DataContainer>
			</SecondaryContainer>
		</CardContainer>
	);
}

export default Card;
