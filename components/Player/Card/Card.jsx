import React from 'react';
import { CardContainer } from '../Styles/Card';
import PitchingStats from './PitchingStats';
import Stats from './Stats';

function Card({ data, listingData }) {
	return (
		<CardContainer>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-row flex-wrap justify-center'>
					<img
						alt='Play Card'
						className='lg:w-1/3 w-full h-96 lg:object-center object-scale-down rounded'
						src={data.img}
					/>

					<div className='lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
						<h2 className='text-sm title-font text-gray-500 tracking-widest'>{data.team}</h2>
						<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
							{data.jersey_number} | {data.name} | {data.display_position}
						</h1>
						<div className='flex mb-1 flex-row'>
							<span className='text-gray-600'>
								{data.bat_hand}/{data.throw_hand} | Age: {data.age} | Weight:
								{data.weight} | Height: {data.height}
							</span>
						</div>
						<div className='flex mb-4 flex-row'>
							<span className='text-gray-600'>
								Overall: {data.ovr} Rarity: {data.rarity}
							</span>
						</div>
						{data.fielding_rank_image ? (
							<div id='job' className='text-gray-800 my-4 flex flex-row'>
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
					</div>
				</div>
			</div>
		</CardContainer>
	);
}

export default Card;
