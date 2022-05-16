import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Card = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const ImageHolder = styled.div`
	aspect-ratio: 3/2;
`;

const Image = styled.img`
	object-fit: cover;
	box-shadow: 10px 10px 5px lightblue;
	border-radius: 0.5rem;
	padding: 1rem;
`;

const TextHolder = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const Text = styled.h3`
	font-size: 1.125rem;
	line-height: 1.5rem;
	font-weight: 500;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	text-align: center;
`;

function CardLink({ market }) {
	return (
		<li>
			<Link href={market.link} key={market.name}>
				<a>
					<Card>
						<ImageHolder>
							<Image src={market.imageUrl} alt={`${market.name} Market`} />
						</ImageHolder>
						<TextHolder>
							<Text>{market.name}</Text>
						</TextHolder>
					</Card>
				</a>
			</Link>
		</li>
	);
}

export default CardLink;
