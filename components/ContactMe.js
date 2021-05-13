import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactMe() {
	const [state, handleSubmit] = useForm('mvodkknp');
	if (state.succeeded) {
		return (
			<div className='container px-5 mx-auto flex justify-center lg:my-10'>
				<div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md'>
					<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
						Feedback
					</h2>
					<p className='leading-relaxed mb-5 text-gray-600'>
						Have any thoughts on how I can improve the site? Any idea's you'd
						like to see?
					</p>
					<form onSubmit={handleSubmit} className='relative mb-4'>
						<label for='message' className='leading-7 text-sm text-gray-600'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
						></textarea>

						<p className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg self-center my-2 w-full text-center'>
							Thank You for the Feedback!
						</p>
					</form>
				</div>
			</div>
		);
	}
	return (
		<div className='container px-5 mx-auto flex justify-center'>
			<div className='lg:w-1/3 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 shadow-md'>
				<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
					Feedback
				</h2>
				<p className='leading-relaxed mb-5 text-gray-600'>
					Have any thoughts on how I can improve the site? Any idea's you'd like
					to see?
				</p>
				<form onSubmit={handleSubmit} className='relative mb-4'>
					<label for='message' className='leading-7 text-sm text-gray-600'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
					></textarea>

					<button
						type='submit'
						className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg self-center my-2 w-full'
					>
						Send Feedback
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
