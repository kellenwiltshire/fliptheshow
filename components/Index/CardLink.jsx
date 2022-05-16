import React from 'react';
import Link from 'next/link';

function CardLink({ market }) {
	return (
		<li>
			<Link href={market.link} key={market.name}>
				<a>
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
				</a>
			</Link>
		</li>
	);
}

export default CardLink;
