import React from 'react';
import Link from 'next/link';

function Navigation() {
	return (
		<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
			<Link href='/'>
				<a className='mr-5 hover:text-gray-900'>Flip The Show</a>
			</Link>
			<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
				<Link href='/'>
					<a className='mr-5 hover:text-gray-900'>Players</a>
				</Link>
				<a className='mr-5 hover:text-gray-900'>Stadiums</a>
				<a className='mr-5 hover:text-gray-900'>Equipment</a>
			</nav>
		</div>
	);
}

export default Navigation;
