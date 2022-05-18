import React from 'react';
import {
	PitchesHolder,
	PitchInfo,
	PitchingContainer,
	PitchingHeader,
	PitchName,
	Stat,
	StatsHolder,
} from '../Styles/PitchingStats';

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
			<PitchesHolder>
				<PitchingHeader>Pitches</PitchingHeader>
				<StatsHolder>
					{data.pitches.length
						? data.pitches.map((pitch) => {
								return (
									<PitchInfo key={pitch.name}>
										<PitchName>{pitch.name}</PitchName>

										<StatsHolder>
											<Stat>Control</Stat>
											<Stat>{pitch.control}</Stat>
										</StatsHolder>
										<StatsHolder>
											<Stat>Movement</Stat>
											<Stat>{pitch.movement}</Stat>
										</StatsHolder>
										<StatsHolder>
											<Stat>Speed</Stat>
											<Stat>{pitch.speed}</Stat>
										</StatsHolder>
									</PitchInfo>
								);
						  })
						: null}
				</StatsHolder>
			</PitchesHolder>
		</PitchingContainer>
	);
}

export default PitchingStats;
