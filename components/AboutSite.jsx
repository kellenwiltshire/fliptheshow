import React from 'react';

function AboutSite() {
	return (
		<div className='container px-1 sm:px-6 pt-20 flex justify-center my-3'>
			<div className='flex flex-col flex-wrap justify-center lg:justify-between items-center w-screen lg:w-1/2'>
				<h1 className='text-3xl sm:text-6xl text-center mb-5 sm:mb-10 font-headers text-blue-600'>
					Flip The Show
				</h1>
				<p className='text-sm sm:text-xl leading-relaxed font-body pb-5 text-center'>
					Welcome to FlipThe.Show!
				</p>

				<p className='text-sm sm:text-xl pb-5 leading-relaxed font-body text-center'>
					This site is dedicated to helping you get the best deal for your card
					in MLB The Show 22.
				</p>
				<p className='text-sm sm:text-xl pb-5 leading-relaxed font-body text-center'>
					Using the information on this site you can make sure that you don't
					buy a card for too much, or sell a card for too little. You can also
					use it to flip cards for great profits to make your Diamond Dynasty
					team unstoppable!
				</p>
			</div>
		</div>
	);
}

export default AboutSite;
