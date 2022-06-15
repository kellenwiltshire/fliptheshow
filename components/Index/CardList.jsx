import CardLink from './Card';
import { Header, Holder, TitleHolder, List } from './Styles/Style-CardList';

const markets = [
	{
		name: 'Players',
		imageUrl: '/player.png',
		link: '/playercards',
	},
	{
		name: 'Stadiums',
		imageUrl: '/stadium.png',
		link: 'stadiums',
	},
	{
		name: 'Equipment',
		imageUrl: '/equipment.png',
		link: '/equipment',
	},
];

export default function CardsList() {
	return (
		<Holder>
			<TitleHolder>
				<Header>View Markets</Header>
			</TitleHolder>
			<List role='list'>
				{markets.map((market) => (
					<CardLink key={market.name} market={market} />
				))}
			</List>
		</Holder>
	);
}
