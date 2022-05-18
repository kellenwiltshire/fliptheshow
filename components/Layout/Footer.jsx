import React from 'react';
import Github from '../Icons/Github';
import { DeveloperLink, DeveloperText, DonateLink, FooterStyle, GithubHolder, TitleName } from './Styles/Style-Footer';

function Footer() {
	return (
		<FooterStyle>
			<TitleName> Flip The Show</TitleName>
			<DeveloperText>
				<DeveloperLink href='https://kellenwiltshire.com' rel='noopener noreferrer' target='_blank'>
					© Kellen Wiltshire Web Development
				</DeveloperLink>
			</DeveloperText>
			<GithubHolder>
				<a
					href='https://github.com/kellenwiltshire/fliptheshow'
					style={{ color: 'rgb(107 114 128)' }}
					rel='noopener noreferrer'
					target='_blank'
				>
					<Github />
				</a>
				<a
					href='https://github.com/kellenwiltshire/fliptheshow/issues'
					style={{ color: 'rgb(107 114 128)', marginLeft: '0.25rem' }}
				>
					Issues?
				</a>
			</GithubHolder>
			<DonateLink
				href='https://www.paypal.com/donate?business=Z2PC95TA9JLVL&item_name=Web+Services&currency_code=CAD'
				rel='noopener noreferrer'
				target='_blank'
			>
				<img alt='Donate with PayPal' src='/donate.png' width='90px' height='auto' />
			</DonateLink>
		</FooterStyle>
	);
}

export default Footer;
