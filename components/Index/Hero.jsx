import React from 'react';
import {
	AbsoluteDiv,
	Container,
	Header,
	HeroImage,
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
					<HeroImage src='/hero.jpg' alt='Baseball Field' />
					<ImageBlend />
				</ImageHolder>
				<TextHolder>
					<Header>
						<span style={{ display: 'block', color: 'white' }}>Take control of the</span>
						<span style={{ display: 'block', color: 'rgb(199 210 254)' }}>MLB The Show Market</span>
					</Header>
					<SubText>This site is dedicated to helping you get the most for your card in MLB The Show 22.</SubText>
				</TextHolder>
			</Container>
		</Main>
	);
}
