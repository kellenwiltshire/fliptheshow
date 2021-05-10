import React from 'react';
import Stats from './Stats';

function Card({ data, listingData }) {
	console.log(listingData);
	return (
		<div className='max-w-screen flex'>
			<div class='container px-5 py-24 mx-auto'>
				<div class='lg:w-4/5 mx-auto flex flex-wrap justify-center'>
					<img
						alt='Play Card'
						class='lg:w-1/3 w-full lg:h-auto h-64 object-scale-down lg:object-cover rounded'
						src={data.img}
					/>
					<div class='lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
						<h2 class='text-sm title-font text-gray-500 tracking-widest'>
							{data.team}
						</h2>
						<h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>
							{data.jersey_number} | {data.name} | {data.display_position}
						</h1>
						<div class='flex mb-1 flex-row'>
							<span class='text-gray-600'>
								{data.bat_hand}/{data.throw_hand} | Age: {data.age} | Weight:
								{data.weight} | Height: {data.height}
							</span>
						</div>
						<div class='flex mb-4 flex-row'>
							<span class='text-gray-600'>
								Overall: {data.ovr} Rarity: {data.rarity}
							</span>
						</div>
						<Stats data={data} />
						<div className='flex flex-row flex-wrap'>
							{data.quirks.map((item) => {
								if (item.img) {
									return (
										<img
											key={item.name}
											className='w-10 h-10'
											src={item.img}
											alt={item.description}
										/>
									);
								} else {
									return;
								}
							})}
						</div>
						<div id='job' className='text-gray-800 mt-2 flex flex-row'>
							<span className='flex flex-col mx-2'>
								Fielding
								<img
									src={data.fielding_rank_image}
									height='25px'
									width='25px'
								/>
							</span>
							<span className='flex flex-col mx-2'>
								Batting
								<img src={data.hit_rank_image} height='25px' width='25px' />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
