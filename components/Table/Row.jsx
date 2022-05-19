import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { MobileData, NormalData, NormalDataWithHidden, SROnly } from './Styles/Row';

export default function Row({ item, isPlayer, isTeam }) {
	const itemName = item.listing_name.replace('&trade;', '™').replace('&reg;', '®');

	return (
		<tr key={item.item.uuid}>
			{isPlayer ? (
				<td className='border-t-2 border-gray-200 px-4 py-3 flex flex-col lg:flex-row justify-between'>
					<span className='flex flex-row justify-between'>
						<Link
							href={{
								pathname: '/players/[player]',
								query: { player: item.item.uuid },
							}}
						>
							<a>{item.listing_name}</a>
						</Link>
						<a href={`https://mlb22.theshow.com/items/${item.item.uuid}`} target='_blank'>
							<ExternalLinkIcon className='h-5 w-5' />
						</a>
					</span>
					<dl className='font-normal sm:hidden'>
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
					</dl>
				</td>
			) : (
				<td className='border-t-2 border-gray-200 px-4 py-3 lg:flex-row justify-between flex flex-col'>
					<span className='flex flex-row justify-between'>
						{itemName}
						<a href={`https://mlb22.theshow.com/items/${item.item.uuid}`} target='_blank'>
							<ExternalLinkIcon className='h-5 w-5' />
						</a>
					</span>
					<dl className='font-normal sm:hidden'>
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
					</dl>
				</td>
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
