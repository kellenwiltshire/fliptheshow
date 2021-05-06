import React from 'react';

function Footer() {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
					<span className='ml-3 text-xl'>Flip The Show</span>
				</a>
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					<a
						href='https://kellenwiltshire.com'
						className='text-gray-600 ml-1'
						rel='noopener noreferrer'
						target='_blank'
					>
						© Kellen Wiltshire Web Development
					</a>
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a
						href='https://github.com/kellenwiltshire/fliptheshow'
						className='text-gray-500'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-brand-github'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#000000'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
						</svg>
					</a>
				</span>
			</div>
		</footer>
	);
}

export default Footer;
