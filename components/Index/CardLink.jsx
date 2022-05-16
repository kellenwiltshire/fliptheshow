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

function CardLink({ market }) {
	return (
		<li>
			<Link href={market.link} key={market.name}>
				<a>
					<Card>
						<ImageHolder>
							<Image src={market.imageUrl} alt={`${market.name} Market`} />
						</ImageHolder>

						<div className='space-y-2'>
							<div className='text-lg leading-6 font-medium space-y-1 text-center'>
								<h3>{market.name}</h3>
							</div>
						</div>
					</Card>
				</a>
			</Link>
		</li>
	);
}

export default CardLink;
