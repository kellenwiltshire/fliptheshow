import React from 'react';

export default function player({ data }) {
	console.log(data);
	return (
		<div>
			<div className='max-w-screen bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg flex flex-row'>
				<div>
					<img
						className='rounded-md border-2 border-gray-300'
						width='210px'
						height='296px'
						src={data.img}
					/>
				</div>

				<div id='header' className='flex'>
					<div id='body' className='flex flex-col ml-5'>
						<h4 id='name' className='text-xl font-semibold'>
							{data.jersey_number} | {data.name} | {data.display_position}
						</h4>
						<h4 id='name' className='text-lg font-semibold mb-2'>
							{data.team}
						</h4>
						<p className='text-xs'>{data.display_secondary_positions}</p>
						<p className='text-xs'>
							{data.bat_hand}/{data.throw_hand}
						</p>
						<p className='text-xs'>
							Age: {data.age} | Weight: {data.weight} | Height: {data.height}
						</p>
						<p id='job' className='text-gray-800 mt-2 flex flex-row'>
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
						</p>
						<p id='job' className='text-gray-800 mt-2'>
							Overall: {data.ovr}
						</p>
						<p id='job' className='text-gray-800 mt-2'>
							Rarity: {data.rarity}
						</p>
						<div>
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
						</div>
						<div className='flex-row flex-wrap flex'>
							<h1 className='w-full'>Hitting Stats</h1>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Con-L</span>
								<span className='w-20 text-center'>{data.contact_left}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Con-R</span>
								<span className='w-20 text-center'>{data.contact_right}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Pow-L</span>
								<span className='w-20 text-center'>{data.power_left}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Pow-R</span>
								<span className='w-20 text-center'>{data.power_right}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Bunt</span>
								<span className='w-20 text-center'>{data.bunting_ability}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Drag Bunt</span>
								<span className='w-20 text-center'>
									{data.drag_bunting_ability}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Durability</span>
								<span className='w-20 text-center'>
									{data.hitting_durability}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-24 text-center'>Base Ability</span>
								<span className='w-24 text-center'>
									{data.baserunning_ability}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-26 text-center'>Base Aggression</span>
								<span className='w-26 text-center'>
									{data.baserunning_aggression}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Clutch</span>
								<span className='w-20 text-center'>{data.batting_clutch}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Discipline</span>
								<span className='w-20 text-center'>
									{data.plate_discipline}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Vision</span>
								<span className='w-20 text-center'>{data.plate_vision}</span>
							</div>
						</div>
						<div className='flex-row flex-wrap flex'>
							<h1 className='w-full'>Fielding Stats</h1>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Arm Acc</span>
								<span className='w-20 text-center'>{data.arm_accuracy}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Arm Str</span>
								<span className='w-20 text-center'>{data.arm_strength}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Fielding</span>
								<span className='w-20 text-center'>
									{data.fielding_ability}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Durability</span>
								<span className='w-20 text-center'>
									{data.fielding_durability}
								</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Reaction</span>
								<span className='w-20 text-center'>{data.reaction_time}</span>
							</div>
							<div className='flex-col flex border border-gray-200 px-2'>
								<span className='w-20 text-center'>Stamina</span>
								<span className='w-20 text-center'>{data.stamina}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const uuid = query.player;
	const res = await fetch(
		`https://mlb21.theshow.com/apis/item.json?uuid=${uuid}`,
	);
	const data = await res.json();

	return {
		props: { data },
	};
}
