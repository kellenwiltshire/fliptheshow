import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { SROnly } from './Styles/Row';

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
						<dd className='mt-1 truncate text-gray-700'>{item.item.rarity}</dd>
						<SROnly>Series</SROnly>
						<dd className='mt-1 truncate text-gray-700'>{item.item.series}</dd>

						{isTeam ? (
							<>
								<SROnly>Team</SROnly>
								<dd className='mt-1 truncate text-gray-700'>{item.item.team}</dd>
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
						<dd className='mt-1 truncate text-gray-700'>{item.item.rarity}</dd>
						<SROnly>Series</SROnly>
						<dd className='mt-1 truncate text-gray-700'>{item.item.series}</dd>

						{isTeam ? (
							<>
								<SROnly>Team</SROnly>
								<dd className='mt-1 truncate text-gray-700'>{item.item.team}</dd>
							</>
						) : null}
					</dl>
				</td>
			)}

			<td className='border-t-2 border-gray-200 px-4 py-3 hidden sm:table-cell'>{item.item.rarity}</td>
			<td className='border-t-2 border-gray-200 px-4 py-3 hidden sm:table-cell'>{item.item.series}</td>
			{isTeam ? <td className='border-t-2 border-gray-200 px-4 py-3 hidden sm:table-cell'>{item.item.team}</td> : null}

			<td className='border-t-2 border-gray-200 px-4 py-3'>{item.best_buy_price}</td>

			<td className='border-t-2 border-gray-200 px-4 py-3'>{item.best_sell_price}</td>

			<td className='border-t-2 border-gray-200 px-4 py-3'>{item.profit}</td>
			{/* <td className='border-t-2 border-gray-200 px-4 py-3'>{item.profit_per_min}</td> */}
		</tr>
	);
}
