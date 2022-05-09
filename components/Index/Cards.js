const people = [
	{
		name: 'Players',
		imageUrl: '/player.png',
	},
	{
		name: 'Stadiums',
		imageUrl: '/stadium.png',
	},
	{
		name: 'Equipment',
		imageUrl: '/equipment.png',
	},
];

export default function Cards() {
	return (
		<div className='bg-white'>
			<div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
				<div className='space-y-12'>
					<div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
						<h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Our Team</h2>
						<p className='text-xl text-gray-500'>
							Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
							quis et.
						</p>
					</div>
					<ul
						role='list'
						className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
					>
						{people.map((person) => (
							<li key={person.name}>
								<div className='space-y-4'>
									<div className='aspect-w-3 aspect-h-2'>
										<img className='object-cover shadow-lg rounded-lg' src={person.imageUrl} alt='' />
									</div>

									<div className='space-y-2'>
										<div className='text-lg leading-6 font-medium space-y-1'>
											<h3>{person.name}</h3>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
