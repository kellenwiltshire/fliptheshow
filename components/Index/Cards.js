import Link from 'next/link';

const markets = [
	{
		name: 'Players',
		imageUrl: '/player.png',
		link: '/playercards',
	},
	{
		name: 'Stadiums',
		imageUrl: '/stadium.png',
		link: 'stadiums',
	},
	{
		name: 'Equipment',
		imageUrl: '/equipment.png',
		link: '/equipment',
	},
];

export default function Cards() {
	return (
		<div className='bg-white'>
			<div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 '>
				<div className='space-y-12'>
					<div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
						<h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>View Markets</h2>
					</div>
					<ul
						role='list'
						className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
					>
						{markets.map((market) => (
							<Link href={market.link} key={market.name}>
								<a>
									<li>
										<div className='space-y-4'>
											<div className='aspect-w-3 aspect-h-2'>
												<img
													className='object-cover shadow-lg rounded-lg p-4'
													src={market.imageUrl}
													alt={`${market.name} Market`}
												/>
											</div>

											<div className='space-y-2'>
												<div className='text-lg leading-6 font-medium space-y-1 text-center'>
													<h3>{market.name}</h3>
												</div>
											</div>
										</div>
									</li>
								</a>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
