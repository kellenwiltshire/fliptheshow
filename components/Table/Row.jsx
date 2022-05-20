import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { MobileData, NormalData, NormalDataWithHidden, NameData, SROnly, NameLink, SubHiddenText } from './Styles/Row';

export default function Row({ item, isPlayer, isTeam }) {
	const itemName = item.listing_name.replace('&trade;', '™').replace('&reg;', '®');

	return (
		<tr key={item.item.uuid}>
			{isPlayer ? (
				<NameData>
					<NameLink>
						<Link
							href={{
								pathname: '/players/[player]',
								query: { player: item.item.uuid },
							}}
						>
							<a>{item.listing_name}</a>
						</Link>
						<a href={`https://mlb22.theshow.com/items/${item.item.uuid}`} target='_blank'>
							<ExternalLinkIcon style={{ height: '1.25rem', width: '1.25rem' }} />
						</a>
					</NameLink>
					<SubHiddenText>
						<SROnly>Rarity</SROnly>
						<MobileData>{item.item.rarity}</MobileData>
						<SROnly>Series</SROnly>
						<MobileData>{item.item.series}</MobileData>

						{isTeam ? (
							<>
								<SROnly>Team</SROnly>
								<MobileData>{item.item.team}</MobileData>
							</>
						) : null}
					</SubHiddenText>
				</NameData>
			) : (
				<NameData>
					<NameLink>
						{itemName}
						<a href={`https://mlb22.theshow.com/items/${item.item.uuid}`} target='_blank'>
							<ExternalLinkIcon style={{ height: '1.25rem', width: '1.25rem' }} />
						</a>
					</NameLink>
					<SubHiddenText>
						<SROnly>Rarity</SROnly>
						<MobileData>{item.item.rarity}</MobileData>
						<SROnly>Series</SROnly>
						<MobileData>{item.item.series}</MobileData>

						{isTeam ? (
							<>
								<SROnly>Team</SROnly>
								<MobileData>{item.item.team}</MobileData>
							</>
						) : null}
					</SubHiddenText>
				</NameData>
			)}

			<NormalDataWithHidden>{item.item.rarity}</NormalDataWithHidden>
			<NormalDataWithHidden>{item.item.series}</NormalDataWithHidden>
			{isTeam ? <NormalDataWithHidden>{item.item.team}</NormalDataWithHidden> : null}

			<NormalData>{item.best_buy_price}</NormalData>

			<NormalData>{item.best_sell_price}</NormalData>

			<NormalData>{item.profit}</NormalData>
			{/* <NormalData>{item.profit_per_min}</NormalData> */}
		</tr>
	);
}
