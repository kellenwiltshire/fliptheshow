import React from 'react';
import Link from 'next/link';
import { Container, DonateLink, HomeLink, Nav, NavContainer, NavLink } from './Styles/Style-Navigation';

function Navigation() {
	return (
		<Container>
			<NavContainer className='container'>
				<Link href='/'>
					<HomeLink>Flip The Show</HomeLink>
				</Link>
				<Nav>
					<Link href='/playercards'>
						<NavLink>Players</NavLink>
					</Link>

					<Link href='/stadiums'>
						<NavLink>Stadiums</NavLink>
					</Link>
					<Link href='/equipment'>
						<NavLink>Equipment</NavLink>
					</Link>
					<Link href='/contact'>
						<NavLink>Contact</NavLink>
					</Link>
				</Nav>
				<DonateLink
					href='https://www.paypal.com/donate?business=Z2PC95TA9JLVL&item_name=Web+Services&currency_code=CAD'
					rel='noopener noreferrer'
					target='_blank'
				>
					<img src='/donate.png' alt='Donate with PayPal' width='90px' height='auto' />
				</DonateLink>
			</NavContainer>
		</Container>
	);
}

export default Navigation;
