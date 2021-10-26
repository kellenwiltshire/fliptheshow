import React from 'react';
import Link from 'next/link';

function Navigation() {
	return (
		<div className='flex justify-center'>
			<div className='container flex flex-wrap mt-2 flex-row justify-center'>
				<Link href='/'>
					<a className='hover:text-gray-900 py-1 text-center w-full md:w-auto md:py-1 md:my-2 md:ml-2'>
						Flip The Show
					</a>
				</Link>
				<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center my-2 lg:my-0'>
					<Link href='/'>
						<a className='mr-5 hover:text-gray-900'>Players</a>
					</Link>

					<Link href='/stadiums'>
						<a className='mr-5 hover:text-gray-900'>Stadiums</a>
					</Link>
					<Link href='/equipment'>
						<a className='mr-5 hover:text-gray-900'>Equipment</a>
					</Link>
					<Link href='/contact'>
						<a className='mr-5 hover:text-gray-900'>Contact</a>
					</Link>
				</nav>
				<div className='mt-3 lg:mt-0 hidden md:block'>
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
		</div>
	);
}

export default Navigation;
