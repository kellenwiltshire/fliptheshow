import React from 'react';
import { PitchingContainer, PitchingHeader, Stat, StatsHolder } from '../Styles/PitchingStats';

function PitchingStats({ data }) {
	return (
		<PitchingContainer>
			<PitchingHeader>Pitching Stats</PitchingHeader>
			<StatsHolder>
				<Stat>Hits/BF</Stat>
				<Stat>{data.hits_per_bf}</Stat>
			</StatsHolder>
			<StatsHolder>
				<Stat>HR/BF</Stat>
				<Stat>{data.hr_per_bf}</Stat>
			</StatsHolder>
			<StatsHolder>
				<Stat>K/BF</Stat>
				<Stat>{data.k_per_bf}</Stat>
			</StatsHolder>
			<StatsHolder>
				<Stat>Pitch Control</Stat>
				<Stat>{data.pitch_control}</Stat>
			</StatsHolder>
			<StatsHolder>
				<Stat>Pitch Movement</Stat>
				<Stat>{data.pitch_movement}</Stat>
			</StatsHolder>
			<StatsHolder>
				<Stat>Pitch Velocity</Stat>
				<Stat>{data.pitch_velocity}</Stat>
			</StatsHolder>
			<StatsHolder>
				<Stat>Clutch</Stat>
				<Stat>{data.pitching_clutch}</Stat>
			</StatsHolder>
			<div className='flex-col flex m-2'>
				<span className='w-full text-lg text-center'>Pitches</span>
				<div className='w-full flex flex-row flex-wrap'>
					{data.pitches.length
						? data.pitches.map((pitch) => {
								return (
									<div key={pitch.name} className='flex-row flex-wrap justify-center flex my-2'>
										<span className='w-full underline text-center'>{pitch.name}</span>

										<div className='flex-col flex border border-gray-200 px-2'>
											<Stat>Control</Stat>
											<Stat>{pitch.control}</Stat>
										</div>
										<div className='flex-col flex border border-gray-200 px-2'>
											<Stat>Movement</Stat>
											<Stat>{pitch.movement}</Stat>
										</div>
										<div className='flex-col flex border border-gray-200 px-2'>
											<Stat>Speed</Stat>
											<Stat>{pitch.speed}</Stat>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</div>
		</PitchingContainer>
	);
}

export default PitchingStats;
