import React from 'react';
import Link from 'next/link';

function Navigation() {
	return (
		<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
			<Link href='/'>
				<a className='mr-5 hover:text-gray-900'>
					Flip The Show<span className='text-xs'>(beta)</span>
				</a>
			</Link>
			<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
				<Link href='/'>
					<a className='mr-5 hover:text-gray-900'>Players</a>
				</Link>

				<Link href='/stadiums'>
					<a className='mr-5 hover:text-gray-900'>Stadiums</a>
				</Link>
				<Link href='/equipment'>
					<a className='mr-5 hover:text-gray-900'>Equipment</a>
				</Link>
			</nav>
			<div>
				<a
					href='https://www.paypal.com/donate?business=Z2PC95TA9JLVL&item_name=Web+Services&currency_code=CAD'
					rel='noopener noreferrer'
					target='_blank'
				>
					<img
						src='/donate.png'
						alt='Donate with PayPal'
						width='90px'
						height='auto'
					/>
				</a>
			</div>
		</div>
	);
}

export default Navigation;
