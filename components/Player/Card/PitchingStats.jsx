import React from 'react';

function PitchingStats({ data }) {
	return (
		<div>
			<div className='flex-row flex-wrap flex my-2 justify-center'>
				<h1 className='w-full underline text-lg'>Pitching Stats</h1>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Hits/BF</span>
					<span className='w-20 text-center'>{data.hits_per_bf}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>HR/BF</span>
					<span className='w-20 text-center'>{data.hr_per_bf}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>K/BF</span>
					<span className='w-20 text-center'>{data.k_per_bf}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Pitch Control</span>
					<span className='w-20 text-center'>{data.pitch_control}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Pitch Movement</span>
					<span className='w-20 text-center'>{data.pitch_movement}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Pitch Velocity</span>
					<span className='w-20 text-center'>{data.pitch_velocity}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Clutch</span>
					<span className='w-20 text-center'>{data.pitching_clutch}</span>
				</div>
				<div className='flex-col flex m-2'>
					<span className='w-full text-lg text-center'>Pitches</span>
					<div className='w-full flex flex-row flex-wrap'>
						{data.pitches.length
							? data.pitches.map((pitch) => {
									return (
										<div
											key={Math.random()}
											className='flex-row flex-wrap justify-center flex my-2'
										>
											<span className='w-full underline text-center'>
												{pitch.name}
											</span>

											<div className='flex-col flex border border-gray-200 px-2'>
												<span className='w-20 text-center'>Control</span>
												<span className='w-20 text-center'>
													{pitch.control}
												</span>
											</div>
											<div className='flex-col flex border border-gray-200 px-2'>
												<span className='w-20 text-center'>Movement</span>
												<span className='w-20 text-center'>
													{pitch.movement}
												</span>
											</div>
											<div className='flex-col flex border border-gray-200 px-2'>
												<span className='w-20 text-center'>Speed</span>
												<span className='w-20 text-center'>{pitch.speed}</span>
											</div>
										</div>
									);
							  })
							: null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PitchingStats;
