import React from 'react';

export default function player({ data }) {
	return (
		<div>
			<div className='max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg'>
				<div id='header' className='flex'>
					<img
						className='w-45 rounded-md border-2 border-gray-300'
						src={data.img}
					/>
					<div id='body' className='flex flex-col ml-5'>
						<h4 id='name' className='text-xl font-semibold mb-2'>
							{data.name}
						</h4>
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
