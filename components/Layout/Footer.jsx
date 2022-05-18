import React from 'react';
import Github from '../Icons/Github';
import { FooterStyle, TitleName } from './Styles/Style-Footer';

function Footer() {
	return (
		<FooterStyle>
			<TitleName> Flip The Show</TitleName>
			<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
				<a href='https://kellenwiltshire.com' className='text-gray-600 ml-1' rel='noopener noreferrer' target='_blank'>
					© Kellen Wiltshire Web Development
				</a>
			</p>
			<span className='inline-flex sm:ml-auto sm:my-0 my-4 justify-center sm:justify-start'>
				<a
					href='https://github.com/kellenwiltshire/fliptheshow'
					className='text-gray-500'
					rel='noopener noreferrer'
					target='_blank'
				>
					<Github />
				</a>
				<a href='https://github.com/kellenwiltshire/fliptheshow/issues' className='text-gray-600 ml-1'>
					<span>Issues?</span>
				</a>
			</span>
			<div className='md:ml-10 mt-2 md:mt-0'>
				<a
					href='https://www.paypal.com/donate?business=Z2PC95TA9JLVL&item_name=Web+Services&currency_code=CAD'
					rel='noopener noreferrer'
					target='_blank'
				>
					<img alt='Donate with PayPal' src='/donate.png' width='90px' height='auto' />
				</a>
			</div>
		</FooterStyle>
	);
}

export default Footer;
