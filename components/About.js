import React from 'react';

function About() {
	return (
		<div className='lg:w-3/4 px-1 sm:px-6 lg:mt-10'>
			<div className='flex flex-row flex-wrap justify-center lg:justify-between items-center'>
				<div className='lg:w-6/12 lg:p-0 p-7'>
					<h1 className='text-3xl sm:text-6xl text-center mb-5 sm:mb-10 font-headers text-blue-600'>
						Kellen Wiltshire
					</h1>
					<p className='text-sm sm:text-xl leading-relaxed font-body pb-5'>
						I am a passionate full-stack developer specializing in all aspects
						of Web Development looking for the next step in my career. I have
						the experience to create beautiful and functional websites combining
						the latest frameworks and technologies. I have experience in React,
						Javascript/Typescript, TailwindCSS, Styled Components, as well as
						traditional HTML5 and CSS3. I am currently look for a new Web
						Development career opportunity!
					</p>

					<p className='text-sm sm:text-xl pb-5 leading-relaxed font-body'>
						See more of my work at{' '}
						<a href='kellenwiltshire.com'>KellenWiltshire.com</a>
					</p>
				</div>

				<div className='flex flex-row w-96 justify-center items-center text-center p-5 rounded-none shadow'>
					<div>
						<img
							className='rounded-full'
							src='https://avatars.githubusercontent.com/u/31140634?v=4'
							alt='Profile Image'
						/>
						<h1 className='text-black'>Kellen Wiltshire</h1>
						<h2 className='text-black'>Kingston, Ontario, Canada</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
