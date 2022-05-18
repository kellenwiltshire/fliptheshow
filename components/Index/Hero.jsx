import React from 'react';
import {
	AbsoluteDiv,
	Container,
	Header,
	Image,
	ImageBlend,
	ImageHolder,
	Main,
	SubText,
	TextHolder,
} from './Styles/Style-Hero';

export default function Hero() {
	return (
		<Main>
			<AbsoluteDiv />
			<Container>
				<ImageHolder>
					<Image src='/hero.jpg' alt='Baseball Field' />
					<ImageBlend />
				</ImageHolder>
				<TextHolder>
					<Header>
						<span class='block text-white'>Take control of the</span>
						<span class='block text-indigo-200'>MLB The Show Market</span>
					</Header>
					<SubText>This site is dedicated to helping you get the most for your card in MLB The Show 22.</SubText>
				</TextHolder>
			</Container>
		</Main>
	);
}
