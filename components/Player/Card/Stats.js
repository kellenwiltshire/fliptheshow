import React from 'react';

function Stats({ data }) {
	return (
		<div>
			<div className='flex-row flex-wrap flex my-2'>
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
					<span className='w-20 text-center'>{data.drag_bunting_ability}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Durability</span>
					<span className='w-20 text-center'>{data.hitting_durability}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-24 text-center'>Base Ability</span>
					<span className='w-24 text-center'>{data.baserunning_ability}</span>
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
					<span className='w-20 text-center'>{data.plate_discipline}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Vision</span>
					<span className='w-20 text-center'>{data.plate_vision}</span>
				</div>
			</div>
			<div className='flex-row flex-wrap flex my-2'>
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
					<span className='w-20 text-center'>{data.fielding_ability}</span>
				</div>
				<div className='flex-col flex border border-gray-200 px-2'>
					<span className='w-20 text-center'>Durability</span>
					<span className='w-20 text-center'>{data.fielding_durability}</span>
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
	);
}

export default Stats;
