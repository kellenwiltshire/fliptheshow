import React from 'react';

export default function Hero() {
	return (
		<main>
			{/* <!-- Hero card --> */}
			<div class='relative'>
				<div class='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
				<div class='max-w-7xl mx-auto sm:px-6 lg:px-8'>
					<div class='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
						<div class='absolute inset-0'>
							<img class='h-full w-full object-cover' src='/hero.jpg' alt='Baseball Field' />
							<div class='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
						</div>
						<div class='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
							<h1 class='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
								<span class='block text-white'>Take control of the</span>
								<span class='block text-indigo-200'>MLB The Show Market</span>
							</h1>
							<p class='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
								This site is dedicated to helping you get the most for your card in MLB The Show 22.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
