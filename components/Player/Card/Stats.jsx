import React from 'react';
import { PitchingContainer, PitchingHeader, Stat, StatsHolder } from '../Styles/PitchingStats';

function Stats({ data }) {
	return (
		<div>
			<PitchingContainer>
				<PitchingHeader>Hitting Stats</PitchingHeader>
				<StatsHolder>
					<Stat>Con-L</Stat>
					<Stat>{data.contact_left}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Con-R</Stat>
					<Stat>{data.contact_right}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Pow-L</Stat>
					<Stat>{data.power_left}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Pow-R</Stat>
					<Stat>{data.power_right}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Bunt</Stat>
					<Stat>{data.bunting_ability}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Drag Bunt</Stat>
					<Stat>{data.drag_bunting_ability}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Durability</Stat>
					<Stat>{data.hitting_durability}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Base Ability</Stat>
					<Stat>{data.baserunning_ability}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Base Aggression</Stat>
					<Stat>{data.baserunning_aggression}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Clutch</Stat>
					<Stat>{data.batting_clutch}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Discipline</Stat>
					<Stat>{data.plate_discipline}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Vision</Stat>
					<Stat>{data.plate_vision}</Stat>
				</StatsHolder>
			</PitchingContainer>
			<PitchingContainer>
				<PitchingHeader>Fielding Stats</PitchingHeader>
				<StatsHolder>
					<Stat>Arm Acc</Stat>
					<Stat>{data.arm_accuracy}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Arm Str</Stat>
					<Stat>{data.arm_strength}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Fielding</Stat>
					<Stat>{data.fielding_ability}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Durability</Stat>
					<Stat>{data.fielding_durability}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Reaction</Stat>
					<Stat>{data.reaction_time}</Stat>
				</StatsHolder>
				<StatsHolder>
					<Stat>Stamina</Stat>
					<Stat>{data.stamina}</Stat>
				</StatsHolder>
			</PitchingContainer>
		</div>
	);
}

export default Stats;
